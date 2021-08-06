const {queryString, parse}= require('./queryString');

describe('Object to query string', () => {

    it('should create avalid query string when an object is provider', () => {
        const obj = {
            name: 'Matthaus',
            profession: 'developer'
        };
    
        const result = queryString(obj);

        
        expect(result).toEqual('name=Matthaus&profession=developer');
    });

    it('should create a valid query string even whenan array is passed as value', () => {
        const obj = {
            name: 'Matthaus',
            abilities: ['JS','TDD']
        };

        const result = queryString(obj);

        expect(result).toEqual('name=Matthaus&abilities=JS,TDD');
    });
    
    it('should throw an error when an object is passed as value', () => {
        const obj = {
            name: 'Matthaus',
            abilities: {
                first: 'JS', 
                second: 'TDD',
            }
        };


        expect(() => {
            queryString(obj);
        }).toThrowError();
    });
});

describe('Query string to object', () => {
    it('should convet query string to object', () => {
        const qs = 'name=Matthaus&profession=developer'

        expect(parse(qs)).toEqual({
            name: 'Matthaus',
            profession: 'developer'
        })
    });

    it('should convert a query string of a single key-value pair to object', () => {
        const qs = 'name=Matthaus'

        expect(parse(qs)).toEqual({
            name: 'Matthaus'
        })
    });

    it('should convert a query string to an object taking care of comma separated values', () => {
        const qs = 'name=Matthaus&abilities=JS,TDD';

        expect(parse(qs)).toEqual({
            name: 'Matthaus',
            abilities: ['JS','TDD']
        })
    });
    
});
