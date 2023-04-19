const playList = {
  name: 'My super playlist',
  raiting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName(newName) {
    this.name = newName;
  },

  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },

  updateRating(newRating) {
    this.raiting = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playList);

playList.changeName('My new super playlist');

console.log(playList);

playList.addTrack('track-4');

playList.updateRating(4);

console.log(playList);
