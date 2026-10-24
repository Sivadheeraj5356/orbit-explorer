import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { PLANETS, SUN, EXOPLANETS, TRAPPIST_SYSTEM } from './data.js';

/* ================= scene ================= */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 42, 95);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 3;
controls.maxDistance = 400;

const texLoader = new THREE.TextureLoader();

scene.background = new THREE.Color(0x05060a);

/* extra star field */
{
  const N = 2600, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = 700 + Math.random() * 900;
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.cos(ph);
    pos[i*3+2] = r * Math.sin(ph) * Math.sin(th);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.75 })));
}

/* lighting */
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
scene.add(new THREE.HemisphereLight(0xffffff, 0x2a2f38, 0.35));
const sunLight = new THREE.PointLight(0xfff2dd, 3.2, 0, 1.4);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

/* ================= sun ================= */
const sunMesh = new THREE.Mesh(
  new THREE.SphereGeometry(SUN.radius, 64, 64),
  new THREE.MeshBasicMaterial({ map: texLoader.load(SUN.texture) })
);
sunMesh.userData = { body: SUN, eyebrow: 'Star' };
scene.add(sunMesh);

/* ================= planets ================= */
const planetMeshes = [];
const orbitLines = [];

PLANETS.forEach((p) => {
  const pivot = new THREE.Object3D();
  pivot.rotation.y = Math.random() * Math.PI * 2;
  scene.add(pivot);

  const holder = new THREE.Object3D();
  holder.position.x = p.orbit;
  pivot.add(holder);

  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(p.radius, 48, 48),
    new THREE.MeshStandardMaterial({ map: texLoader.load(p.texture), roughness: 1, metalness: 0 })
  );
  mesh.rotation.z = THREE.MathUtils.degToRad(p.tilt);
  mesh.userData = { body: p, eyebrow: 'Planet', holder, pivot };
  holder.add(mesh);

  if (p.ring) {
    const ringGeo = new THREE.RingGeometry(p.radius * 1.35, p.radius * 2.3, 96);
    const ringTex = texLoader.load(p.ring);
    const posAttr = ringGeo.attributes.position, uvAttr = ringGeo.attributes.uv, v = new THREE.Vector3();
    for (let i = 0; i < posAttr.count; i++) {
      v.fromBufferAttribute(posAttr, i);
      uvAttr.setXY(i, (v.length() - p.radius * 1.35) / (p.radius * 0.95), 1);
    }
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      map: ringTex, side: THREE.DoubleSide, transparent: true, opacity: 0.95
    }));
    ring.rotation.x = Math.PI / 2 - THREE.MathUtils.degToRad(p.tilt) * 0.2;
    mesh.add(ring);
  }

  const orbitGeo = new THREE.RingGeometry(p.orbit - 0.05, p.orbit + 0.05, 160);
  const orbit = new THREE.Mesh(orbitGeo, new THREE.MeshBasicMaterial({ color: 0x3a4250, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }));
  orbit.rotation.x = Math.PI / 2;
  scene.add(orbit);
  orbitLines.push(orbit);

  /* label */
  const label = document.createElement('div');
  label.className = 'planet-label';
  label.textContent = p.name;
  document.body.appendChild(label);
  mesh.userData.label = label;

  planetMeshes.push(mesh);
});

const sunLabel = document.createElement('div');
sunLabel.className = 'planet-label';
sunLabel.textContent = 'Sun';
document.body.appendChild(sunLabel);

/* ================= selection / fly-to ================= */
let selected = null;          // mesh currently followed
let flying = null;            // { from, to, targetFrom, targetTo, t, dur }
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const panel = document.getElementById('panel');
const rail = document.getElementById('planet-rail');

function easeInOut(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2; }

function bodyWorldPos(mesh, out) {
  return mesh.getWorldPosition(out);
}

function select(mesh) {
  selected = mesh;
  const body = mesh.userData.body;
  const worldPos = bodyWorldPos(mesh, new THREE.Vector3());
  const dir = camera.position.clone().sub(worldPos).normalize();
  if (dir.lengthSq() < 0.01) dir.set(1, 0.4, 1).normalize();
  if (window.innerWidth < 900) dir.y -= 0.38; // keep planet above the bottom sheet on mobile
  dir.normalize();
  const dist = body.radius * 5.2 + 1.4;
  const targetPos = worldPos.clone().add(dir.multiplyScalar(dist));

  flying = {
    from: camera.position.clone(), to: targetPos,
    targetFrom: controls.target.clone(), t: 0, dur: 1.4, mesh
  };
  showPanel(mesh.userData.body, mesh.userData.eyebrow);
  markRail(body.id);
  hideHint();
}

