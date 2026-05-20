# Portfolio_Books

Project: A small full-stack books portfolio and storefront built with a Vite + React frontend and an Express + MySQL backend. The frontend uses Appwrite for authentication in parts of the UI and provides a small catalogue with downloadable PDF samples.

## Features
- Responsive React UI (Vite)
- Book catalogue with sample downloads
- Appwrite signup / OAuth (Google) integration (client-side)
- Backend Express API for user auth (MySQL) and OpenLibrary-based book search

## Tech stack
- Frontend: React, Vite, Tailwind CSS, Framer Motion, Appwrite client
- Backend: Node.js, Express, MySQL (mysql2), JWT-based auth
- External APIs: OpenLibrary (book search)

## Repo structure
- [backend](backend): Express API and routes (app.js, routes/auth.js, routes/bookApi.js)
- [book](book): Vite React app (src, public, assets)

See key files:
- [backend/app.js](backend/app.js)
- [backend/routes/auth.js](backend/routes/auth.js)
- [backend/routes/bookApi.js](backend/routes/bookApi.js)
- [book/src/App.jsx](book/src/App.jsx)
- [book/src/components/appwrite.js](book/src/components/appwrite.js)

## Environment / Configuration

Backend (create a `.env` file in the `backend/` folder):

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```

Frontend Appwrite
- The frontend currently sets Appwrite endpoint and project id in `book/src/components/appwrite.js` and `book/src/components/Signup.jsx` (project id: `67c179e700030085cf05`). For production, replace hard-coded values with environment variables or App configuration.

Notes about login endpoint
- `backend` exposes auth routes under `/auth` (e.g. `POST /auth/signup`, `POST /auth/login`, `POST /auth/logout`) and book search at `/bookApi/search?q=...`.
- Some frontend components reference other URLs (for example `book/src/components/Login.jsx` uses `http://localhost:3000/api/login`). Make sure to update the frontend API calls to point to the backend (default `http://localhost:5000/auth/login`) if you intend to use the included Express auth.

## Run locally

1. Backend

```
cd backend
npm install
# start server (either run directly or add a start script)
node app.js
```

The backend listens on port `5000` by default.

2. Frontend

```
cd book
npm install
npm run dev
```

The Vite dev server runs on `http://localhost:5173` by default.

## API Endpoints (summary)
- POST `/auth/signup` — create user (expects `{ name, email, password }`)
- POST `/auth/login` — authenticate (expects `{ email, password }`) and sets JWT cookie
- POST `/auth/logout` — clears auth cookie
- GET `/bookApi/search?q=...` — search books via OpenLibrary

## Notes & Recommendations
- Add a `start` script to `backend/package.json` (e.g. `"start": "node app.js"`) to simplify launching the server.
- Consider centralizing Appwrite project id/endpoint into environment variables instead of hardcoding them in `book/src/components/appwrite.js` and `Signup.jsx`.
- Ensure the frontend API calls match the backend endpoints (adjust `Login.jsx` if needed).

## Contributing
- Fork, create a branch, make changes, and open a pull request.

## License
This repository does not include a license file. Add a `LICENSE` if you want to specify terms.

---
If you want, I can:
- update `backend/package.json` to add a `start` script,
- change frontend API URLs to match the backend,
- or convert hard-coded Appwrite values to environment variables. Which should I do next?

