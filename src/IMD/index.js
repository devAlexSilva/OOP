import { Student } from './controllers/Students.js';
import { Professors } from './controllers/Professors.js';


const student = new Student();
const professor = new Professors();
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
 school();