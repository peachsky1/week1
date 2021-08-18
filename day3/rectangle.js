function rectangle(a, b) {
    var length = a;
    var width = b;
    var perimeter = 2 * (length + width);
    var area = length * width;
    var info = { length: length, width: width, perimeter: perimeter, area: area };
    return info;
}
var rec = rectangle(2, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
// function rectangle(a: number, b: number) {
//     // First lets figure out the area
//     const area = a * b;
//     // Next lets figure out perimeter
//     const perimeter = a * 2 + b * 2;
//     const info = { a, b, perimeter, area };
//     return info;
//   }
//   const rectangleInfo = rectangle(2, 4);
//   console.log("length is 2", rectangleInfo.a);
//   console.log("width is 4", rectangleInfo.b);
//   console.log("perimeter 12", rectangleInfo.perimeter);
//   console.log("area is 8", rectangleInfo.area);
