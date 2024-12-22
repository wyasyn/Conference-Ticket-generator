import { Ticket, TicketErrorProps } from "@/types/ticket";
import React, { createContext } from "react";

export interface TicketContextType {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  githubUsername: string;
  setGithubUsername: React.Dispatch<React.SetStateAction<string>>;
  avatar: File | null;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
  ticket: Ticket | null;
  setTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
  errors: TicketErrorProps;
  setErrors: React.Dispatch<React.SetStateAction<TicketErrorProps>>;
  validateInputs: () => boolean;
}

export const TicketContext = createContext<TicketContextType | undefined>(
  undefined
);
