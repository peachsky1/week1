function rectangle(a: number, b: number):{[key:string]:number}  {
        let length = a;
        let width = b;
        const perimeter = 2*(length+width); 
        const area = length*width;
        const info = { length, width, perimeter, area };
   return info;
}
        const rec = rectangle(2,5);
        
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