import {Person} from './Person';

export class Developer extends Person {
    constructor(properties) {
        super({
            name: properties.name,
            dob: properties.dob
        });

        this.skills  = properties.skills;
        this.github  = properties.github;
        this.twitter = properties.twitter;
    }

    render(element) {
        let skills,
            template;

        skills = '';

        this.skills.forEach(function(skill) {
            skills += `<dd>${skill}</dd>`;
        });

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
