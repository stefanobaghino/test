const { add, subtract, multiply, divide } = require('../src/utils/math');

describe('Math Utilities', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('adds two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('subtracts negative number', () => {
            expect(subtract(5, -3)).toBe(8);
        });

        test('subtracts zero', () => {
            expect(subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers', () => {
            expect(multiply(-2, -3)).toBe(6);
        });

        test('multiplies positive and negative', () => {
            expect(multiply(3, -4)).toBe(-12);
        });
    });

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('divides negative numbers', () => {
            expect(divide(-10, -2)).toBe(5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero');
        });

        test('returns decimal result', () => {
            expect(divide(7, 2)).toBe(3.5);
        });
    });
});
