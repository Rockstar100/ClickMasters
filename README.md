# ClickMasters

A cameraman booking platform — customers book photographers for events, cameramen apply and manage bookings, and admins approve applications and manage accounts.

**Live app:** https://click-master.onrender.com (backend API)

## Overview

ClickMasters connects customers with cameramen for event bookings. Customers register and book a cameraman; cameramen apply to join the platform and manage their booking status; admins review and approve/reject cameraman applications and manage user accounts.

## Features

- User registration/login with JWT auth
- Cameraman application flow, with admin approval/rejection
- Booking flow between customers and cameramen
- Admin dashboard: list users/cameramen, approve/reject applications, delete accounts (server-enforced admin role check)

## Screenshots

| Login |
|---|
| ![Login page](docs/images/home.png) |

## Technology Stack

**Frontend:** Next.js (pages router), React, Redux, Tailwind CSS, Ant Design
**Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs

## Local Installation

Requires Node.js 18+ and a MongoDB instance.

```bash
git clone https://github.com/Rockstar100/ClickMasters.git
cd ClickMasters
```

### Backend

```bash
cd Backend
npm install
cp .env.example .env   # fill in MONGO_URL and JWT_SECRET
npm start
```

### Frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Note the frontend currently calls the live production API (`click-master.onrender.com`) directly via hardcoded URLs rather than a local backend — see [Known Limitations](#known-limitations).

### Environment variables

**Backend/.env**

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the API listens on | `8080` |
| `NODE_MODE` | Environment name | `development` |
| `MONGO_URL` | MongoDB connection string | — (required) |
| `JWT_SECRET` | Secret used to sign auth tokens | — (required) |

## Available Commands

**Frontend**

| Command | Description |
|---|---|
| `npm run dev` | Run the Next.js app in development mode |
| `npm run build` | Build for production |
| `npm start` | Run the production build |

**Backend** (`/Backend`)

| Command | Description |
|---|---|
| `npm start` | Run the API with nodemon |

## API Reference

Routes marked "user" require `Authorization: Bearer <token>`. Routes marked "admin" additionally require the token to belong to an admin account.

| Method | Route | Auth | Description |
|---|---|---|---|
| `POST` | `/api/v1/users/login` | — | Log in |
| `POST` | `/api/v1/users/register` | — | Register |
| `PUT` | `/api/v1/users/update` | user | Update your own profile |
| `POST` | `/api/v1/users/apply-cameraman` | — | Apply to become a cameraman |
| `GET` | `/api/v1/users/getAllCameraman` | user | List cameramen |
| `POST` | `/api/v1/users/bookCameraman` | user | Book a cameraman |
| `GET` | `/api/v1/admin/getAllUsers` | admin | List all users |
| `GET` | `/api/v1/admin/getAllCameraman` | admin | List all cameraman accounts |
| `POST` | `/api/v1/admin/changeAccountStatus` | admin | Approve/reject a cameraman application |
| `DELETE` | `/api/v1/admin/deleteUser` | admin | Delete a user |
| `DELETE` | `/api/v1/admin/deleteCameraman` | admin | Delete a cameraman |

## Deployment

The backend is deployed as a Node web service on [Render](https://render.com). The frontend can be deployed to Vercel or Netlify — not GitHub Pages, since it depends on a persistent backend + database, not just static hosting.

## Known Limitations

- The frontend calls the live production API via hardcoded URLs (`https://click-master.onrender.com/...`) rather than an environment variable, so pointing it at a local or staging backend requires a code change.
- CORS is currently open to all origins (`origin: '*'`) on the backend.
- Several stray asset files (unused images, a partial browser download) are still present in `src/pages/` from earlier development — not functionally broken, just untidy.

## Future Improvements

- Move the frontend's API base URL to an environment variable.
- Restrict CORS to known frontend origins.
- Clean up unused assets in `src/pages/`.

## License

MIT — see [LICENSE](LICENSE).

## Author

**Parveen Jaiswal**
GitHub: [@Rockstar100](https://github.com/Rockstar100)
