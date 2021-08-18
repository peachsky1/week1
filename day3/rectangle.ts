function Rectangle(a: number, b: number): {length:number, width:number, perimeter:number, area:number} {
        let length = a;
        let width = b;
        let perimeter = 2*(a+b); 
        let area = a+b;
    return{
        length: length, width: width,perimeter: perimeter,area:area
    }
}

        const rec = Rectangle(2,5);
        console.log(rec.length);
        console.log(rec.width);
        console.log(rec.perimeter);
        console.log(rec.area);