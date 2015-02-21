import {Person} from './Person';

export class Developer extends Person {
    constructor(name, dob, skills, github, twitter) {
        super(name, dob);

        this.skills  = skills;
        this.github  = github;
        this.twitter = twitter;
    }

    render(element) {
        var i,
            skills,
            template;

        skills = '';

        for (i=0; i<this.skills.length; i++) {
            skills += `<dd>${this.skills[i]}</dd>`
        };

        template = 
            `<h1>${this.name}</h1>` +
            `<dl>` +
                `<dt>Date of Birth</dt>` +
                `<dd><time datetime="${this.dob}">${this.dob}</time></dd>` +
    
                `<dt>GitHub</dt>` +
                `<dd><a href="http://github.com/${this.github}/">${this.github}</a></dd>` +
    
                `<dt>Twitter</dt>` +
                `<dd><a href="http://twitter.com/${this.twitter}/">@${this.twitter}</a></dd>` +
    
                `<dt>Skills</dt>` +
                skills +
            `</dl>`;

        document.querySelector(element).innerHTML = template;
    }
}
