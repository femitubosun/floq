import { Money } from './money';
import { FloqDecimal } from '@/common/__defs__'; // Assuming FloqDecimal is Decimal.js or similar
import { CurrencyType } from '@/infrastructure/prisma/__defs__';

describe('Money', () => {
  const USD: CurrencyType = 'USD';
  const NGN: CurrencyType = 'NGN';

  describe('constructor', () => {
    it('should correctly initialize with a FloqDecimal amount and currency', () => {
      const amount = new FloqDecimal(100.5);
      const money = new Money(amount, USD);
      expect(money.amount.equals(amount)).toBe(true);
      expect(money.currency).toBe(USD);
    });

    it('should create a new FloqDecimal instance even if one is passed', () => {
      const initialAmount = new FloqDecimal(50);
      const money = new Money(initialAmount, NGN);
      expect(money.amount).toBeInstanceOf(FloqDecimal);
      expect(money.amount.equals(initialAmount)).toBe(true);
    });
  });

  describe('fromString', () => {
    it('should correctly parse a valid money string', () => {
      const money = Money.fromString('123.45 USD');
      expect(money.amount.equals(new FloqDecimal('123.45'))).toBe(true);
      expect(money.currency).toBe(USD);
    });

    it('should parse a string with an integer amount', () => {
      const money = Money.fromString('1000 NGN');
      expect(money.amount.equals(new FloqDecimal('1000'))).toBe(true);
      expect(money.currency).toBe(NGN);
    });

    it('should throw an error for an invalid money string (missing currency)', () => {
      expect(() => Money.fromString('123.45')).toThrow(
        'Invalid money string format. Expected "AMOUNT CURRENCY"',
      );
    });

    it('should throw an error for an invalid money string (missing amount)', () => {
      expect(() => Money.fromString(' USD')).toThrow(
        'Invalid money string format. Expected "AMOUNT CURRENCY"',
      );
    });

    it('should throw an error for an empty string', () => {
      expect(() => Money.fromString('')).toThrow(
        'Invalid money string format. Expected "AMOUNT CURRENCY"',
      );
    });

    it('should throw an error if amount part is not a valid number', () => {
      expect(() => Money.fromString('abc USD')).toThrow();
    });
  });

  describe('toString', () => {
    it('should return the correct string representation', () => {
      const money = new Money(new FloqDecimal('99.99'), NGN);
      expect(money.toString()).toBe('99.99 NGN');
    });

    it('should handle whole numbers correctly', () => {
      const money = new Money(new FloqDecimal('200'), USD);
      expect(money.toString()).toBe('200 USD');
    });
  });

  describe('add', () => {
    const m1 = new Money(new FloqDecimal(100), USD);
    const m2 = new Money(new FloqDecimal(50), USD);
    const m3 = new Money(new FloqDecimal(50), NGN);

    it('should add money of the same currency', () => {
      const result = m1.add(m2);
      expect(result.amount.equals(new FloqDecimal(150))).toBe(true);
      expect(result.currency).toBe(USD);
    });

    it('should throw an error when adding money of different currencies', () => {
      expect(() => m1.add(m3)).toThrow(
        'Cannot add money of different currencies',
      );
    });
  });

  describe('subtract', () => {
    const m1 = new Money(new FloqDecimal(100), USD);
    const m2 = new Money(new FloqDecimal(30), USD);
    const m3 = new Money(new FloqDecimal(30), NGN);

    it('should subtract money of the same currency', () => {
      const result = m1.subtract(m2);
      expect(result.amount.equals(new FloqDecimal(70))).toBe(true);
      expect(result.currency).toBe(USD);
    });

    it('should throw an error when subtracting money of different currencies', () => {
      expect(() => m1.subtract(m3)).toThrow(
        'Cannot subtract money of different currencies',
      );
    });
  });

  describe('multiply', () => {
    const money = new Money(new FloqDecimal(10), USD);

    it('should multiply by a number factor', () => {
      const result = money.multiply(5);
      expect(result.amount.equals(new FloqDecimal(50))).toBe(true);
      expect(result.currency).toBe(USD);
    });

    it('should multiply by a string factor', () => {
      const result = money.multiply('2.5');
      expect(result.amount.equals(new FloqDecimal(25))).toBe(true);
      expect(result.currency).toBe(USD);
    });

    it('should multiply by a FloqDecimal factor', () => {
      const result = money.multiply(new FloqDecimal(0.5));
      expect(result.amount.equals(new FloqDecimal(5))).toBe(true);
      expect(result.currency).toBe(USD);
    });
  });

  describe('divide', () => {
    const money = new Money(new FloqDecimal(100), NGN);

    it('should divide by a number divisor', () => {
      const result = money.divide(4);
      expect(result.amount.equals(new FloqDecimal(25))).toBe(true);
      expect(result.currency).toBe(NGN);
    });

    it('should divide by a string divisor', () => {
      const result = money.divide('2.5');
      expect(result.amount.equals(new FloqDecimal(40))).toBe(true);
      expect(result.currency).toBe(NGN);
    });

    it('should divide by a FloqDecimal divisor', () => {
      const result = money.divide(new FloqDecimal(5));
      expect(result.amount.equals(new FloqDecimal(20))).toBe(true);
      expect(result.currency).toBe(NGN);
    });

    it('should throw an error when dividing by zero (number)', () => {
      expect(() => money.divide(0)).toThrow('Cannot divide by zero');
    });

    it('should throw an error when dividing by zero (string)', () => {
      expect(() => money.divide('0')).toThrow('Cannot divide by zero');
    });

    it('should throw an error when dividing by zero (FloqDecimal)', () => {
      expect(() => money.divide(new FloqDecimal(0))).toThrow(
        'Cannot divide by zero',
      );
    });
  });

  describe('equals', () => {
    const m1 = new Money(new FloqDecimal(100), USD);
    const m2 = new Money(new FloqDecimal(100), USD);
    const m3 = new Money(new FloqDecimal(101), USD);
    const m4 = new Money(new FloqDecimal(100), NGN);

    it('should return true for equal amounts and currencies', () => {
      expect(m1.equals(m2)).toBe(true);
    });

    it('should return false for different amounts, same currency', () => {
      expect(m1.equals(m3)).toBe(false);
    });

    it('should return false for same amount, different currencies', () => {
      expect(m1.equals(m4)).toBe(false);
    });

    it('should return false for different amounts and different currencies', () => {
      expect(m3.equals(m4)).toBe(false);
    });
  });

  describe('isGreaterThan', () => {
    const m1 = new Money(new FloqDecimal(100), USD);
    const m2 = new Money(new FloqDecimal(50), USD);
    const m3 = new Money(new FloqDecimal(100), USD);
    const m4 = new Money(new FloqDecimal(150), USD);
    const m5 = new Money(new FloqDecimal(50), NGN);

    it('should return true if this amount is greater', () => {
      expect(m1.isGreaterThan(m2)).toBe(true);
    });

    it('should return false if this amount is smaller', () => {
      expect(m1.isGreaterThan(m4)).toBe(false);
    });

    it('should return false if amounts are equal', () => {
      expect(m1.isGreaterThan(m3)).toBe(false);
    });

    it('should throw an error when comparing different currencies', () => {
      expect(() => m1.isGreaterThan(m5)).toThrow(
        'Cannot compare money of different currencies for greater than',
      );
    });
  });

  describe('isLessThan', () => {
    const m1 = new Money(new FloqDecimal(50), USD);
    const m2 = new Money(new FloqDecimal(100), USD);
    const m3 = new Money(new FloqDecimal(50), USD);
    const m4 = new Money(new FloqDecimal(25), USD);
    const m5 = new Money(new FloqDecimal(100), NGN);

    it('should return true if this amount is lesser', () => {
      expect(m1.isLessThan(m2)).toBe(true);
    });

    it('should return false if this amount is greater', () => {
      expect(m1.isLessThan(m4)).toBe(false);
    });

    it('should return false if amounts are equal', () => {
      expect(m1.isLessThan(m3)).toBe(false);
    });

    it('should throw an error when comparing different currencies', () => {
      expect(() => m1.isLessThan(m5)).toThrow(
        'Cannot compare money of different currencies for less than',
      );
    });
  });

  describe('negated', () => {
    it('should negate a positive amount', () => {
      const money = new Money(new FloqDecimal(100), USD);
      const result = money.negated();
      expect(result.amount.equals(new FloqDecimal(-100))).toBe(true);
      expect(result.currency).toBe(USD);
    });

    it('should negate a negative amount', () => {
      const money = new Money(new FloqDecimal(-50), NGN);
      const result = money.negated();
      expect(result.amount.equals(new FloqDecimal(50))).toBe(true);
      expect(result.currency).toBe(NGN);
    });

    it('should negate zero', () => {
      const money = new Money(new FloqDecimal(0), USD);
      const result = money.negated();
      expect(result.amount.equals(new FloqDecimal(0))).toBe(true);
      expect(result.amount.isZero()).toBe(true);
      expect(result.currency).toBe(USD);
    });
  });
});
