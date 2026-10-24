// Planet data: NASA Planetary Fact Sheet (nssdc.gsfc.nasa.gov/planetary/factsheet), metric.
// Moon counts as listed on the fact sheet at time of access (Oct 2026).
export const PLANETS = [
  {
    id: 'mercury', name: 'Mercury',
    texture: 'textures/2k_mercury.jpg',
    radius: 0.38, orbit: 14, speed: 4.15, rotationSpeed: 0.004, tilt: 0.03,
    color: '#9c8e82',
    tagline: 'The smallest planet, and the closest to the Sun.',
    description: 'Mercury is a cratered world of extremes: daytime hot enough to melt lead, nights colder than Antarctica. It has almost no atmosphere, so its surface keeps the scars of billions of years of impacts.',
    facts: {
      'Diameter': '4,879 km',
      'Mass': '0.33 x 10<sup>24</sup> kg',
      'Gravity': '3.7 m/s<sup>2</sup>',
      'Day length': '4,222.6 hours',
      'Year length': '88 days',
      'Distance from Sun': '57.9 million km',
      'Mean temperature': '167 C',
      'Moons': '0'
    }
  },
  {
    id: 'venus', name: 'Venus',
    texture: 'textures/2k_venus_atmosphere.jpg',
    radius: 0.95, orbit: 19, speed: 1.62, rotationSpeed: -0.002, tilt: 177.4,
    color: '#d8b27a',
    tagline: 'The hottest planet, wrapped in thick acid clouds.',
    description: 'Venus spins backwards and so slowly that its day is longer than its year. A crushing carbon-dioxide atmosphere traps heat in a runaway greenhouse effect, making its surface hotter than Mercury despite being farther from the Sun.',
    facts: {
      'Diameter': '12,104 km',
      'Mass': '4.87 x 10<sup>24</sup> kg',
      'Gravity': '8.9 m/s<sup>2</sup>',
      'Day length': '2,802 hours',
      'Year length': '224.7 days',
      'Distance from Sun': '108.2 million km',
      'Mean temperature': '464 C',
      'Moons': '0'
    }
  },
  {
    id: 'earth', name: 'Earth',
    texture: 'textures/2k_earth_daymap.jpg',
    radius: 1.0, orbit: 25, speed: 1.0, rotationSpeed: 0.02, tilt: 23.4,
    color: '#4d7ea8',
    tagline: 'The only world known to harbor life.',
    description: 'Earth is the only planet with liquid-water oceans on its surface and an oxygen-rich atmosphere. Its magnetic field and atmosphere shield life from solar radiation, and its single large Moon steadies its tilt and drives the tides.',
    facts: {
      'Diameter': '12,756 km',
      'Mass': '5.97 x 10<sup>24</sup> kg',
      'Gravity': '9.8 m/s<sup>2</sup>',
      'Day length': '24 hours',
      'Year length': '365.2 days',
      'Distance from Sun': '149.6 million km',
      'Mean temperature': '15 C',
      'Moons': '1'
    }
  },
  {
    id: 'mars', name: 'Mars',
    texture: 'textures/2k_mars.jpg',
    radius: 0.53, orbit: 32, speed: 0.53, rotationSpeed: 0.019, tilt: 25.2,
    color: '#c1642f',
    tagline: 'The red planet, home to the tallest volcano in the solar system.',
    description: 'Mars is a cold desert world with the largest volcano (Olympus Mons) and one of the deepest canyons (Valles Marineris) known. Ancient river valleys show it once had liquid water, and today rovers explore whether it ever hosted life.',
    facts: {
      'Diameter': '6,792 km',
      'Mass': '0.64 x 10<sup>24</sup> kg',
      'Gravity': '3.7 m/s<sup>2</sup>',
      'Day length': '24.7 hours',
      'Year length': '687 days',
      'Distance from Sun': '228 million km',
      'Mean temperature': '-65 C',
      'Moons': '2'
    }
  },
  {
    id: 'jupiter', name: 'Jupiter',
    texture: 'textures/2k_jupiter.jpg',
    radius: 3.4, orbit: 46, speed: 0.084, rotationSpeed: 0.048, tilt: 3.1,
    color: '#c8a06e',
    tagline: 'The giant: more massive than every other planet combined.',
    description: 'Jupiter is a gas giant with no solid surface. Its Great Red Spot is a storm larger than Earth that has raged for centuries, and its dozens of moons include ocean world Europa and volcanic Io.',
    facts: {
      'Diameter': '142,984 km',
      'Mass': '1,898 x 10<sup>24</sup> kg',
      'Gravity': '23.1 m/s<sup>2</sup>',
      'Day length': '9.9 hours',
      'Year length': '4,331 days (11.9 years)',
      'Distance from Sun': '778.5 million km',
      'Mean temperature': '-110 C',
      'Moons': '95'
    }
  },
  {
    id: 'saturn', name: 'Saturn',
    texture: 'textures/2k_saturn.jpg',
    ring: 'textures/2k_saturn_ring_alpha.png',
    radius: 2.9, orbit: 60, speed: 0.034, rotationSpeed: 0.045, tilt: 26.7,
    color: '#d6bd8a',
    tagline: 'Famous for the most spectacular ring system known.',
    description: 'Saturn is a gas giant so light it would float in water. Its rings are made of countless ice and rock particles, some as small as dust, and stretch hundreds of thousands of kilometres while being only about ten metres thick in places.',
    facts: {
      'Diameter': '120,536 km',
      'Mass': '568 x 10<sup>24</sup> kg',
      'Gravity': '9.0 m/s<sup>2</sup>',
      'Day length': '10.7 hours',
      'Year length': '10,747 days (29.4 years)',
      'Distance from Sun': '1.43 billion km',
      'Mean temperature': '-140 C',
      'Moons': '274'
    }
  },
  {
    id: 'uranus', name: 'Uranus',
    texture: 'textures/2k_uranus.jpg',
    radius: 1.9, orbit: 72, speed: 0.012, rotationSpeed: 0.028, tilt: 97.8,
    color: '#8fc7c9',
    tagline: 'An ice giant that orbits the Sun on its side.',
    description: 'Uranus rotates tipped almost 98 degrees, so it rolls around the Sun like a ball. It is an ice giant made of water, ammonia and methane ices, and the coldest planetary atmosphere in the solar system.',
    facts: {
      'Diameter': '51,118 km',
      'Mass': '86.8 x 10<sup>24</sup> kg',
      'Gravity': '8.7 m/s<sup>2</sup>',
      'Day length': '17.2 hours',
      'Year length': '30,589 days (84 years)',
      'Distance from Sun': '2.87 billion km',
      'Mean temperature': '-195 C',
      'Moons': '28'
    }
  },
  {
    id: 'neptune', name: 'Neptune',
    texture: 'textures/2k_neptune.jpg',
    radius: 1.85, orbit: 84, speed: 0.006, rotationSpeed: 0.030, tilt: 28.3,
    color: '#4a6fb5',
    tagline: 'The windiest world, farthest from the Sun.',
    description: 'Neptune is a deep-blue ice giant with supersonic winds faster than 2,000 km/h, the strongest in the solar system. It was found by mathematics before telescopes: astronomers predicted its position from wobbles in the orbit of Uranus.',
    facts: {
      'Diameter': '49,528 km',
      'Mass': '102 x 10<sup>24</sup> kg',
      'Gravity': '11.0 m/s<sup>2</sup>',
      'Day length': '16.1 hours',
      'Year length': '59,800 days (164 years)',
      'Distance from Sun': '4.52 billion km',
      'Mean temperature': '-200 C',
      'Moons': '16'
    }
  }
];

