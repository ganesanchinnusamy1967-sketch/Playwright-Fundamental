# Playwright Fundamentals

Playwright test automation project with Allure reporting and custom TTA reporter.

## Project Structure

```
├── tests/                 # Test files (project_01 - project_07)
├── allure-results/        # Allure test results
├── allure-report/         # Generated Allure reports
├── tta-report/            # TTA custom reports
├── CustomTTAReporter.ts   # Custom TTA reporter implementation
├── playwright.config.ts   # Playwright configuration
└── package.json           # Project dependencies
```

## Prerequisites

- Node.js
- Java 8+ (for Allure)

## Setup

```bash
npm install
```

## Running Tests

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/project_07.spec.ts
```

## Reports

### Allure Report

```bash
npm run allure:generate
npm run allure:serve
```

### HTML Report

Playwright HTML report is generated automatically in `playwright-report/`.

## Project 07 - Web Table Search & Verify

Searches for employee names in a web table and verifies checkbox selection (`tests/project_07.spec.ts`).
