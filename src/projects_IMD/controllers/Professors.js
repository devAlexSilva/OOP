import { Student } from "./Students.js";

export class Professors extends Student {
    subjects;


    getSubject(subjects) {
        this.subjects = subjects;
    }

    showSubject() {
        this.subjects && console.log('your school subject is: ', this.subjects);
    }

}