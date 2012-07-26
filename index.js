
exports.capitalize = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.uncapitalize = function(str){
  return str.charAt(0).toLowerCase() + str.slice(1);
};