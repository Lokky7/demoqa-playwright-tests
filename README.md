# DemoQA UI tests

A small Playwright + TypeScript test suite for [demoqa.com](https://demoqa.com/).

## Covered scenarios

- Submit the Text Box form and verify the displayed values.
- Submit the form with an invalid email and verify the validation state.
- Select `Home` in the Check Box tree and verify that all child items are selected.
- Clear the `Home` selection and verify that the child items are cleared as well.

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
npm install
npm run install:browsers
```

## Running the tests

Run all tests:

```bash
npm test
```

Other available commands:

```bash
npm run test:headed
npm run test:ui
npm run test:debug
npm run test:text-box
npm run test:check-box
```

A specific test can also be run directly:

```bash
npx playwright test tests/check-box.spec.ts
npx playwright test -g "invalid email"
```

To slow down a headed run while debugging:

```bash
SLOWMO=500 npx playwright test --headed
```

## Project structure

```
pages/       Page Object classes
tests/       Test specifications
test-data/   Test and expected data
types/       Shared TypeScript types
```

Page-specific selectors and actions are kept in the Page Object classes. Assertions remain in the spec files so that the expected behaviour is visible in each test.

## Reports

Tests run in Chromium and can run in parallel. When a test fails, Playwright saves a screenshot and video. A trace is recorded on retry.

The latest HTML report can be opened with:

```bash
npm run report
```
