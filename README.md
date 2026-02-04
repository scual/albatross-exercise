# Quadratic Equation Solver

A modern web application that solves second-degree (quadratic) equations of the form `ax² + bx + c = 0`. Built with Next.js and deployed to GitHub Pages.

## Features

- **Complete Solver**: Handles all standard cases and edge cases:
  - Two real roots ($\Delta > 0$)
  - One repeated real root ($\Delta = 0$)
  - Complex roots ($\Delta < 0$) with clean formatting (e.g., `x = -0.5 ± 1.65i`)
  - Linear equations handling (when $a=0$)
- **Architecture**: Separation of concerns with logic isolated in `src/lib/solver.ts` so that i can be unit-testable.

## Getting Started

### Prerequisites

- Node.js 20+ installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd albatros-exercise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for **Continuous Deployment** to GitHub Pages via GitHub Actions.

- **Workflow**: The `.github/workflows/deploy.yml` file automates the build and deployment process on every push to the `main` branch.
- **Static Export**: The project is configured (`output: 'export'` in `next.config.ts`) to generate a static site suitable for standard hosting environments like GitHub Pages.

To build manually:
```bash
npm run build
```
The output will be located in the `out/` directory.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
