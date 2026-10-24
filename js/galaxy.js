import * as THREE from 'three';
import { NEIGHBORHOOD, GALAXY_POIS, GALAXY_FACTS } from './galaxydata.js';

/* Shared helpers */
function softDotTexture(inner, outer) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, inner);
  g.addColorStop(0.4, outer);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function circleLine(radius, color, opacity, dashed) {
  const pts = [];
  for (let i = 0; i <= 128; i++) {
    const a = (i / 128) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const mat = dashed
    ? new THREE.LineDashedMaterial({ color, transparent: true, opacity, dashSize: 0.6, gapSize: 0.45 })
    : new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  const line = new THREE.Line(geo, mat);
  if (dashed) line.computeLineDistances();
  return line;
}

function gauss() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/* ================= MILKY WAY (1 unit = 1,000 ly) ================= */
export function buildGalaxy() {
  const group = new THREE.Group();
  const SUN_R = 26;          // units: Sun ~26,000 ly from center
  const DISK_R = 50;         // disk radius ~50,000 ly (diameter ~100,000)
  const BAR_ANGLE = THREE.MathUtils.degToRad(25); // bar tilt vs Sun-center line (approximate)

  const dot = softDotTexture('rgba(255,255,255,1)', 'rgba(160,180,255,0.35)');

  /* --- particles: bar + bulge + 2 major arms with spurs --- */
  const positions = [], colors = [];
  const cArmBlue = new THREE.Color(0x8fa8d8), cArmWhite = new THREE.Color(0xdfe6f2),
        cBulge = new THREE.Color(0xe8cf9e), cPink = new THREE.Color(0xd88ab0), tmpC = new THREE.Color();

  function push(x, y, z, col, jitter) {
    positions.push(x + gauss() * jitter, y + gauss() * jitter * 0.22, z + gauss() * jitter);
    colors.push(col.r, col.g, col.b);
  }

  /* bulge: warm, puffy center */
  for (let i = 0; i < 7000; i++) {
    const r = Math.abs(gauss()) * 4.2;
    const a = Math.random() * Math.PI * 2;
    const y = gauss() * 2.2 * Math.max(0.25, 1 - r / 6);
    positions.push(Math.cos(a) * r, y, Math.sin(a) * r);
    tmpC.copy(cBulge).lerp(cArmWhite, Math.random() * 0.25);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
  }
  /* bar: elongated, tilted */
  const cosB = Math.cos(BAR_ANGLE), sinB = Math.sin(BAR_ANGLE);
  for (let i = 0; i < 9000; i++) {
    const t = (Math.random() * 2 - 1) * 13;
    const spread = 2.6 * (1 - Math.abs(t) / 14);
    const x = t + gauss() * spread, z = gauss() * spread;
    const y = gauss() * 0.55;
    positions.push(x * cosB - z * sinB, y, x * sinB + z * cosB);
    tmpC.copy(cBulge).lerp(cArmWhite, Math.random() * 0.35);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
  }
  /* two major spiral arms, each starting at a bar end and wrapping ~0.9 turn */
  const PITCH = Math.tan(THREE.MathUtils.degToRad(14));
  const spiralR = (th) => 2.84 * Math.exp(th * PITCH); // r(2*pi) = 13 = bar end
  function arm(offset, theta0, theta1, count, width, jitter) {
    for (let i = 0; i < count; i++) {
      const th = theta0 + Math.random() * (theta1 - theta0);
      const r = spiralR(th);
      if (r > DISK_R) continue;
      const a = th + BAR_ANGLE + offset;
      const x = r * Math.cos(a), z = r * Math.sin(a);
      const w = width + r * 0.04;
      positions.push(x + gauss() * w * jitter, gauss() * w * jitter * 0.25, z + gauss() * w * jitter);
      tmpC.copy(Math.random() < 0.55 ? cArmBlue : cArmWhite);
      colors.push(tmpC.r, tmpC.g, tmpC.b);
    }
  }
  const T0 = Math.PI * 2;         // arms begin at the bar ends
  arm(0, T0, 11.8, 30000, 0.45, 1.0);
  arm(Math.PI, T0, 11.8, 30000, 0.45, 1.0);
  arm(0, T0 - 1.2, 9.0, 6000, 1.0, 1.6);   // inner spur fill (Sagittarius-like)
  arm(Math.PI, T0 - 1.2, 9.0, 6000, 1.0, 1.6);
  /* pink star-forming knots along arms */
  for (let i = 0; i < 1400; i++) {
    const th = T0 + Math.random() * 5.2;
    const r = spiralR(th);
    if (r > DISK_R * 0.95) continue;
    const a = th + BAR_ANGLE + (Math.random() < 0.5 ? 0 : Math.PI);
    positions.push(r * Math.cos(a) + gauss() * 1.4, gauss() * 0.3, r * Math.sin(a) + gauss() * 1.4);
    colors.push(cPink.r, cPink.g, cPink.b);
  }
  /* thin far disk haze */
  for (let i = 0; i < 4000; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = DISK_R * (0.75 + Math.random() * 0.3);
    positions.push(Math.cos(a) * r, gauss() * 0.5, Math.sin(a) * r);
    tmpC.copy(cArmBlue).multiplyScalar(0.5);
    colors.push(tmpC.r, tmpC.g, tmpC.b);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.55, map: dot, vertexColors: true, transparent: true, opacity: 0.85,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
  }));
  group.add(pts);

  /* --- markers --- */
  const pickMeshes = [];
  const labels = [];
  const glowTex = softDotTexture('rgba(255,255,255,1)', 'rgba(255,200,120,0.3)');

  function marker(body, pos, color, radius, label) {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 24, 24),
      new THREE.MeshBasicMaterial({ color })
    );
    m.position.copy(pos);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending
    }));
    glow.scale.setScalar(radius * 7);
    glow.raycast = () => {};
    m.add(glow);
    /* generous invisible hit target */
    const hit = new THREE.Mesh(new THREE.SphereGeometry(Math.max(radius * 2.2, 0.7), 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }));
    m.add(hit);
    m.userData = { body, eyebrow: body.kind };
    body.radius = radius;
    group.add(m);
    pickMeshes.push(m);
    const el = document.createElement('div');
    el.className = 'star-label';
    el.textContent = label;
    document.body.appendChild(el);
    labels.push({ mesh: m, el, always: true });
    return m;
  }

  /* galactic-direction offset from the Sun, in units (1 unit = 1,000 ly) */
  function fromSun(lDeg, bDeg, ly) {
    const l = THREE.MathUtils.degToRad(lDeg), b = THREE.MathUtils.degToRad(bDeg);
    const d = ly / 1000;
    return new THREE.Vector3(
      -Math.cos(b) * Math.cos(l) * d,
      Math.sin(b) * d,
      Math.cos(b) * Math.sin(l) * d
    );
  }
  const sunPos = new THREE.Vector3(SUN_R, 0.02, 0);

  const KIND_COLOR = {
    'Supermassive black hole': 0xffb35c, 'G-type star': 0xffe9b0,
    'Ultra-cool dwarf + 7 planets': 0xff9a62, 'Open star cluster': 0x9db4ff,
    'Red supergiant': 0xff7a4d, 'Star-forming nebula': 0xd88ab0,
    'Planetary nebula': 0x7fd4c1, 'Hypergiant': 0xff8a5c,
    'Supernova remnant': 0xffc46b, 'Globular cluster': 0xf2e3b8
  };

  for (const poi of GALAXY_POIS) {
    const body = {
      name: poi.name, kind: poi.kind, tagline: poi.kind,
      description: poi.desc, facts: poi.facts,
      source: 'Position: CDS Sesame/SIMBAD (J2000), converted to galactic coordinates. Distance as noted in the facts above. Galaxy shape is an artist\'s rendering.'
    };
    if (poi.id === 'trappist') body.action = { label: 'See its planets', mode: 'exo' };
    if (poi.id === 'sun') {
      body.action = { label: 'Open the solar system', mode: 'system' };
      body.source = 'Sun position and orbit: NASA (imagine.gsfc.nasa.gov Milky Way pages). Galaxy shape is an artist\'s rendering.';
    }
    if (poi.id === 'sgra') body.source = 'Mass and distance: NASA (nasa.gov / Event Horizon Telescope, 4.3 million Suns, ~26,000 ly).';
    const pos = poi.id === 'sgra' ? new THREE.Vector3(0, 0, 0)
      : poi.id === 'sun' ? sunPos.clone()
      : sunPos.clone().add(fromSun(poi.l, poi.b, poi.ly));
    const m = marker(body, pos, KIND_COLOR[poi.kind] || 0xffffff, poi.id === 'sun' || poi.id === 'sgra' ? 0.65 : 0.42, poi.name);
    labels[labels.length - 1].always = (poi.id === 'sun' || poi.id === 'sgra' || poi.id === 'omegacen');
  }

  /* faint disk edge ring for scale */
  const edge = circleLine(DISK_R, 0x3a4250, 0.4, false);
  group.add(edge);

  return { group, pickMeshes, labels };
}

