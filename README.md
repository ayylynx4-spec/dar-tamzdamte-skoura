# Dar Tamzdamte Skoura

A warm guesthouse website and stay builder for the Dar Tamzdamte Skoura experience.

## Stack

- Next.js 16
- React 19
- Tailwind CSS
- Zustand
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

- `app/` — routes and layouts
- `src/components/home/` — homepage storytelling sections
- `src/components/stay/` — future stay builder UI
- `src/store/` — Zustand store
- `src/lib/` — pricing, dates and helpers

## Architectural intent

This project is intentionally structured for easy extension:
- marketing pages remain separate from the stay builder
- pricing logic lives in utilities rather than inline in components
- state is centralized through Zustand
- the frontend is prepared for a future API/admin layer
