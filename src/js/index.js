import {Developer} from './classes/Developer';

var frontEndDeveloper,

frontEndDeveloper = new Developer(
    'John Cheesman',
    '26/03/1988',
    [
        'html',
        'css',
        'js'
    ],
    'john-cheesman',
    'blues_driven'
);

frontEndDeveloper.render('.js-developer');