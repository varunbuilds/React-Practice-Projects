# React-Practice-Projects

A collection of small React practice projects (Vite + React) used for learning and demonstrations.

Each numbered folder contains a standalone project with its own `package.json`. Most projects use Vite for development and Tailwind for styling. This README provides a quick index and how to run each project.

## Projects

Each folder name begins with a number for ordering. Brief descriptions (when present) are in each project's own README.

- `1_stopwatch/` — Stopwatch example using React and MUI
- `2_todo-board/` — Simple todo board with drag/drop style layout
- `3_rss-feed/` — RSS feed reader (has `client/` and `server/` subfolders)
- `4_dynamic-form-handling/` — Dynamic form examples
- `5_useContext-hook/` — Example using React Context API
- `6_useReducer-counter/` — Counter using useReducer
- `7_RandomPass_useCallback_useRef/` — Small utilities demonstrating hooks
- `8_Redux/` — TypeScript + Redux example
- `Movie List App/` — A movie listing app with pages and services

## Quick start (global)

These projects are independent. To run any of them, open a terminal, cd into the project folder and use npm/yarn/pnpm to install and run. Example using npm:

```bash
# change to a project folder, e.g. stopwatch
cd 1_stopwatch

# install dependencies
npm install

# start dev server
npm run dev
```

Most projects support these npm scripts (see each package.json):

- `dev` — start the Vite dev server
- `build` — build for production
- `preview` — preview the built app locally
- `lint` — run ESLint checks

## 3_rss-feed special note

The `3_rss-feed` directory contains a `client/` (frontend) and `server/` (node backend). If you want to run the full app:

1. Install and start the server:

```bash
cd 3_rss-feed/server
npm install
node index.js
```

2. In another terminal start the client:

```bash
cd 3_rss-feed/client
npm install
npm run dev
```

## Contributing

- Each project is self-contained — make changes inside the numbered folder and open a PR.
- Keep changes focused to a single example per PR.

## Notes

- Node.js (v16+/v18+) and npm are recommended. Vite is used across projects.
- If you use Yarn or pnpm, replace `npm` commands accordingly (`yarn`, `pnpm install`, `pnpm dev`).

## Contact / License

This repository is for personal practice. No license specified; reuse at your own discretion.
