# VB Bank E2E Automation Framework

An enterprise-grade End-to-End (E2E) testing framework built for the VB Bank web application using **Playwright** and **TypeScript**. This repository demonstrates advanced automation architectural patterns designed for scalability, resilience, and maintainability.

## 🏗️ Architectural Highlights

* **Global Authentication State:** Implements a setup project (`auth.setup.ts`) to log in once, save the session state (`user.json`), and inject it into all subsequent tests, bypassing repetitive UI logins and slashing execution time.
* **Custom Fixtures:** Extends Playwright's core `test` object to automatically instantiate and inject Page Objects directly into test blocks, eliminating boilerplate setup code.
* **Data-Driven Testing (DDT):** Decouples test data from test scripts using native JSON imports and dynamic test generation.
* **Environment Resilience:** Configured with extended timeouts, blocked Service Workers, and "Front Door" routing to prevent flakiness caused by Next.js/Vercel cold starts and network deadlocks in lower environments.
* **Strict Page Object Model (POM):** Encapsulates locators and business logic away from the execution layer for ultimate maintainability.

## 📂 Project Structure

```text
├── src/
│   ├── fixtures/       # Custom Playwright fixtures
│   ├── pages/          # Encapsulated Page Object Models
├── test-data/          # Externalized JSON test data
├── tests/
│   ├── e2e/            # Core UI test specs
│   ├── setup/          # Global setup scripts
├── playwright.config.ts # Global Playwright configuration & project dependencies