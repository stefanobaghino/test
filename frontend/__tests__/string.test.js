const { capitalize, reverse, isPalindrome } = require('../src/utils/string');

describe('String Utilities', () => {
    describe('capitalize', () => {
        test('capitalizes first letter of word', () => {
            expect(capitalize('hello')).toBe('Hello');
        });

        test('keeps already capitalized word unchanged', () => {
            expect(capitalize('Hello')).toBe('Hello');
        });

        test('handles empty string', () => {
            expect(capitalize('')).toBe('');
        });

        test('handles single character', () => {
            expect(capitalize('a')).toBe('A');
        });

        test('handles non-string input', () => {
            expect(capitalize(null)).toBe('');
            expect(capitalize(undefined)).toBe('');
        });
    });

    describe('reverse', () => {
        test('reverses a simple string', () => {
            expect(reverse('hello')).toBe('olleh');
        });

        test('reverses a palindrome stays same', () => {
            expect(reverse('racecar')).toBe('racecar');
        });

        test('handles empty string', () => {
            expect(reverse('')).toBe('');
        });

        test('handles single character', () => {
            expect(reverse('a')).toBe('a');
        });

        test('handles non-string input', () => {
            expect(reverse(null)).toBe('');
            expect(reverse(undefined)).toBe('');
        });
    });

    describe('isPalindrome', () => {
        test('identifies simple palindrome', () => {
            expect(isPalindrome('racecar')).toBe(true);
        });

        test('identifies palindrome with different case', () => {
            expect(isPalindrome('RaceCar')).toBe(true);
        });

        test('identifies palindrome with spaces', () => {
            expect(isPalindrome('race car')).toBe(true);
        });

        test('identifies non-palindrome', () => {
            expect(isPalindrome('hello')).toBe(false);
        });

        test('identifies single character as palindrome', () => {
            expect(isPalindrome('a')).toBe(true);
        });

        test('handles empty string', () => {
            expect(isPalindrome('')).toBe(false);
        });

        test('handles non-string input', () => {
            expect(isPalindrome(null)).toBe(false);
            expect(isPalindrome(undefined)).toBe(false);
        });
    });
});
