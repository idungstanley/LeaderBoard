const setStorage = (scoreList) => {
  localStorage.setItem('scores', JSON.stringify(scoreList));
};
const getStorage = () => {
  let store;
  if (!localStorage.getItem('scores')) {
    store = [];
  } else {
    store = JSON.parse(localStorage.getItem('scores'));
  }
  return store;
};

module.exports = {
  getStorage,
  setStorage,
};
