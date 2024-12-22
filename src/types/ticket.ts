import { z } from "zod";

export interface Ticket {
  fullName: string;
  email: string;
  avatar: string; // Base64 representation of the image
  ticketNumber: string;
}

export const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  githubUsername: z.string().min(1, "GitHub username is required"),
  avatar: z
    .instanceof(File)
    .refine(
      (file) => file.size < 500 * 1024,
      "File too large. please upload an image less than 500KB"
    ),
});

export interface TicketErrorProps {
  fullName: string;
  email: string;
  githubUsername: string;
  avatar: string;
}
