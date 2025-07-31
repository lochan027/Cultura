import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { handleChatRequest } from "./api/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint for AI recommendations
  app.post('/api/chat', handleChatRequest);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
