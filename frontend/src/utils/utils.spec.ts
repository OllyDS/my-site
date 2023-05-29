import { sentenceCase } from './utils';

describe('#sentenceCase()', () => {
    it('should convert a lowercase string to sentence case.', () => {
        const input = 'hello';
        const expectedOutput = 'Hello';
        expect(sentenceCase(input)).toEqual(expectedOutput);
    });

    it('should convert an uppercase string to sentence case.', () => {
        const input = 'HELLO!';
        const expectedOutput = 'Hello!';
        expect(sentenceCase(input)).toEqual(expectedOutput);
    });

    it('should return a sentence case string.', () => {
        const input = 'A sentence.';
        const expectedOutput = 'A sentence.';
        expect(sentenceCase(input)).toEqual(expectedOutput);
    });

    it('should return an error message for a non-string type', () => {
        const input = 123 as any;
        expect(sentenceCase(input)).toEqual(123);
    });
});
