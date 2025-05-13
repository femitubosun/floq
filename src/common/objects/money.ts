import { CurrencyType } from '@/infrastructure/prisma/__defs__';
import { FloqDecimal } from '@/common/__defs__';

export class Money {
  public readonly amount: FloqDecimal;

  constructor(
    amount: FloqDecimal,
    public readonly currency: CurrencyType,
  ) {
    this.amount = new FloqDecimal(amount);
  }

  static fromString(value: string): Money {
    const [amountStr, currencyStr] = value.split(' ');
    if (!amountStr || !currencyStr) {
      throw new Error(
        'Invalid money string format. Expected "AMOUNT CURRENCY"',
      );
    }
    return new Money(new FloqDecimal(amountStr), currencyStr as CurrencyType);
  }

  toString(): string {
    return `${this.amount.toString()} ${this.currency}`;
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error('Cannot add money of different currencies');
    }
    return new Money(this.amount.plus(other.amount), this.currency);
  }

  subtract(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error('Cannot subtract money of different currencies');
    }
    return new Money(this.amount.minus(other.amount), this.currency);
  }

  multiply(factor: number | string | FloqDecimal): Money {
    return new Money(this.amount.times(new FloqDecimal(factor)), this.currency);
  }

  divide(divisor: number | string | FloqDecimal): Money {
    if (new FloqDecimal(divisor).isZero()) {
      throw new Error('Cannot divide by zero');
    }
    return new Money(
      this.amount.dividedBy(new FloqDecimal(divisor)),
      this.currency,
    );
  }

  equals(other: Money): boolean {
    return this.amount.equals(other.amount) && this.currency === other.currency;
  }

  isGreaterThan(other: Money): boolean {
    if (this.currency !== other.currency) {
      throw new Error(
        'Cannot compare money of different currencies for greater than',
      );
    }
    return this.amount.greaterThan(other.amount);
  }

  isLessThan(other: Money): boolean {
    if (this.currency !== other.currency) {
      throw new Error(
        'Cannot compare money of different currencies for less than',
      );
    }
    return this.amount.lessThan(other.amount);
  }

  negated(): Money {
    return new Money(this.amount.negated(), this.currency);
  }
}
