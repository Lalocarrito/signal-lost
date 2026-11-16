// Fichas de los robots (página Data).
// Cada ficha tiene frente (front) y reverso (back). Al picarla, se voltea.
// "frontAlt" y "backAlt" describen lo que dice la imagen, para lectores de pantalla.
export const robots = [
  {
    name: 'Pragyan',
    front: 'images/robots/pragyan-front.webp',
    back: 'images/robots/pragyan-back.webp',
    frontAlt:
      'Robot file 01, Pragyan. The Moon, near the base. Job: it drives on the Moon and studies the ground. Problem: the long, cold Moon night drained its battery. Fix, route: reconnect the battery cables.',
    backAlt:
      'Real fact: Pragyan landed near the Moon’s south pole in 2023. Before the two-week Moon night, it went to sleep. It never woke up. Reward: gives you an extra battery for your trip to Mars.',
  },
  {
    name: 'Curiosity',
    front: 'images/robots/curiosity-front.webp',
    back: 'images/robots/curiosity-back.webp',
    frontAlt:
      'Robot file 02, Curiosity. Mars, inside Gale Crater. Job: it studies rocks and weather to learn if Mars could ever support life. Problem: a solar storm scrambled its computer and left it in safe mode. Fix, terminal: transfer from computer A to B, position the arm and mast, and reactivate the antenna.',
    backAlt:
      'Real fact: on May 20, 2024, Curiosity’s RAD detector measured about 8,100 micrograys, like 30 chest X-rays. The real rover kept working. Reward: its radiation detector warns us about storms one sol earlier.',
  },
  {
    name: 'Phoenix',
    front: 'images/robots/phoenix-front.webp',
    back: 'images/robots/phoenix-back.webp',
    frontAlt:
      'Robot file 03, Phoenix. Mars, near the north pole. Job: it digs in the ground to look for ice. Problem: hard ice jammed its drill, and sticky dirt clogged its oven screen. Fix, terminal: clear the scraper into a box and shake or tap the grate to unclog it.',
    backAlt:
      'Real fact: in 2008, Phoenix proved there is ice under the ground on Mars. It was not built to survive the cold winter. Reward: finds ice again, more water every sol, and your greenhouse grows faster.',
  },
  {
    name: 'Opportunity',
    front: 'images/robots/opportunity-front.webp',
    back: 'images/robots/opportunity-back.webp',
    frontAlt:
      'Robot file 04, Opportunity. Mars, near the equator. Job: it searches rocks and soil for signs of past water. Problem: a dust storm covered its solar panels. Fix, route: clean the panels and reconnect the cables.',
    backAlt:
      'Real fact: Opportunity was built to work for 90 days. It worked for almost 15 years and drove more than 45 km! Reward: more energy every sol.',
  },
];
