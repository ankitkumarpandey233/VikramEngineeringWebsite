import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      
      const inquiry = await storage.createInquiry(validatedData);
      
      res.status(201).json({
        message: "Inquiry submitted successfully",
        inquiry
      });
    } catch (error) {
      console.error("Error creating inquiry:", error);
      res.status(400).json({
        message: "Failed to submit inquiry",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        message: "Failed to fetch inquiries",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
