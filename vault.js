'use strict';
module.exports = function() {
  var newObject = {};

  function getValue(key){
    if (newObject[key] === undefined){
      return null;
    }
    else{
      return newObject[key];
    }
  }

  function setValue(key,value){

    newObject[key]=value;
  }

  var foo = {
    getValue,
    setValue
  };

  return foo;
};