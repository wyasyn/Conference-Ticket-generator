import { useTicket } from "@/hooks/ticket";

export default function Hero() {
  const { ticket } = useTicket();
  if (ticket) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-6 mb-3 p-2 max-w-prose">
        <p className="text-4xl font-bold ">
          Congrats,{" "}
          <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            {ticket.fullName}
          </span>
          ! Your ticket is ready.{" "}
        </p>
        <p className="text-muted mt-3 text-balance">
          We've emailed your ticket to{" "}
          <span className="text-primary">{ticket.email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-6 mb-3 p-2 max-w-prose">
        <p className="text-4xl font-bold ">
          Your Journey to Coding Conf {new Date().getFullYear()} starts here!
        </p>
        <p className="text-muted mt-3">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    );
  }
}
