const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   totalFeedback += feedback[key];
// }

// console.log(totalFeedback);

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  totalFeedback += value;
}

console.log(totalFeedback);
