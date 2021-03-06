
window.W = {};

W.countWords = function(collection) {
  if(Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
};

W.makeDictionary = function(array) {
  var dict = {};
  for(var i = 0; i < array.length; i++) {
    if(array[i] in dict) {
      dict[array[i]] += 1;
    } else {
      dict[array[i]] = 1;
    }
  }
  return dict;
};

W.lexicalDiversity = function(collection) {
  // return the number of words divided by the number of unique words
}

W.countUniq = function(collection) {
  if(Array.isArray(collection)) {
    //count unique words
  } else {
    return Object.keys(collection).length;
  }
}