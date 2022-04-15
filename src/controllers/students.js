export class Student {
    name;
    age;
    emphasis;
    description;


    getInfo(name, age, emphasis, description) {
        this.name = name;
        this.age = age;
        this.emphasis = emphasis;
        this.description = description;
    }

    showInfo() {
        this.name && console.log('your name is: ', this.name);
        this.age && console.log('your age is: ', this.age);
        this.emphasis && console.log('your emphasis is: ', this.emphasis);
        this.description && console.log('your description is: ', this.description);
    }

}