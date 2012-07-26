
exports.capitalize = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.uncapitalize = function(str){
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.capitalizeWords = function(str){
  return str.replace(/\w+/g, function(word){
    return exports.capitalize(word);
  });
};

exports.uncapitalizeWords = function(str){
  return str.replace(/\w+/g, function(word){
    return exports.uncapitalize(word);
  });
};

exports.trim = function(str){
  return exports.trimRight(exports.trimLeft(str));
};

exports.trimLeft = function(str){
  return str.replace(/^\s*/, '');
};

exports.trimRight = function(str){
  return str.replace(/\s*$/, '');
};