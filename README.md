# Todo Web App

A modern, full-featured Todo application with user authentication, task CRUD, categories/tags, due dates, real-time sync, and responsive design. Built with React 18 (Vite), Express (TypeScript), and PostgreSQL (Supabase).

## Features
- User registration, login, password reset
- Task CRUD: create, edit, complete, delete
- Categories/tags, due dates, filtering, search
- Drag-and-drop task reordering
- Real-time updates (Supabase Realtime)
- Export/import tasks (JSON/CSV)
- Responsive UI (desktop/mobile), dark mode
- Accessibility (WCAG 2.1 AA)

## Tech Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS
- **Backend**: Express 4.21, TypeScript, Supabase (PostgreSQL)
- **Auth/Realtime**: Supabase Auth & Realtime

## Prerequisites
- Node.js 20+
- Supabase project (see `.env.example`)

## Installation

```bash
# 1. Clone the repo
$ git clone <repo-url>
$ cd todo-web-app

# 2. Install dependencies
$ npm install

# 3. Configure environment
$ cp .env.example .env
# Fill in Supabase keys

# 4. Start dev servers
$ npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

## Scripts
- `npm run dev` – Start frontend (Vite) and backend (nodemon) concurrently
- `npm run build` – Build frontend and backend
- `npm run start` – Start backend (production)
- `npm run test` – Run tests

## Configuration
See `.env.example` for required environment variables (Supabase URL, anon key, service key).

## API
See `docs/api.md` for full API documentation.

## License
MIT
