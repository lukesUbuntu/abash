import { abash } from '../abash';
import { expect } from 'chai';

describe('Constructor Test', () => {
    it('throw if cipher & decipher strings are not the same length', () => {
        expect(function () { const result = new abash('abcdefghijklmnopqrstuvwxyz', '123'); }).to.throw('cipher string & decipher string must be the same string length');
    });
});

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

describe('The challenge', () => {
    it('should return houston, we have a problem', () => {
      const result = new abash('abcdefghijklmnopqrstuvwxyz','oephjizkxdawubnytvfglqsrcm');
      expect(result.decipher('knlfgnb, sj koqj o yvnewju')).to.equal('houston, we have a problem');
    });
  });