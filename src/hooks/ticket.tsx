import { TicketContext } from "@/context/TicketContext";
import { useContext } from "react";

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return context;
};
