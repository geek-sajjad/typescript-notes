const carMakers = ['toyota', 'ford', 'benz'];
const dates = [new Date(), new Date()];

const carsByMakes: string[][] = [['landcruse'], ['f150'], ['s500']];

// help with infernce when extracting values

const carMaker = carMakers[0];

const cars = carsByMakes.pop();

// flexible dates
const importantDates: (Date | string)[] = [new Date(), '2021-02-15'];
