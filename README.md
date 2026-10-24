# Orbit - from the planets to the galaxy

An interactive 3D tour that starts at the Sun and zooms out: every planet up close, the real stars within ~16 light-years, the Milky Way with real objects marked, and the exoplanets found around other stars.

**Live site:** https://sivadheeraj5356.github.io/orbit-explorer/

## Features
- **Solar system** (Three.js): Sun + all 8 planets with real surface textures, orbits, axial tilts, Saturn's rings. Drag to look around, scroll to zoom, tap a planet to fly to it.
- **Stars nearby**: every catalogued star, brown dwarf and white dwarf within ~16 light-years (54 systems) at real measured positions, with spectral types and SIMBAD planet counts. Distance rings at 5/10/15 light-years.
- **Galaxy**: an artist's rendering of the Milky Way (bar, bulge, spiral arms) with real objects at real galactic positions - the Sun, Sagittarius A*, Betelgeuse, the Orion and Eagle Nebulae, the Crab, Omega Centauri, TRAPPIST-1 and more - plus the ~1,000-light-year "naked-eye horizon" around the Sun. The spiral pattern is labeled as illustrative; marker positions are real.
- **Exoplanets**: transit-method explainer with an animated demo, the full TRAPPIST-1 system, and 12 notable exoplanets with real data.
- Cross-links: jump from the galaxy's Sun marker or the neighborhood's Sun into the solar system, and from TRAPPIST-1 to its planets.
- Works on desktop and mobile. Deep links: `?focus=earth`, `?view=galaxy`, `?view=neighborhood`, `?view=exo`.

## Run it
It's a fully static site - serve the folder with any static host, e.g. `python3 -m http.server`, and open `index.html` via that server.

## Sources and credits
- Planet data: [NASA Planetary Fact Sheet (metric)](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) (last revised March 2025)
- Sun data: [NASA Sun Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html)
- Exoplanet data: [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/), Planetary Systems Composite Parameters table
- Nearby stars: [SIMBAD astronomical database](https://simbad.cds.unistra.fr/simbad/) (CDS, Strasbourg), parallax > 200 mas, retrieved 25 Oct 2026
- Galaxy marker coordinates: [CDS Sesame](http://cds.u-strasbg.fr/) resolver; distances are standard published estimates, rounded
- Milky Way size/shape and the Sun's orbit: [NASA Imagine the Universe](https://imagine.gsfc.nasa.gov/science/objects/milkyway1.html) and [NASA Science](https://science.nasa.gov/universe/exoplanets/our-milky-way-galaxy-how-big-is-space/); Sagittarius A*: [NASA](https://www.nasa.gov/universe/nasa-animation-sizes-up-the-universes-biggest-black-holes/)
- Planet/Sun textures: [Solar System Scope](https://www.solarsystemscope.com/textures/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Three.js](https://threejs.org/) (MIT), vendored in `vendor/`

Notes: in the solar system view, planet sizes and distances are enlarged for visibility (not to scale) and lighting is brightened beyond physical accuracy. In the galaxy view, the spiral pattern is an artist's rendering - no photograph of the whole Milky Way exists from outside it - while marker positions and distances are real.
