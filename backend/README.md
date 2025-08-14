# Educhain Student Dashboard Backend

This is the backend service for the Educhain Student Dashboard, providing RESTful APIs to interact with the Internet Computer (IC) canisters.

## Architecture Overview

The backend serves as a bridge between the frontend and the Internet Computer canisters, providing:
- RESTful API endpoints
- Authentication and authorization
- Data validation and error handling
- Caching and optimization
- Real-time updates via WebSocket (future enhancement)

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **IC Integration**: @dfinity/agent
- **Authentication**: JWT tokens
- **Validation**: Zod schemas
- **Logging**: Morgan + Winston
- **CORS**: Cross-origin resource sharing support

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── middleware/      # Express middleware
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic layer
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── dist/               # Compiled JavaScript
├── tests/              # Test files
└── docs/               # API documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Internet Computer SDK (dfx)
- Running IC local replica or mainnet access

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start the development server:
```bash
npm run dev
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3001 |
| `NODE_ENV` | Environment mode | development |
| `IC_HOST` | IC network host | http://127.0.0.1:8000 |
| `IC_CANISTER_ID_STUDENT_RECORDS` | Student records canister ID | ryjl3-tyaaa-aaaaa-aaaba-cai |
| `IC_CANISTER_ID_USER_MANAGEMENT` | User management canister ID | rrkah-fqaaa-aaaaa-aaaaq-cai |
| `IC_CANISTER_ID_NFT_CERTIFICATES` | NFT certificates canister ID | r7inp-6aaaa-aaaaa-aaabq-cai |
| `JWT_SECRET` | JWT signing secret | random string |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `GET /api/students/:id/analytics` - Get student analytics

### Academic Records
- `GET /api/academic/student/:studentId` - Get academic records for student
- `POST /api/academic` - Create academic record

### Attendance
- `GET /api/attendance/student/:studentId` - Get attendance records
- `GET /api/attendance/summary/:studentId` - Get attendance summary
- `POST /api/attendance` - Record attendance

### Transfer Requests
- `GET /api/transfers/student/:studentId` - Get transfer requests for student
- `GET /api/transfers/school/:schoolId` - Get transfer requests for school
- `POST /api/transfers` - Create transfer request
- `PUT /api/transfers/:id/status` - Update transfer status

### Analytics
- `GET /api/analytics/school/:schoolId` - Get school analytics
- `GET /api/analytics/student/:studentId` - Get student analytics
- `GET /api/analytics/dashboard` - Get dashboard summary

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests

### Building for Production

```bash
npm run build
npm start
```

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

### Local Development
1. Start IC local replica:
```bash
dfx start --background
dfx deploy
```

2. Start backend:
```bash
npm run dev
```

### Production Deployment
1. Build the project:
```bash
npm run build
```

2. Set production environment variables
3. Start the server:
```bash
npm start
```

## API Documentation

Once the server is running, API documentation is available at:
- Swagger UI: `http://localhost:3001/api-docs`
- OpenAPI JSON: `http://localhost:3001/api-docs.json`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is part of the Educhain platform and follows the same licensing terms.