function deselect() {
  selected = null; flying = null;
  panel.hidden = true;
  document.body.classList.remove('panel-open', 'panel-collapsed-body');
  markRail(null);
}

function showPanel(body, eyebrow) {
  document.body.classList.add('panel-open');
  document.body.classList.remove('panel-collapsed-body');
  panel.classList.remove('collapsed');
  document.getElementById('panel-collapse').textContent = '_';
  document.getElementById('panel-collapse').setAttribute('aria-label', 'Collapse panel');
  document.getElementById('panel-eyebrow').textContent = eyebrow;
  document.getElementById('panel-title').textContent = body.name;
  document.getElementById('panel-tagline').textContent = body.tagline;
  document.getElementById('panel-desc').textContent = body.description;
  const dl = document.getElementById('panel-facts');
  dl.innerHTML = '';
  for (const [k, v] of Object.entries(body.facts)) {
    const cell = document.createElement('div');
    cell.innerHTML = `<dt>${k}</dt><dd>${v}</dd>`;
    dl.appendChild(cell);
  }
  document.getElementById('panel-source').textContent =
    eyebrow === 'Star'
      ? 'Data: NASA Sun Fact Sheet. Texture: Solar System Scope (CC BY 4.0).'
      : 'Data: NASA Planetary Fact Sheet. Texture: Solar System Scope (CC BY 4.0). Moon counts per the NASA fact sheet (last revised March 2025).';
  panel.hidden = false;
}

document.getElementById('panel-close').addEventListener('click', deselect);

const collapseBtn = document.getElementById('panel-collapse');
collapseBtn.addEventListener('click', () => {
  const collapsed = panel.classList.toggle('collapsed');
  document.body.classList.toggle('panel-collapsed-body', collapsed);
  collapseBtn.textContent = collapsed ? '+' : '_';
  collapseBtn.setAttribute('aria-label', collapsed ? 'Expand panel' : 'Collapse panel');
});

/* rail */
[SUN, ...PLANETS].forEach((body) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'rail-item';
  b.dataset.id = body.id;
  const dotColor = body.id === 'sun' ? '#f0b13e' : body.color;
  b.innerHTML = `<span class="rail-dot" style="background:${dotColor}"></span>${body.name}`;
  b.addEventListener('click', () => {
    if (body.id === 'sun') { select(sunMesh); }
    else { select(planetMeshes.find(m => m.userData.body.id === body.id)); }
  });
  rail.appendChild(b);
});

function markRail(id) {
  rail.querySelectorAll('.rail-item').forEach(el => el.classList.toggle('active', el.dataset.id === id));
}

/* click / tap picking (only when it is not a drag) */
let downAt = null;
canvas.addEventListener('pointerdown', (e) => { downAt = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointerup', (e) => {
  if (!downAt) return;
  const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  downAt = null;
  if (moved > 6) return;
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects([sunMesh, ...planetMeshes], true);
  if (hits.length) {
    let m = hits[0].object;
    while (m && !m.userData.body) m = m.parent;
    if (m) select(m);
  }
});

/* toggles */
let labelsOn = true, orbitsOn = true;
const labelBtn = document.getElementById('toggle-labels');
const orbitBtn = document.getElementById('toggle-orbits');
labelBtn.addEventListener('click', () => {
  labelsOn = !labelsOn;
  labelBtn.setAttribute('aria-pressed', String(labelsOn));
});
orbitBtn.addEventListener('click', () => {
  orbitsOn = !orbitsOn;
  orbitBtn.setAttribute('aria-pressed', String(orbitsOn));
  orbitLines.forEach(o => o.visible = orbitsOn);
});

/* hint */
let hintHidden = false;
function hideHint() {
  if (hintHidden) return;
  hintHidden = true;
  document.getElementById('hint').classList.add('hidden');
}
canvas.addEventListener('pointerdown', hideHint, { once: true });
setTimeout(hideHint, 14000);

/* ================= exoplanet view ================= */
const exoView = document.getElementById('exo');
const tabSystem = document.getElementById('tab-system');
const tabExo = document.getElementById('tab-exo');

function exoSizePx(radiusEarth) {
  return Math.min(58, Math.max(8, 12 * Math.pow(radiusEarth, 0.6)));
}
function typeColor(type) {
  return { 'Rocky': '#b98d55', 'Super-Earth': '#7fa36b', 'Sub-Neptune': '#6f9fb3', 'Gas giant': '#c49a6c' }[type] || '#9aa3b0';
}

