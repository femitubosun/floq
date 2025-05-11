# Floq - Treasury & Liquidity Management System

A sophisticated multi-currency treasury and liquidity management system built with NestJS, designed to handle complex financial operations, currency management, and liquidity forecasting for global fintech operations.

## Core Features

### Multi-Currency Ledger System

- Virtual account management per currency
- Idempotent credit/debit operations
- Immutable audit logging
- Strongly consistent ledger balances

### FX Rate Integration

- Real-time exchange rate ingestion
- Historical rate snapshots
- Conversion estimation endpoints
- Integration with external rate providers

### Netting Engine

- Internal currency netting optimization
- Netting proposal generation
- Cost estimation (fees + spread)
- Cross-currency settlement analysis

### Liquidity Forecasting

- Cash position projections per currency
- Shortage/surplus detection
- Dashboard visualization data
- Linear and moving average models

### Alerts System

- Low balance notifications
- Volatility spike detection
- Projected deficit alerts
- Webhook-based delivery system

## Tech Stack

- **Framework**: NestJS with Fastify platform
- **Database**: PostgreSQL with Prisma ORM
- **Queue Management**: Redis + BullMQ
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Zod with nestjs-zod integration
- **Authentication**: JWT with argon2 hashing

## User Roles

- **Finance Ops Analyst**: Monitor current and projected balances
- **Treasury Manager**: Manage FX conversions and fund movements

## Prerequisites

- Node.js (LTS version)
- PostgreSQL
- Redis Server

## Project Setup

1. Install dependencies:

```bash
$ npm install
```

2. Set up your environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/floq"
REDIS_URL="redis://localhost:6379"
FX_RATE_API_KEY="your-api-key"
# Add other required environment variables
```

## Available Scripts

### Development

```bash
# Start development server
$ npm run dev

# Start with debug mode
$ npm run start:debug

# Production mode
$ npm run start:prod
```

### Database Management (Prisma)

```bash
# Generate Prisma Client and types
$ npm run db:types

# Create and apply migrations
$ npm run db:migrate

# Deploy migrations (production)
$ npm run db:deploy

# Open Prisma Studio
$ npm run db:studio
```

### Testing

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Integrated Services

### Redis & BullMQ

The application uses Redis as a message broker for BullMQ, handling asynchronous job processing including:

- FX rate updates
- Netting calculations
- Liquidity forecasting
- Alert notifications

### Database Schema

The application uses Prisma as the ORM with the following main models:

- Currency accounts and balances
- Transaction records
- FX rate history
- Netting proposals
- Liquidity forecasts
- Alert configurations

## Development Guidelines

- Follow the NestJS module structure
- Implement proper error handling and logging
- Write comprehensive unit tests
- Use TypeScript decorators and types
- Maintain idempotency in financial operations

## License

This project is [MIT licensed](LICENSE).
