import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export function registerRoutes(app: Express): Server {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(messageData);
      
      // Send email notification
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "practicalcopy2023@gmail.com",
          pass: process.env.practical2023
        }
      });

      await transporter.sendMail({
        from: "practicalcopy2023@gmail.com",
        to: "practicalcopy2023@gmail.com",
        subject: "New Contact Form Submission",
        text: `
          Name: ${messageData.name}
          Email: ${messageData.email}
          Message: ${messageData.message}
        `
      });

      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
