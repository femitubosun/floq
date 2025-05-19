import { Currency } from '@/infrastructure/prisma/generated';
import { FloqDecimal } from '@/common/__defs__';

export function convertViaUsd(input: {
  base: {
    currency: Currency;
    usdRate: FloqDecimal;
  };
  quote: {
    currency: Currency;
    usdRate: FloqDecimal;
  };
}) {
  const { base, quote } = input;

  const quoteRate = quote.usdRate;
  const baseRate = base.usdRate;

  if (base.currency === Currency.USD) {
    return quoteRate;
  }

  if (quote.currency === Currency.USD) {
    return new FloqDecimal(1).div(baseRate);
  }

  return quoteRate.div(baseRate);
}
