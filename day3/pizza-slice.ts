 function addingPizzaHead(size:string):string{
    if(size=='medium' || size=='large'){
        return ' __\n';
    }
    else {
        return ' _\n'; 
    }
   }
   function addingPizzaBody(size?:string, count?:number):string{
       let base="";
    if(size=='small')
    base = '| |\n'
    else if(size=='medium' || size=='large' && !count==undefined){
        
        base= '|  |\n';
    }else{
        for(let i =0;i<count; i++){
            base+= '|  |\n';
        }
    }
    return base; 
   }
   function addingPizzaTail(size:string):string{
    let base="";

    if(size=='medium' || size=='large'){
        base= '|__|';
    }
    else {
        base= '|_|'; 
    }
    return base;
   }

 function drawSmallPizzaSlice(size?:string):string {

    const pizza: string = addingPizzaHead(size) + addingPizzaTail(size);
    return pizza;
   }


 function drawMediumPizzaSlice(size?:string):string {
    size = 'medium';
    const pizza: string = addingPizzaHead(size)  + addingPizzaTail(size);
    return pizza;
 }
 

 function drawLargePizzaSlice(size?:string):string {
    size = 'large';
    const pizza: string = addingPizzaHead(size) + addingPizzaBody(size,2) + addingPizzaTail(size);
    return pizza;
 }
 
 function drawMadLargePizzaSlice(height:number):string {
     const size = 'large';
     
     
    const pizza: string = addingPizzaHead(size) + addingPizzaBody(size,height) + addingPizzaTail(size);
    return pizza;
 }
 
 function drawAnyPizzaSlice(sliceSize?:string, height?:number):string {
    if(sliceSize=='small'){
        return drawSmallPizzaSlice(sliceSize);
    }else if(sliceSize=='medium'){
        return drawMediumPizzaSlice(sliceSize);
    }else if(sliceSize=='large'){
        return drawLargePizzaSlice(sliceSize);
    }else{
        return drawMadLargePizzaSlice(height);
    }
 }
 

console.log("---begin---");

console.log("small,medium, large without param below");
console.log(drawSmallPizzaSlice());
console.log(drawMediumPizzaSlice());
console.log(drawLargePizzaSlice());


console.log("\nsmall,medium, large with param below");

console.log(drawAnyPizzaSlice("small"));
console.log(drawAnyPizzaSlice("medium"));
console.log(drawAnyPizzaSlice("large"));

console.log("\nmad large with with param as 10 below");
console.log(drawAnyPizzaSlice(undefined, 10));

console.log("\n---end---");
