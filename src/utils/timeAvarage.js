const timeAvarage = (timeArray) => {
  return timeArray.reduce((a, b) => a + b, 0) / timeArray.length;
};

exports.timeAvarage = timeAvarage;
