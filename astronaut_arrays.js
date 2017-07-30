/*
Question
https://classroom.udacity.com/courses/ud804/lessons/3412099388/concepts/34083087710923
*/

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
  var renamedMoonWalkers = [];
  moonWalkers.forEach(function(walker) {
    renamedMoonWalkers.push(rename(walker));
  });
  return renamedMoonWalkers.sort();
}

function rename(name) {
  var words = name.split(' ');
  var lastName = words[words.length - 1];
  return lastName + ', ' + name.replace(' ' + lastName, '');
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));