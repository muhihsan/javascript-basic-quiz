/*
Question
https://classroom.udacity.com/courses/ud804/lessons/3412099388/concepts/34118489830923
*/

function getRelationship(x, y) {
  var nonNumeric = [];
  evaluate(x, nonNumeric);
  evaluate(y, nonNumeric);

  if (nonNumeric.length === 0) {
    return x < y ? '<' : (x > y ? '>' : '=');
  }

  var isPlural = nonNumeric.length > 1;
  return 'Can\'t compare relationships because ' + nonNumeric[0] + (isPlural ? (' and ' + nonNumeric[1] + ' are ') : ' is ' ) + 'not ' + (isPlural ? '' : 'a ') + 'number' + (isPlural ? 's' : '');
}

function evaluate(value, nonNumeric) {
  if (!isNumeric(value)) {
    if (isUndefined(value)) {
      nonNumeric.push(getUndefinedInString());
    }
    else if(isNull(value)) {
      nonNumeric.push(getNullInString());
    }
    else {
      nonNumeric.push(value.toString());
    }
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isUndefined(n) {
  return n === undefined;
}

function isNull(n) {
  return n === null;
}

function getUndefinedInString() {
  return 'undefined';
}

function getNullInString() {
  return 'null';
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));