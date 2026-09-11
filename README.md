# lp-portfolio

A lightweight React + Vite portfolio/landing page template.

This repository provides a minimal, fast development setup for building a React-based portfolio or landing page using Vite. It includes opinionated defaults for HMR, ESLint, and modern React tooling so you can focus on content and layout.

## What this is

- A starter project to build a personal portfolio or landing page with React and Vite.
- Minimal configuration so the project boots quickly in development and produces small optimized builds for production.

## Technologies used

- React (functional components, hooks)
- Vite (dev server and build)
- ESLint (basic linting rules)
- Optional: @vitejs/plugin-react or @vitejs/plugin-react-swc (see package.json)

## Minimum requirements

- Node.js >= 16 (Node 18+ recommended)
- npm >= 8 or yarn or pnpm
- Git (to clone the repo)

## Setup & development

1. Clone the repository

   git clone https://github.com/actuallycoding/lp-portfolio.git
   cd lp-portfolio

2. Install dependencies

   npm install
   # or
   # yarn
   # pnpm install

3. Start the dev server (hot reload enabled)

   npm run dev

   Open http://localhost:5173 (or the URL printed by Vite) and start developing.

## Build for production

1. Create an optimized production build:

   npm run build

2. Preview the production build locally:

   npm run preview

## Environment / Configuration

- Check package.json for available scripts and installed plugins.
- If the project uses environment variables, create a .env file (example: .env.example) and list required values there.

## Linting & Formatting

- ESLint is included; run:

  npm run lint

- Add or update lint rules in the project ESLint configuration file.

## Notes

- The React Compiler is not enabled by default due to dev/build performance tradeoffs. See React docs if you want to enable it.
- If you prefer TypeScript and type-aware linting, consider switching to a TypeScript template.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of changes.

## License

Specify a license in LICENSE or update this section with the chosen license.
