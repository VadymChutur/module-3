const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
// }

const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend.name === name) {
      return 'Find';
    }
  }

  return 'Not find';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

const getAllNames = function (allFriends) {
  const name = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    name.push(friend.name);
  }

  return name;
};

// console.log(getAllNames(friends));

const getOnLineFriends = function (allFriends) {
  const isOnlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      isOnlineFriends.push(friend);
    }
  }

  return isOnlineFriends;
};

console.log(getOnLineFriends(friends));

const getOffLineFriends = function (allFriends) {
  const isOffLineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      isOffLineFriends.push(friend);
    }
  }

  return isOffLineFriends;
};

console.log(getOffLineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));
