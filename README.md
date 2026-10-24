# Orbit - Explore every planet up close

An interactive 3D tour of the solar system, plus a curated look at exoplanets around other stars.

**Live site:** https://sivadheeraj5356.github.io/orbit-explorer/

## Features
- 3D solar system (Three.js): Sun + all 8 planets with real surface textures, orbits, axial tilts, Saturn's rings. Drag to look around, scroll to zoom, tap a planet to fly to it.
- Detail panel per body: diameter, mass, gravity, day/year length, distance, temperature, moons.
- Exoplanets tab: transit-method explainer with an animated demo, the full TRAPPIST-1 system, and 12 notable exoplanets with real data.
- Works on desktop and mobile. Deep links: `?focus=earth`, `?view=exo`.

## Run it
It's a fully static site - serve the folder with any static host, e.g. `python3 -m http.server`, and open `index.html` via that server.

## Sources and credits
- Planet data: [NASA Planetary Fact Sheet (metric)](https://nssdc.gsfc.nasa.gov/planetary/factsheet/) (last revised March 2025)
- Sun data: [NASA Sun Fact Sheet](https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html)
- Exoplanet data: [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/), Planetary Systems Composite Parameters table
- Planet/Sun textures: [Solar System Scope](https://www.solarsystemscope.com/textures/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Three.js](https://threejs.org/) (MIT), vendored in `vendor/`

Note: planet sizes and distances are enlarged for visibility (not to scale), and lighting is brightened beyond physical accuracy so every world stays visible.
