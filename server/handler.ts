import express, { Request, Response, NextFunction } from 'express';
import { registerRoutes } from './routes.js';
import { serveStatic } from './vite.js';

// Create Express app
const app = express();

// Middleware setup
app.use(express.json());

// Register API routes
registerRoutes(app);

// Serve static files
serveStatic(app);

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message,
  });
});

// Export the Express request handler
export const handler = app;