export const SUN = {
  id: 'sun', name: 'Sun', texture: 'textures/2k_sun.jpg', radius: 6,
  tagline: 'Our star: 99.86% of all the mass in the solar system.',
  description: 'The Sun is a G-type main-sequence star, a 4.6-billion-year-old ball of hydrogen and helium fusing atoms at its core. Every second it converts about 600 million tonnes of hydrogen into helium, releasing the energy that lights and warms every planet.',
  facts: {
    'Diameter': '1,391,400 km',
    'Mass': '1.99 x 10<sup>30</sup> kg',
    'Gravity': '274 m/s<sup>2</sup>',
    'Rotation period': 'about 25 days (equator)',
    'Age': 'about 4.6 billion years',
    'Surface temperature': 'about 5,500 C',
    'Core temperature': 'about 15.7 million C',
    'Type': 'G-type main-sequence star'
  }
};

// Exoplanet data: NASA Exoplanet Archive (pscomppars), accessed Oct 2026.
// dist_ly = sy_dist (parsecs) x 3.26156.
export const EXOPLANETS = [
  {
    name: 'Proxima Centauri b', host: 'Proxima Centauri', year: 2016, method: 'Radial Velocity',
    radiusEarth: 1.02, massEarth: 1.06, orbitDays: 11.2, distanceLy: 4.2, tempK: 218,
    note: 'The closest known exoplanet to us, orbiting the nearest star to the Sun. It sits in its star\'s habitable zone, though its star flares often.',
    type: 'Rocky'
  },
  {
    name: '51 Pegasi b', host: '51 Pegasi', year: 1995, method: 'Radial Velocity',
    radiusEarth: 14.1, massEarth: 193.9, orbitDays: 4.2, distanceLy: 50.4, tempK: 1329,
    note: 'The first exoplanet ever found around a Sun-like star. Its discovery, a "hot Jupiter" hugging its star, rewrote theories of how planets form and won the 2019 Nobel Prize.',
    type: 'Gas giant'
  },
  {
    name: 'TRAPPIST-1 e', host: 'TRAPPIST-1', year: 2017, method: 'Transit',
    radiusEarth: 0.92, massEarth: 0.69, orbitDays: 6.1, distanceLy: 40.5, tempK: 250,
    note: 'One of seven Earth-sized planets around a single small star, a system discovered with help from the transit method. TRAPPIST-1 e is considered one of the most promising for a solid surface.',
    type: 'Rocky'
  },
  {
    name: 'Kepler-186 f', host: 'Kepler-186', year: 2014, method: 'Transit',
    radiusEarth: 1.17, massEarth: 1.71, orbitDays: 129.9, distanceLy: 579, tempK: 177,
    note: 'The first Earth-sized planet found in another star\'s habitable zone, the region where liquid water could exist on the surface.',
    type: 'Rocky'
  },
  {
    name: 'Kepler-452 b', host: 'Kepler-452', year: 2015, method: 'Transit',
    radiusEarth: 1.63, massEarth: 3.29, orbitDays: 384.8, distanceLy: 1799, tempK: 265,
    note: 'Often called "Earth\'s cousin": it orbits a Sun-like star at nearly the same distance Earth orbits the Sun, with a year of 385 days.',
    type: 'Super-Earth'
  },
  {
    name: 'K2-18 b', host: 'K2-18', year: 2015, method: 'Transit',
    radiusEarth: 2.37, massEarth: 8.92, orbitDays: 32.9, distanceLy: 124, tempK: 284,
    note: 'A sub-Neptune in its star\'s habitable zone with water vapour detected in its atmosphere, one of the most studied temperate exoplanets.',
    type: 'Sub-Neptune'
  },
  {
    name: 'TOI-700 d', host: 'TOI-700', year: 2020, method: 'Transit',
    radiusEarth: 1.15, massEarth: 1.58, orbitDays: 37.4, distanceLy: 101.5, tempK: 269,
    note: 'An Earth-sized planet in its star\'s habitable zone, found by NASA\'s TESS mission, the first such discovery from that telescope.',
    type: 'Rocky'
  },
  {
    name: '55 Cancri e', host: '55 Cancri', year: 2004, method: 'Radial Velocity',
    radiusEarth: 1.88, massEarth: 7.99, orbitDays: 0.74, distanceLy: 41, tempK: 1958,
    note: 'A "super-Earth" so close to its star that its year lasts under 18 hours. Its surface is likely molten lava.',
    type: 'Super-Earth'
  },
  {
    name: 'WASP-12 b', host: 'WASP-12', year: 2008, method: 'Transit',
    radiusEarth: 22.0, massEarth: 467.2, orbitDays: 1.09, distanceLy: 1393, tempK: 2601,
    note: 'A hot Jupiter being slowly torn apart by its star\'s gravity. It is one of the darkest and hottest exoplanets known.',
    type: 'Gas giant'
  },
  {
    name: 'HD 209458 b', host: 'HD 209458', year: 1999, method: 'Radial Velocity',
    radiusEarth: 15.6, massEarth: 232.0, orbitDays: 3.5, distanceLy: 157.5, tempK: 1459,
    note: 'Nicknamed "Osiris", the first planet ever seen transiting its star and the first with an atmosphere detected, proving the transit method works.',
    type: 'Gas giant'
  },
  {
    name: 'LHS 1140 b', host: 'LHS 1140', year: 2017, method: 'Transit',
    radiusEarth: 1.73, massEarth: 5.6, orbitDays: 24.7, distanceLy: 48.9, tempK: 226,
    note: 'A dense rocky super-Earth in its star\'s habitable zone, and a leading target in the search for exoplanet atmospheres.',
    type: 'Super-Earth'
  },
  {
    name: 'Kepler-22 b', host: 'Kepler-22', year: 2011, method: 'Transit',
    radiusEarth: 2.1, massEarth: 9.1, orbitDays: 289.9, distanceLy: 635, tempK: 279,
    note: 'The first planet the Kepler telescope confirmed in a habitable zone, orbiting a star much like our Sun.',
    type: 'Super-Earth'
  }
];

export const TRAPPIST_SYSTEM = {
  star: 'TRAPPIST-1',
  starType: 'Ultra-cool red dwarf',
  distanceLy: 40.5,
  planets: [
    { name: 'b', radiusEarth: 1.116, massEarth: 1.374, orbitDays: 1.51, tempK: 398 },
    { name: 'c', radiusEarth: 1.097, massEarth: 1.308, orbitDays: 2.42, tempK: 340 },
    { name: 'd', radiusEarth: 0.788, massEarth: 0.388, orbitDays: 4.05, tempK: 286 },
    { name: 'e', radiusEarth: 0.920, massEarth: 0.692, orbitDays: 6.10, tempK: 250 },
    { name: 'f', radiusEarth: 1.045, massEarth: 1.039, orbitDays: 9.21, tempK: 218 },
    { name: 'g', radiusEarth: 1.129, massEarth: 1.321, orbitDays: 12.35, tempK: 197 },
    { name: 'h', radiusEarth: 0.755, massEarth: 0.326, orbitDays: 18.77, tempK: 172 }
  ]
};
