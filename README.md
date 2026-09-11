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

## Feedback & suggestions

Feedback and suggestions are welcome — open an issue or drop a short note describing improvements or bugs. Contributions (pull requests) are optional: feel free to fork the repo and propose changes if you want.

## Assets & fonts

All assets included in this template (images, icons, and the font configured in the project) are free to use. The font was chosen from freely available options so this starter is ready for personal and learning projects. If you replace or add assets for professional or commercial use, verify the individual asset licenses and any required attribution before publishing.

## License

This project currently does not include a LICENSE file. The assets bundled here are free to use, but the repository as a whole does not grant any license — all rights are reserved by default. If you want to allow others to reuse the code or assets under permissive terms, add a LICENSE file. Common choices:

- MIT (permissive)
- Apache-2.0 (permissive with patent grant)
- Unlicense (public domain)

If you’d like, tell me which license to add and I can create the LICENSE file for you.
