import { abash } from '../abash';
import { expect } from 'chai';

describe('Example 1', () => {
    it('should return car', () => {
        const result = new abash('abcdefghijklmnopqrstuvwxyz', 'zodvqukgwefbyitmrsplhacxnj');
        expect(result.decipher('dzs')).to.equal('car');
    });
});

describe('Example 2', () => {
    it('should return why so serious?', () => {
        const result = new abash('abcdefghijklmnopqrstuvwxyz', 'xipmuzfkbrlwotjancqgveshdy');
        expect(result.decipher('skd qj qucbjvq?')).to.equal('why so serious?');
    });
});