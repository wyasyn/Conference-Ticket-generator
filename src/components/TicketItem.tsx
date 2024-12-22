import { Images } from "@/constants/images";
import { useTicket } from "@/hooks/ticket";

export default function TicketItem() {
  const { ticket, githubUsername } = useTicket();

  if (!ticket) return null;
  return (
    <div>
      <article className="bg-ticket bg-center bg-contain bg-no-repeat rounded-lg shadow-md flex gap-3 p-4 w-full max-w-md">
        <div className=" pr-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-start gap-2">
              <img src="/logo-mark.svg" alt="logo mark" className="w-8 h-8" />{" "}
              Coding Conf
            </h2>
            <small className="ml-10">
              Dec 31, {new Date().getFullYear()} / Kampala, UG
            </small>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={ticket.avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <p className="font-medium tracking-wide capitalize">
                {ticket.fullName}
              </p>
              <p className="flex gap-2 items-center text-muted text-sm">
                <span>
                  <img src={Images.GithubIcon} alt="github icon" />
                </span>{" "}
                {githubUsername}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 text-muted/75 ">
          <p className="writing-mode-vertical-rl text-center">
            #{ticket.ticketNumber}
          </p>
        </div>
      </article>
    </div>
  );
}
