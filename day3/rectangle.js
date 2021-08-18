function Rectangle(a, b) {
    var length = a;
    var width = b;
    var perimeter = 2 * (a + b);
    var area = a + b;
    return {
        length: length, width: width, perimeter: perimeter, area: area
    };
}
var rec = Rectangle(2, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
