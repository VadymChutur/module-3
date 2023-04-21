const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const numbers = [6, 7, 8, ...[1, 2, 3], 4, 5];

// console.log(numbers);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
const c = { ...a, ...b };

// console.log(c);
