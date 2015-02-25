import {Developer} from '../../src/js/classes/Developer';

export function DeveloperSpec() {
    describe('Developer', () => {
        var developer;

        beforeEach(() => {
            spyOn(Developer, 'constructor').and.callThrough();

            developer = new Developer({
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
        });

        it('should create a new developer', () => {
            expect(developer).toBeDefined();
        });

        it('should assign the name property', () => {
            expect(developer.name).toEqual('John Cheesman');
        });

        it('should assign the dob property', () => {
            expect(developer.dob).toEqual('26/03/1988');
        });

        it('should assign the skills property', () => {
            expect(developer.skills).toEqual([
                'html',
                'css',
                'js'
            ]);
        });

        it('should assign the github property', () => {
            expect(developer.github).toEqual('john-cheesman');
        });

        it('should assign the twitter property', () => {
            expect(developer.twitter).toEqual('blues_driven');
        });
    });
};
