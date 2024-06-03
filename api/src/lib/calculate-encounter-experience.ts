const encounterMultipliers: Record<number, number> = {
  1: 1,
  2: 1.5,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  7: 2.5,
  8: 2.5,
  9: 2.5,
  10: 2.5,
  11: 3,
  12: 3,
  13: 3,
  14: 3,
  15: 4
}

export const calculateEncounterExperience = (creatures): number => {
  const creatureCount = creatures.length;
  const experienceSum = creatures.reduce((acc, { experience }) => { return acc += experience; }, 0);
  return experienceSum * encounterMultipliers[creatureCount]
}