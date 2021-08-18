/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
const pi = 3.14159;

function getArea(radius) {
  return (radius**2) * pi;
}
function getDiameter(radius) {
  return radius * 2;
}
function getCircumfrence(radius) {
  return pi * getDiameter(radius);

}


console.log(getArea(3));
console.log(getDiameter(3));
console.log(getCircumfrence(3));

