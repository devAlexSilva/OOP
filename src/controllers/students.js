export class Student {
    name;
/**
 * @param {string} name
 * 
 * @method showName();
 * 
 */
    
    getName(name) {
        this.name = name
    }

    showName() {
        console.log(`your name is: ${this.name}`);
    }

}