function buildExo() {
  const tRow = document.getElementById('trappist-row');
  TRAPPIST_SYSTEM.planets.forEach((p) => {
    const px = Math.min(30, Math.max(9, 26 * Math.pow(p.radiusEarth, 0.7)));
    const card = document.createElement('div');
    card.className = 'trappist-card';
    card.innerHTML = `
      <div class="t-dot" style="width:${px}px;height:${px}px"></div>
      <div class="t-name">TRAPPIST-1 ${p.name}</div>
      <div class="t-fact">${p.radiusEarth} x Earth size<br>${p.orbitDays}-day year<br>${Math.round(p.tempK - 273.15)} C est. temp</div>`;
    tRow.appendChild(card);
  });

  const grid = document.getElementById('exo-grid');
  EXOPLANETS.forEach((p) => {
    const px = exoSizePx(p.radiusEarth);
    const card = document.createElement('article');
    card.className = 'exo-card';
    card.innerHTML = `
      <div class="exo-card-top">
        <div class="exo-size">
          <div class="p" style="width:${px}px;height:${px}px;background:${typeColor(p.type)}"></div>
          <div class="e"></div><span class="e-label">Earth</span>
        </div>
        <div>
          <h3>${p.name}</h3>
          <div class="exo-host">orbits ${p.host} - ${p.distanceLy} light-years away</div>
          <span class="exo-badge">${p.type}</span>
        </div>
      </div>
      <p class="exo-note2">${p.note}</p>
      <div class="exo-facts">
        <span>Found <b>${p.year}</b> (${p.method})</span>
        <span>Size <b>${p.radiusEarth} x Earth</b></span>
        <span>Mass <b>${p.massEarth} x Earth</b></span>
        <span>Year <b>${p.orbitDays} days</b></span>
        <span>Est. temp <b>${Math.round(p.tempK - 273.15)} C</b></span>
      </div>`;
    grid.appendChild(card);
  });
}
buildExo();

tabExo.addEventListener('click', () => {
  deselect();
  exoView.hidden = false;
  rail.style.display = 'none';
  document.getElementById('hint').style.display = 'none';
  tabExo.classList.add('active');
  tabSystem.classList.remove('active');
});
tabSystem.addEventListener('click', () => {
  exoView.hidden = true;
  rail.style.display = '';
  document.getElementById('hint').style.display = '';
  tabSystem.classList.add('active');
  tabExo.classList.remove('active');
});

/* deep links: ?focus=earth&view=exo */
{
  const q = new URLSearchParams(location.search);
  if (q.get('view') === 'exo') tabExo.click();
  const focus = q.get('focus');
  if (focus) {
    const snap = q.get('snap') === '1';
    setTimeout(() => {
      const m = focus === 'sun' ? sunMesh : planetMeshes.find(m => m.userData.body.id === focus);
      if (!m) return;
      select(m);
      if (snap && flying) {
        camera.position.copy(flying.to);
        controls.target.copy(m.getWorldPosition(new THREE.Vector3()));
        flying = null;
      }
    }, 400);
  }
}

/* test/debug handle */
window.__orbit = { camera, controls, planetMeshes, sunMesh, THREE, get selected() { return selected; } };

/* ================= animate ================= */
const clock = new THREE.Clock();
const tmpV = new THREE.Vector3();
const TIME_SCALE = 0.12;

function project(mesh, label, extraHeight) {
  if (!labelsOn || !exoView.hidden) { label.style.display = 'none'; return; }
  bodyWorldPos(mesh, tmpV);
  tmpV.y += extraHeight;
  tmpV.project(camera);
  if (tmpV.z > 1) { label.style.display = 'none'; return; }
  label.style.display = 'block';
  label.style.left = ((tmpV.x * 0.5 + 0.5) * window.innerWidth) + 'px';
  label.style.top = ((-tmpV.y * 0.5 + 0.5) * window.innerHeight) + 'px';
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  planetMeshes.forEach((mesh) => {
    const p = mesh.userData.body;
    mesh.userData.pivot.rotation.y += p.speed * TIME_SCALE * dt;
    mesh.rotation.y += p.rotationSpeed * 60 * dt * 0.5;
  });
  sunMesh.rotation.y += 0.01 * dt;

  /* follow selected body */
  if (selected) {
    const pos = bodyWorldPos(selected, new THREE.Vector3());
    const delta = pos.clone().sub(controls.target);
    if (flying) {
      flying.t += dt / flying.dur;
      const k = easeInOut(Math.min(flying.t, 1));
      camera.position.lerpVectors(flying.from, flying.to, k);
      controls.target.copy(pos);
      if (flying.t >= 1) flying = null;
    } else {
      camera.position.add(delta);
      controls.target.copy(pos);
    }
  }

  project(sunMesh, sunLabel, SUN.radius + 1);
  planetMeshes.forEach(m => project(m, m.userData.label, m.userData.body.radius + 0.8));

  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
