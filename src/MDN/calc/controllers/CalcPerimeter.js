export class CalcPerimeter {
    name;
    side;
    sideLength;

    constructor(name, side, sideLength){
        this.name = name;
        this.side = side;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(this.side*this.sideLength);
    }
    
}