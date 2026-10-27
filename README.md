# Resume Generator

A small React app for building a CV. Fill in the form on the left and a live preview of the resume updates on the right as you type.

**Live demo:** https://matgmarcelino.github.io/Resume-Generator/

## Features

- **Personal details:** name, email, and phone number
- **Education:** school, title of study, degree, and start/end dates
- **Experience:** company, position, responsibilities, and start/end dates
- **Live preview:** the resume re-renders on every change
- **Per-section reset:** clear a single section without touching the others

Fields marked with `*` are required for that section to appear in the preview.

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## Getting started

Requires [Node.js](https://nodejs.org/) and npm.

```bash
git clone git@github.com:matgmarcelino/Resume-Generator.git
cd Resume-Generator
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
├── App.jsx               # Holds form state, lays out editor + preview
├── main.jsx              # Entry point
├── components/
│   ├── form/             # Form sections, inputs, reset button
│   ├── preview/          # Resume preview sections
│   └── helpers/          # Date formatting
└── styles/               # Component stylesheets
```
