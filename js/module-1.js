const playList = {
  name: 'My super playlist',
  raiting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

// console.log(playList.raiting);

const userName = 'Mango';
const email = 'mango@mail.com';

const signUpData = {
  userName,
  email,
};

// console.log(signUpData);

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);
// console.log(b);

// a.c = 100;

// console.log(b);
// console.log(a);

const a = [1, 2, 3];
a.hello = 10;

console.log(a);
