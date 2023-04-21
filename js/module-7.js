const playList = {
  name: 'My super playlist',
  raiting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

// const {
//   name,
//   raiting,
//   tracks,
//   trackCount: trackOfCount,
//   author = 'Star Lord',
// } = playList;

// console.log(name, raiting, tracks, trackOfCount, author);

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'jpeg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);

// console.log(restProps);

const showProfileInfo = function (userProfile) {
  console.log(userProfile);
};

showProfileInfo(profile);

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, likes, views);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// for (const [name, raiting] of entries) {
//   console.log(name, raiting);
// }
