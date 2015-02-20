import Person from './Person';

class Developer extends Person {
    constructor(name, age, gender, skills) {
        super(name, age, gender);

        this.skills = skills;
    }
}

export default Developer;