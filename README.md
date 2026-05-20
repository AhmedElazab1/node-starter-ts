# Node Starter TypeScript

This is a boilerplate template for a Node.js API using TypeScript, Express, and Prisma.

## Features

- **Node.js & Express**: Web framework for building the API.
- **TypeScript**: For type safety and better developer experience.
- **Prisma**: ORM for database interactions (PostgreSQL support out of the box).
- **Pino**: High-performance logging.
- **Winston**: Production logger (fallback to console).
- **Compression**: Compresses API responses.
- **Helmet**: Secures Express apps by setting various HTTP headers.
- **Morgan**: HTTP request logger middleware.
- **Dotenv**: Environment variable management.
- **CORS**: Cross-Origin Resource Sharing.
- **Cookie-Parser**: Parse cookies attached to the client request.
- **Rate Limit**: Limit the rate of API requests.
- **Swagger**: API documentation.

## Getting Started

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **PostgreSQL**: (Optional, for local development)

### Installation

1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd node-starter-ts
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Copy the environment variable template:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file and fill in your configuration values, especially:
   - `NODE_ENV`: `development` or `production`
   - `PORT`: The port for the server (default: 8000)
   - `MONGODB_URI`: MongoDB connection string (if using MongoDB)
   - `DATABASE_URL`: PostgreSQL connection string (if using PostgreSQL)

### Running the Server

- **Development mode**: Automatically restarts on file changes.
  ```bash
  npm run dev
  ```
- **Production mode**:
  ```bash
  npm run build
  npm start
  ```

### Build

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

## Project Structure

```
src/
├── common/             # Common files
  ├── constants/          # Constants
  ├── errors/             # Errors
  ├── interfaces/         # Interfaces
  ├── middlewares/        # Middlewares
  ├── utils/              # Utilities
├── config/             # Environment configuration
├── jobs/               # Jobs
├── routes/             # API routes
├── modules/            # Modules
    ├── models/         # Database models (Prisma schemas)
    ├── services/       # Business logic
    ├── controllers/    # Request handlers (controller)
    └── routes/         # API routes
└── app.ts              # Express application setup
└──server.ts            # Server setup

prisma/                 # Prisma configuration and generated client
.env                    # Environment variables
package.json            # Project configuration and scripts
```

## Prisma Usage

### Initialize Prisma

If you haven't already, initialize Prisma:

```bash
npx prisma init
```

### Database Models

Define your database models in `prisma/schema.prisma`.

### Migration

Apply database schema changes:

```bash
npx prisma migrate dev --name <migration-name>
```

### Generate Client

Generate the Prisma Client:

```bash
npx prisma generate
```

### Database UI

View your database in the Prisma Studio:

```bash
npx prisma studio
```

## API Documentation

API documentation is available at `http://localhost:8000/api/docs` (or your configured port) after starting the server.
