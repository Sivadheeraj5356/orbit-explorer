// Nearest-star positions, spectral types and planet counts: SIMBAD astronomical
// database (CDS, Strasbourg), TAP query 'plx_value > 200 mas', retrieved 25 Oct 2026.
// Galaxy POI coordinates: CDS Sesame resolver (J2000). Distances are standard
// published estimates (rounded). Do not treat planet candidates as confirmed.

export const NEIGHBORHOOD = [
 {
  "name": "Proxima Centauri",
  "ra": 217.42894,
  "dec": -62.67949,
  "ly": 4.25,
  "sp": "M5.5Ve",
  "kind": "Red dwarf",
  "pc": 1,
  "pq": 2,
  "note": "The closest star to the Sun, a small red dwarf that sometimes flares. It has at least one confirmed rocky planet, Proxima b, orbiting in the zone where temperatures could allow liquid water."
 },
 {
  "name": "Alpha Centauri A + B",
  "ra": 219.90208,
  "dec": -60.83397,
  "ly": 4.34,
  "sp": "G2V+K1V",
  "kind": "Sun-like binary",
  "pc": 0,
  "pq": 0,
  "note": "The nearest star system: two Sun-like stars (one a little bigger than the Sun, one a little smaller) orbiting each other every 80 years. Faint Proxima Centauri orbits this pair far out."
 },
 {
  "name": "Barnard's Star",
  "ra": 269.45208,
  "dec": 4.69336,
  "ly": 5.96,
  "sp": "M4V",
  "kind": "Red dwarf",
  "pc": 4,
  "pq": 0,
  "note": "An old red dwarf with the fastest apparent motion across the sky of any star. Several small planet signals are listed in SIMBAD, some still unconfirmed."
 },
 {
  "name": "Luhman 16",
  "ra": 162.32881,
  "dec": -53.31947,
  "ly": 6.5,
  "sp": "L7.5+T0.5",
  "kind": "Brown dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": "The closest brown dwarfs: two \"failed stars\" too small to fuse hydrogen steadily, discovered only in 2013."
 },
 {
  "name": "WISE 0855-0714",
  "ra": 133.81891,
  "dec": -7.24705,
  "ly": 7.43,
  "sp": "Y2",
  "kind": "Sub-brown dwarf",
  "pc": 0,
  "pq": 0,
  "note": "One of the coldest objects known beyond the solar system, with temperatures around -23 to -13 C. It may be a rogue planet drifting alone."
 },
 {
  "name": "Wolf 359",
  "ra": 164.1205,
  "dec": 7.01472,
  "ly": 7.86,
  "sp": "dM6",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 2,
  "note": "A tiny, dim red dwarf and an active flare star. Despite being one of our nearest neighbors it is far too faint to see with the naked eye."
 },
 {
  "name": "Lalande 21185",
  "ra": 165.83415,
  "dec": 35.96988,
  "ly": 8.3,
  "sp": "M2+V",
  "kind": "Red dwarf",
  "pc": 2,
  "pq": 1,
  "note": "The brightest red dwarf in the northern sky, still only visible in binoculars. SIMBAD lists confirmed planets plus candidates here."
 },
 {
  "name": "Sirius A + B",
  "ra": 101.28716,
  "dec": -16.71612,
  "ly": 8.6,
  "sp": "A0mA1Va",
  "kind": "Bright star + white dwarf",
  "pc": 0,
  "pq": 0,
  "note": "The brightest star in Earth's night sky, twice the Sun's mass. Its companion Sirius B is a white dwarf: the dense leftover core of a star that died long ago."
 },
 {
  "name": "Luyten 726-8 (UV Ceti)",
  "ra": 24.75605,
  "dec": -17.95057,
  "ly": 8.7,
  "sp": "M5.5V+M6V",
  "kind": "Red dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": "A pair of faint red dwarfs; one of them, UV Ceti, is the classic flare star, brightening dramatically within minutes."
 },
 {
  "name": "Ross 154",
  "ra": 282.45568,
  "dec": -23.83624,
  "ly": 9.71,
  "sp": "M3.5Ve",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "Ross 248",
  "ra": 355.47932,
  "dec": 44.17745,
  "ly": 10.31,
  "sp": "M5.0V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "In about 36,000 years this drifting red dwarf will briefly become the Sun's nearest stellar neighbor, passing within ~3 light-years."
 },
 {
  "name": "Epsilon Eridani",
  "ra": 53.23269,
  "dec": -9.45826,
  "ly": 10.5,
  "sp": "K2V",
  "kind": "Young orange dwarf",
  "pc": 2,
  "pq": 0,
  "note": "A young, active star slightly smaller than the Sun, wrapped in belts of dust and ice left over from planet formation. Planet status here is debated."
 },
 {
  "name": "Lacaille 9352",
  "ra": 346.46682,
  "dec": -35.85307,
  "ly": 10.72,
  "sp": "M2V",
  "kind": "Red dwarf",
  "pc": 4,
  "pq": 1,
  "note": null
 },
 {
  "name": "Ross 128",
  "ra": 176.93499,
  "dec": 0.80456,
  "ly": 11.01,
  "sp": "dM4",
  "kind": "Red dwarf",
  "pc": 1,
  "pq": 0,
  "note": "A quiet red dwarf with a confirmed roughly Earth-mass planet (Ross 128 b) that may lie in the temperate zone."
 },
 {
  "name": "EZ Aquarii",
  "ra": 339.6399,
  "dec": -15.29993,
  "ly": 11.11,
  "sp": "M5V",
  "kind": "Red dwarf triple",
  "pc": 0,
  "pq": 0,
  "note": "Three red dwarfs orbiting each other."
 },
 {
  "name": "61 Cygni A + B",
  "ra": 316.72475,
  "dec": 38.74942,
  "ly": 11.4,
  "sp": "K5V",
  "kind": "Orange dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": "Two orange dwarfs, each a bit cooler than the Sun. In 1838 this became the first star beyond the Sun to have its distance measured."
 },
 {
  "name": "Procyon A + B",
  "ra": 114.8255,
  "dec": 5.22499,
  "ly": 11.46,
  "sp": "F5IV-V+DQZ",
  "kind": "Bright star + white dwarf",
  "pc": 0,
  "pq": 0,
  "note": "The eighth-brightest star in the night sky, orbited by a faint white dwarf. Its name means \"before the dog\" - it rises just before Sirius."
 },
 {
  "name": "Struve 2398 A + B",
  "ra": 280.6946,
  "dec": 59.63039,
  "ly": 11.49,
  "sp": "M3V",
  "kind": "Red dwarf binary",
  "pc": 1,
  "pq": 0,
  "note": null
 },
 {
  "name": "Groombridge 34 A + B",
  "ra": 4.59535,
  "dec": 44.02295,
  "ly": 11.62,
  "sp": "M2V",
  "kind": "Red dwarf binary",
  "pc": 2,
  "pq": 0,
  "note": null
 },
 {
  "name": "DX Cancri",
  "ra": 127.45564,
  "dec": 26.77601,
  "ly": 11.68,
  "sp": "M6.5Ve",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "One of the faintest, coolest hydrogen-burning stars known."
 },
 {
  "name": "Epsilon Indi A + B",
  "ra": 330.84022,
  "dec": -56.78598,
  "ly": 11.87,
  "sp": "K5V",
  "kind": "Orange dwarf + brown dwarfs",
  "pc": 1,
  "pq": 0,
  "note": "A slightly cool, Sun-like star with a confirmed giant planet and two brown dwarf companions orbiting far out."
 },
 {
  "name": "Tau Ceti",
  "ra": 26.01701,
  "dec": -15.93748,
  "ly": 11.91,
  "sp": "G8V",
  "kind": "Sun-like star",
  "pc": 4,
  "pq": 3,
  "note": "One of the most Sun-like stars nearby and a longtime target in the search for life. SIMBAD lists several confirmed planets and candidates."
 },
 {
  "name": "Gliese 1061",
  "ra": 53.99875,
  "dec": -44.5127,
  "ly": 11.98,
  "sp": "M5.5V",
  "kind": "Red dwarf",
  "pc": 3,
  "pq": 0,
  "note": "A red dwarf with three confirmed small planets; one spends time in the star's temperate zone."
 },
 {
  "name": "YZ Ceti",
  "ra": 18.12765,
  "dec": -16.99899,
  "ly": 12.12,
  "sp": "M4.0Ve",
  "kind": "Red dwarf",
  "pc": 3,
  "pq": 0,
  "note": "A flare star with three confirmed roughly Earth-size planets packed close in."
 },
 {
  "name": "Luyten's Star",
  "ra": 111.85208,
  "dec": 5.22579,
  "ly": 12.35,
  "sp": "M3.5V",
  "kind": "Red dwarf",
  "pc": 2,
  "pq": 2,
  "note": "A quiet red dwarf with two confirmed planets; Luyten's Star b orbits in the star's temperate zone."
 },
 {
  "name": "Teegarden's Star",
  "ra": 43.25372,
  "dec": 16.88129,
  "ly": 12.5,
  "sp": "dM6",
  "kind": "Red dwarf",
  "pc": 3,
  "pq": 0,
  "note": "A very faint, cool star found only in 2003. Its two confirmed planets are close to Earth's mass; Teegarden's Star b is one of the most Earth-like temperate-zone candidates known."
 },
 {
  "name": "Kapteyn's Star",
  "ra": 77.91912,
  "dec": -45.01843,
  "ly": 12.83,
  "sp": "M1VIp",
  "kind": "Subdwarf",
  "pc": 1,
  "pq": 1,
  "note": "A rare nearby \"halo\" star: an ancient visitor from the galaxy's oldest population, racing through the solar neighborhood."
 },
 {
  "name": "Lacaille 8760",
  "ra": 319.31362,
  "dec": -38.86736,
  "ly": 12.95,
  "sp": "M1V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "One of the brightest red dwarfs in the sky."
 },
 {
  "name": "Kruger 60 A + B",
  "ra": 336.9978,
  "dec": 57.6959,
  "ly": 13.05,
  "sp": "M3",
  "kind": "Red dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "SCR 1845-6357 A + B",
  "ra": 281.27189,
  "dec": -63.96318,
  "ly": 13.06,
  "sp": "M8.5V",
  "kind": "Red dwarf + brown dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "DENIS 1048-39",
  "ra": 162.06072,
  "dec": -39.93523,
  "ly": 13.19,
  "sp": "M8.5Ve:",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "Ross 614",
  "ra": 97.34746,
  "dec": -2.81356,
  "ly": 13.42,
  "sp": "M4.5V",
  "kind": "Red dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "WISE J0722-0540",
  "ra": 110.61628,
  "dec": -5.67599,
  "ly": 13.43,
  "sp": "T9",
  "kind": "Brown dwarf",
  "pc": 0,
  "pq": 0,
  "note": "A T-type brown dwarf with a cloudy atmosphere only a few hundred degrees warm."
 },
 {
  "name": "Wolf 1061",
  "ra": 247.57524,
  "dec": -12.66259,
  "ly": 14.05,
  "sp": "M3V",
  "kind": "Red dwarf",
  "pc": 3,
  "pq": 0,
  "note": "A red dwarf with three confirmed planets; Wolf 1061 c sits in the star's temperate zone."
 },
 {
  "name": "Van Maanen's Star",
  "ra": 12.29124,
  "dec": 5.38861,
  "ly": 14.07,
  "sp": "DZ7.5",
  "kind": "White dwarf",
  "pc": 0,
  "pq": 0,
  "note": "The nearest lone white dwarf: the exposed core of a dead star, slowly fading. It is about the size of Earth with the mass of the Sun."
 },
 {
  "name": "Wolf 424 A + B",
  "ra": 188.32257,
  "dec": 9.02112,
  "ly": 14.11,
  "sp": "?",
  "kind": "Red dwarf binary",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "Gliese 1",
  "ra": 1.35179,
  "dec": -37.35736,
  "ly": 14.17,
  "sp": "M2V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "Gliese 674",
  "ra": 30.05398,
  "dec": 13.05194,
  "ly": 14.58,
  "sp": "M4.5V",
  "kind": "Red dwarf",
  "pc": 1,
  "pq": 1,
  "note": null
 },
 {
  "name": "Gliese 687",
  "ra": 264.10791,
  "dec": 68.33914,
  "ly": 14.84,
  "sp": "M3.0V",
  "kind": "Red dwarf",
  "pc": 1,
  "pq": 1,
  "note": null
 },
 {
  "name": "CD-46 11540",
  "ra": 262.16644,
  "dec": -46.89519,
  "ly": 14.85,
  "sp": "M3V",
  "kind": "Red dwarf",
  "pc": 1,
  "pq": 0,
  "note": null
 },
 {
  "name": "LP 731-58",
  "ra": 162.05256,
  "dec": -11.336,
  "ly": 14.87,
  "sp": "M6.5V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "LAWD 37",
  "ra": 176.42882,
  "dec": -64.84152,
  "ly": 15.12,
  "sp": "DQ",
  "kind": "White dwarf",
  "pc": 0,
  "pq": 0,
  "note": "A nearby white dwarf: the cooling core of a dead Sun-like star."
 },
 {
  "name": "Gliese 412 B",
  "ra": 298.47975,
  "dec": 44.41504,
  "ly": 15.2,
  "sp": "M6V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "Companion to Gliese 412 A; the pair includes the flare star WX Ursae Majoris."
 },
 {
  "name": "Gliese 831",
  "ra": 343.31972,
  "dec": -14.2637,
  "ly": 15.24,
  "sp": "M3.5V",
  "kind": "Red dwarf binary",
  "pc": 4,
  "pq": 0,
  "note": null
 },
 {
  "name": "Gliese 412 A (WX UMa)",
  "ra": 298.47701,
  "dec": 44.41426,
  "ly": 15.3,
  "sp": "M5.5Ve",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "A flare star paired with Gliese 412 B."
 },
 {
  "name": "L 143-23",
  "ra": 161.08847,
  "dec": -61.2098,
  "ly": 15.76,
  "sp": "M5.5V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "G 158-27",
  "ra": 1.67999,
  "dec": -7.53806,
  "ly": 15.81,
  "sp": "M5.5V",
  "kind": "Red dwarf",
  "pc": 2,
  "pq": 2,
  "note": null
 },
 {
  "name": "DENIS J0255-47",
  "ra": 43.76539,
  "dec": -47.01427,
  "ly": 15.88,
  "sp": "L9",
  "kind": "Brown dwarf",
  "pc": 0,
  "pq": 0,
  "note": "An L-type brown dwarf: heavier than a planet, lighter than a star."
 },
 {
  "name": "Groombridge 1830",
  "ra": 152.84225,
  "dec": 49.45424,
  "ly": 15.89,
  "sp": "K6VeFe-1",
  "kind": "Subdwarf",
  "pc": 0,
  "pq": 0,
  "note": "Another ancient halo star, noted since the 1800s for its enormous speed across the sky."
 },
 {
  "name": "Groombridge 1618 A + B",
  "ra": 166.36907,
  "dec": 43.52677,
  "ly": 16.0,
  "sp": "M1.0V",
  "kind": "Orange dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 },
 {
  "name": "WISE J1639-6847",
  "ra": 249.92016,
  "dec": -68.79407,
  "ly": 16.12,
  "sp": "Y0pec",
  "kind": "Brown dwarf",
  "pc": 0,
  "pq": 0,
  "note": "A very cold Y-type brown dwarf."
 },
 {
  "name": "AD Leonis",
  "ra": 154.90117,
  "dec": 19.87,
  "ly": 16.19,
  "sp": "dM3",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": "One of the most active flare stars known."
 },
 {
  "name": "Gliese 832",
  "ra": 323.39156,
  "dec": -49.009,
  "ly": 16.2,
  "sp": "M1.5V",
  "kind": "Red dwarf",
  "pc": 2,
  "pq": 0,
  "note": "Hosts a confirmed Jupiter-like planet on a long orbit and a super-Earth close in."
 },
 {
  "name": "G 158-50",
  "ra": 3.86713,
  "dec": -16.13379,
  "ly": 16.26,
  "sp": "M4V",
  "kind": "Red dwarf",
  "pc": 0,
  "pq": 0,
  "note": null
 }
];

export const GALAXY_POIS = [
 {
  "id": "sgra",
  "name": "Sagittarius A*",
  "kind": "Supermassive black hole",
  "ly": 26000,
  "desc": "The black hole at the Milky Way's center, about 4.3 million times the Sun's mass. Stars racing around it let astronomers weigh it; the Event Horizon Telescope has imaged its shadow.",
  "facts": {
   "Type": "Supermassive black hole",
   "Mass": "~4.3 million Suns",
   "Distance": "~26,000 ly",
   "Imaged by": "Event Horizon Telescope"
  },
  "l": 359.944,
  "b": -0.046
 },
 {
  "id": "sun",
  "name": "The Sun (you are here)",
  "kind": "G-type star",
  "ly": 26000,
  "desc": "Our home star sits in the Orion Spur, a small arm between the galaxy's big Sagittarius and Perseus arms. The Sun orbits the galactic center once every ~220-250 million years, at about 250 km/s.",
  "facts": {
   "Distance from center": "~26,000 ly (NASA pages give 25,000-28,000)",
   "Orbit speed": "~250 km/s",
   "One galactic year": "~220-250 million years",
   "Height above plane": "~20 ly",
   "Arm": "Orion Spur"
  }
 },
 {
  "id": "trappist",
  "name": "TRAPPIST-1",
  "kind": "Ultra-cool dwarf + 7 planets",
  "ly": 40.5,
  "desc": "The seven-Earth-size-planet system from the Exoplanets tab lives here, practically next door on galactic scales.",
  "facts": {
   "Distance": "40.5 ly",
   "Planets": "7 (rocky)",
   "Galactic neighborhood": "Orion Spur"
  },
  "l": 69.713,
  "b": -56.645
 },
 {
  "id": "pleiades",
  "name": "Pleiades (M45)",
  "kind": "Open star cluster",
  "ly": 445,
  "desc": "The \"Seven Sisters\": a young cluster of hot blue stars born together about 100 million years ago, still wrapped in wisps of reflecting dust.",
  "facts": {
   "Distance": "~445 ly (Gaia parallaxes via SIMBAD)",
   "Age": "~100 million years",
   "Stars": "several hundred"
  },
  "l": 166.463,
  "b": -23.615
 },
 {
  "id": "betelgeuse",
  "name": "Betelgeuse",
  "kind": "Red supergiant",
  "ly": 498,
  "desc": "A red supergiant roughly 700 times the Sun's radius. Within the next 100,000 years it will end in a supernova bright enough to see in daytime.",
  "facts": {
   "Distance": "~500 ly (SIMBAD parallax; estimates vary)",
   "Radius": "~700 x Sun",
   "Fate": "Supernova within ~100,000 years"
  },
  "l": 199.787,
  "b": -8.959
 },
 {
  "id": "orionneb",
  "name": "Orion Nebula (M42)",
  "kind": "Star-forming nebula",
  "ly": 1500,
  "desc": "The nearest massive star factory: a glowing cloud where new stars are being born right now, visible as the fuzzy middle \"star\" of Orion's sword.",
  "facts": {
   "Distance": "~1,500 ly (NASA)",
   "Diameter": "~24 ly",
   "Activity": "Active star formation"
  },
  "l": 209.009,
  "b": -19.382
 },
 {
  "id": "ringneb",
  "name": "Ring Nebula (M57)",
  "kind": "Planetary nebula",
  "ly": 2000,
  "desc": "The shed outer layers of a dying Sun-like star. Our own Sun will likely look like this in about 5 billion years.",
  "facts": {
   "Distance": "~2,000 ly (NASA)",
   "Age of shell": "a few thousand years",
   "Central star": "White dwarf"
  },
  "l": 63.17,
  "b": 13.978
 },
 {
  "id": "vycma",
  "name": "VY Canis Majoris",
  "kind": "Hypergiant",
  "ly": 3700,
  "desc": "One of the largest stars known: a hypergiant roughly 1,400 times the Sun's radius, shedding huge clouds of dust as it nears its end.",
  "facts": {
   "Distance": "~3,700 ly (VERA radio maser parallax)",
   "Radius": "~1,400 x Sun",
   "Type": "Red hypergiant"
  },
  "l": 239.353,
  "b": -5.065
 },
 {
  "id": "crab",
  "name": "Crab Nebula (M1)",
  "kind": "Supernova remnant",
  "ly": 6500,
  "desc": "The expanding wreck of a supernova recorded by astronomers in 1054 CE, powered from within by a spinning neutron star.",
  "facts": {
   "Distance": "~6,500 ly (NASA)",
   "Exploded": "1054 CE (observed)",
   "Core": "Crab pulsar"
  },
  "l": 184.555,
  "b": -5.783
 },
 {
  "id": "eagle",
  "name": "Eagle Nebula (M16)",
  "kind": "Star-forming nebula",
  "ly": 7000,
  "desc": "Home of the Pillars of Creation: towering columns of gas and dust several light-years tall, eroding as new stars ignite inside.",
  "facts": {
   "Distance": "~7,000 ly (NASA)",
   "Famous for": "Pillars of Creation",
   "Activity": "Active star formation"
  },
  "l": 16.961,
  "b": 0.811
 },
 {
  "id": "casa",
  "name": "Cassiopeia A",
  "kind": "Supernova remnant",
  "ly": 11000,
  "desc": "The youngest known supernova remnant in the Milky Way: a star that exploded roughly 340 years ago, though no record of anyone on Earth seeing it survives.",
  "facts": {
   "Distance": "~11,000 ly",
   "Exploded": "~340 years ago",
   "Left behind": "Neutron star"
  },
  "l": 111.738,
  "b": -2.135
 },
 {
  "id": "omegacen",
  "name": "Omega Centauri",
  "kind": "Globular cluster",
  "ly": 17090,
  "desc": "The Milky Way's largest globular cluster: a dense ball of roughly 10 million ancient stars. It may be the stripped core of a galaxy our own consumed long ago.",
  "facts": {
   "Distance": "~17,000 ly (NASA)",
   "Stars": "~10 million",
   "Age": "~12 billion years"
  },
  "l": 309.102,
  "b": 14.968
 }
];

export const GALAXY_FACTS = {
  diameterLy: 100000,
  sunFromCenterLy: 26000,
  nakedEyeRadiusLy: 1000
};
