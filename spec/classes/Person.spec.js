import {Person} from '../../src/js/classes/Person';

export function PersonSpec() {
    describe('Person', () => {
        var person;

        beforeEach(() => {
            spyOn(Person, 'constructor').and.callThrough();

            person = new Person({
                name: 'John Cheesman',
                dob: '26/03/1988'
            });
        });

        it('should create a new person', () => {
            expect(person).toBeDefined();
        });

        it('should assign the name property', () => {
            expect(person.name).toEqual('John Cheesman');
        });

        it('should assign the dob property', () => {
            expect(person.dob).toEqual('26/03/1988');
        });
    });
};
