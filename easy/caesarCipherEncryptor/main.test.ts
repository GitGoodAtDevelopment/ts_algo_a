import ccEncryptor from './main';

describe('Caesar Cipher Encryptor', () => {
    describe('Generic Setup', () => {
        it("Should return an empty string when given no message and any key shift", () => {
            expect(ccEncryptor('', 0)).toEqual("");
            expect(ccEncryptor("", 1999282)).toEqual("");
        })
        it("Should return the string 'a' when given the message 'a' with a 0 key shift", () => {
            expect(ccEncryptor('a', 0)).toEqual("a");
        })
        it("Should return the string 'b' when given the message 'a' with a 1 key shift", () => {
            expect(ccEncryptor('a', 1)).toEqual('b');
        })
        it("Should return the string 'a' when given the message 'a' with a 26 key shift", () => {
            expect(ccEncryptor('a', 26)).toEqual('a');
        })
        it("Should handle any shift key greater than 26 effectively", () => {
            expect(ccEncryptor('a', 27)).toEqual('b');
        })
        it("Should return 'a' if given 'z' and an offset of 1", () => {
            expect(ccEncryptor('z', 1)).toEqual('a');
        })
    })
    describe("Handling words and phrases", () => {
        it("Should convert the word 'aaa' to 'bbb' when given a 1 and 27 key offset", () => {
            expect(ccEncryptor('aaa', 1)).toEqual('bbb');
            expect(ccEncryptor('aaa', 27)).toEqual('bbb');
        })
        it("Should convert the word 'abc' to 'bcd' when given a 1 and 27 key offset", () => {
            expect(ccEncryptor('abc', 1)).toEqual('bcd');
            expect(ccEncryptor('abc', 27)).toEqual('bcd');
        })
        it("Should convert the phrase 'abc abc' to 'bcd bcd' when given a 1 offset", () => {
            expect(ccEncryptor('abc abc', 1)).toEqual('bcd bcd');
        })
    })

    describe("Handling special characters", () => {
        it("Should convert 'abc.' to 'bcd.' when given a 1 offset", () => {
            expect(ccEncryptor('abc.', 1)).toEqual('bcd.');
        });
    })

    describe('Handling casing', () => {
        it("Should convert 'A' to 'A' when given a 0 offset", () => {
            expect(ccEncryptor('A', 0)).toEqual('A');
        })
        it("Should covert 'A' to 'A' when given a 26 offset", () => {
            expect(ccEncryptor('A', 26)).toEqual('A');
        })
        it("Should convert 'Z' to 'A' when given a 1 offset", () => {
            expect(ccEncryptor('Z', 1)).toEqual('A');
        })
        it("Should convert 'Z' to 'A' when given a 27 offset", () => {

        })
        it("Should convert 'A' to 'B' when given a 1 offset", () => {
            expect(ccEncryptor('A', 1)).toEqual('B');
        })
        it("Should convert 'AbC' to 'BcD' when given a 1 offset", () => {
            expect(ccEncryptor('AbC', 1)).toEqual('BcD');
        })
        it("Should convert this phrase with ease when shifted by 7", () => {
            const phrase = "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out."
            const expected = "Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba."
            expect(ccEncryptor(phrase, 7));
        })
    })
    
})
