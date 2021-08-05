const {queryString}= require('./queryString');

describe('Object to query string', () => {

    it('should create avalid query string when an object is provider', () => {
        const obj = {
            name: 'Matthaus',
            profession: 'developer'
        };
    
        const result = queryString(obj);



        
        expect(result).toEqual('name=Matthaus&profession=developer');
    });
    
});
