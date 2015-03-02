import {Developer} from './classes/Developer';

let frontEndDeveloper;

frontEndDeveloper = new Developer({
    name: 'John Cheesman',
    dob: '26/03/1988',
    skills: [
        'html',
        'css',
        'js'
    ],
    github: 'john-cheesman',
    twitter: 'blues_driven'
});

frontEndDeveloper.render('.js-developer');
