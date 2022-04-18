import { CalcPerimeter } from "./controllers/CalcPerimeter.js"


const square = new CalcPerimeter('square', 4, 5);
const triangle = new CalcPerimeter('triangle', 3, 3);

function calc() {
    square.calcPerimeter();
    triangle.calcPerimeter();
}
calc()