/* ================= SOLAR NEIGHBORHOOD (1 unit = 1 ly) ================= */
export function buildNeighborhood(sunTexture) {
  const group = new THREE.Group();
  const pickMeshes = [];
  const labels = [];

  /* the Sun at the center */
  const sunBody = {
    name: 'The Sun', kind: 'G-type star', tagline: 'Our home star, one of a few hundred billion in the Milky Way.',
    description: 'Every star around it here is a real neighbor, placed at its true measured position. Distances on this view are in light-years: the light from Proxima Centauri left over four years ago.',
    facts: {
      'Type': 'G2V yellow dwarf',
      'Age': '~4.6 billion years',
      'Nearest star': 'Proxima Centauri, 4.25 ly',
      'Place in galaxy': 'Orion Spur, ~26,000 ly from the center'
    },
    source: 'Neighboring star positions: SIMBAD astronomical database (CDS), retrieved 25 Oct 2026.',
    action: { label: 'Open the solar system', mode: 'system' },
    radius: 0.5
  };
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({ map: sunTexture }));
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: softDotTexture('rgba(255,240,200,1)', 'rgba(255,200,110,0.35)'),
    transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  sunGlow.scale.setScalar(4.5);
  sunGlow.raycast = () => {};
  sun.add(sunGlow);
  const sunHit = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
  sun.add(sunHit);
  sun.userData = { body: sunBody, eyebrow: 'Star' };
  group.add(sun);
  pickMeshes.push(sun);
  const sunEl = document.createElement('div');
  sunEl.className = 'star-label';
  sunEl.textContent = 'Sun';
  document.body.appendChild(sunEl);
  labels.push({ mesh: sun, el: sunEl, always: true });

  const KIND_STYLE = {
    'Red dwarf':      { color: 0xff9a62, r: 0.22 },
    'Red dwarf binary': { color: 0xff9a62, r: 0.26 },
    'Red dwarf triple': { color: 0xff9a62, r: 0.28 },
    'Orange dwarf':   { color: 0xffc37a, r: 0.3 },
    'Orange dwarf binary': { color: 0xffc37a, r: 0.34 },
    'Orange dwarf + brown dwarfs': { color: 0xffc37a, r: 0.32 },
    'Sun-like star':  { color: 0xffe9b0, r: 0.36 },
    'Sun-like binary': { color: 0xffe9b0, r: 0.42 },
    'Yellow-white star': { color: 0xf6f2e4, r: 0.44 },
    'White star':     { color: 0xdfe8ff, r: 0.5 },
    'Bright star + white dwarf': { color: 0xd8e4ff, r: 0.52 },
    'White dwarf':    { color: 0xe8f0ff, r: 0.13 },
    'Brown dwarf':    { color: 0xb07fd4, r: 0.13 },
    'Brown dwarf binary': { color: 0xb07fd4, r: 0.17 },
    'Sub-brown dwarf': { color: 0x9a6cc4, r: 0.13 },
    'Red dwarf + brown dwarf': { color: 0xcf8a80, r: 0.24 },
    'Subdwarf':       { color: 0xf0dcb0, r: 0.3 },
    'Star':           { color: 0xffffff, r: 0.25 }
  };

  function toXYZ(raDeg, decDeg, ly) {
    const ra = THREE.MathUtils.degToRad(raDeg), dec = THREE.MathUtils.degToRad(decDeg);
    return new THREE.Vector3(
      ly * Math.cos(dec) * Math.cos(ra),
      ly * Math.sin(dec),
      -ly * Math.cos(dec) * Math.sin(ra)
    );
  }

  for (const s of NEIGHBORHOOD) {
    const style = KIND_STYLE[s.kind] || KIND_STYLE['Star'];
    let planets = 'None listed in SIMBAD (25 Oct 2026)';
    if (s.pc && s.pq) planets = `${s.pc} confirmed, ${s.pq} candidate${s.pq > 1 ? 's' : ''} (SIMBAD)`;
    else if (s.pc) planets = `${s.pc} confirmed (SIMBAD)`;
    else if (s.pq) planets = `${s.pq} candidate${s.pq > 1 ? 's' : ''}, none confirmed (SIMBAD)`;
    const body = {
      name: s.name, kind: s.kind, tagline: s.kind + ', ' + s.ly + ' light-years away',
      description: s.note || `A ${s.kind.toLowerCase()} in the Sun's local neighborhood. ` +
        (s.pc || s.pq ? `Planets listed in SIMBAD: ${planets.toLowerCase()}.` : 'No planets are listed for it in SIMBAD as of 25 Oct 2026.'),
      facts: {
        'Distance': s.ly + ' light-years',
        'Spectral type': s.sp,
        'Kind': s.kind,
        'Planets': planets
      },
      source: 'Position, spectral type and planet counts: SIMBAD astronomical database (CDS), parallax > 200 mas, retrieved 25 Oct 2026.',
      radius: style.r
    };
    const m = new THREE.Mesh(new THREE.SphereGeometry(style.r, 20, 20),
      new THREE.MeshBasicMaterial({ color: style.color }));
    m.position.copy(toXYZ(s.ra, s.dec, s.ly));
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softDotTexture('rgba(255,255,255,0.95)', 'rgba(180,190,255,0.25)'),
      transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending
    }));
    glow.scale.setScalar(style.r * 5);
    glow.raycast = () => {};
    m.add(glow);
    const hit = new THREE.Mesh(new THREE.SphereGeometry(Math.max(style.r * 1.9, 0.32), 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }));
    m.add(hit);
    m.userData = { body, eyebrow: s.kind };
    group.add(m);
    pickMeshes.push(m);
    const el = document.createElement('div');
    el.className = 'star-label';
    el.textContent = s.name;
    document.body.appendChild(el);
    labels.push({ mesh: m, el, always: !!s.note });
  }

  /* distance rings: 5, 10, 15 ly */
  for (const r of [5, 10, 15]) {
    const ring = circleLine(r, 0x2c3442, 0.7, false);
    group.add(ring);
    const el = document.createElement('div');
    el.className = 'star-label ring-label';
    el.textContent = r + ' ly';
    document.body.appendChild(el);
    const anchor = new THREE.Object3D();
    anchor.position.set(r, 0, 0);
    group.add(anchor);
    labels.push({ mesh: anchor, el, always: true });
  }

  return { group, pickMeshes, labels };
}
