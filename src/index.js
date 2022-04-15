import { Student } from './controllers/Students.js';
import { Professors } from './controllers/Professors.js';
import { CalcPerimeter } from './controllers/CalcPerimeter.js';


const student = new Student();
const professor = new Professors();
const square = new CalcPerimeter('square', 4, 5);
const triangle = new CalcPerimeter('triangle', 3, 3);
let amandaDescription = 'melhor professora, dá um pontinho aí vai';

function school() {
    student.getInfo('alex', Math.round(Math.random() * (50 - 16) + 16), 'info web');
    student.showInfo();

    console.log('\n')

    professor.getInfo('Amanda', Math.round(Math.random() * (50 - 16) + 16), null, amandaDescription);
    professor.getSubject('ITI');
    professor.showInfo();
    professor.showSubject();
}

(function calc() {
    square.calcPerimeter();
    triangle.calcPerimeter();
})()