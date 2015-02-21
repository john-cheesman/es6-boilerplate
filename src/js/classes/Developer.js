import {Person} from './Person';

export class Developer extends Person {
    constructor(name, age, gender, skills) {
        super(name, age, gender);

        this.skills = skills;
    }
}
