import { TicketContext } from "@/context/TicketContext";
import { Ticket, TicketErrorProps } from "@/types/ticket";
import { useEffect, useState, ReactNode } from "react";

type TicketProviderProps = {
  children: ReactNode;
};

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [githubUsername, setGithubUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [errors, setErrors] = useState<TicketErrorProps>({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: "",
  });

  useEffect(() => {
    const savedTicket = localStorage.getItem("ticket");
    if (savedTicket) {
      try {
        setTicket(JSON.parse(savedTicket));
      } catch (error) {
        console.error("Failed to parse ticket from localStorage:", error);
      }
    }
  }, []);

  const validateInputs = (): boolean => {
    const newErrors: TicketErrorProps = {
      fullName: fullName.trim() ? "" : "Full name is required",
      email: email.match(/^\S+@\S+\.\S+$/) ? "" : "Invalid email address",
      githubUsername: githubUsername.trim()
        ? ""
        : "GitHub username is required",
      avatar:
        avatar && avatar.size < 500 * 1024
          ? ""
          : "Avatar must be less than 500KB",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  return (
    <TicketContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        githubUsername,
        setGithubUsername,
        avatar,
        setAvatar,
        ticket,
        setTicket,
        errors,
        validateInputs,
        setErrors,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
