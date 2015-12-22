
window.W = {};

W.countWords = function(collection) {
  if(Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
};