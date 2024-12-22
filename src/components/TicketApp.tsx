import { useTicket } from "@/hooks/ticket";
import { schema } from "@/types/ticket";
import TicketItem from "./TicketItem";
import InputItem from "./InputItem";
import AvatarUpload from "./AvatarUpload";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Hero from "./Hero";
import BgItems from "./bg-items";

export const TicketForm: React.FC = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    githubUsername,
    setGithubUsername,
    avatar,
    ticket,
    setTicket,
    errors,
    setErrors,
    validateInputs,
  } = useTicket();

  const handleGenerateTicket = async () => {
    if (!validateInputs()) {
      return;
    }

    if (!avatar) {
      setErrors((prev) => ({
        ...prev,
        avatar: "Please upload an avatar",
      }));
      return;
    } else if (avatar.size >= 500 * 1024) {
      setErrors((prev) => ({
        ...prev,
        avatar: "Avatar must be less than 500KB",
      }));
      return;
    }

    const formData = { fullName, email, githubUsername, avatar };
    const validation = schema.safeParse(formData);

    if (!validation.success) {
      const schemaErrors = validation.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {} as { [key: string]: string });

      setErrors((prev) => ({
        ...prev,
        ...schemaErrors,
      }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const ticketNumber = (
        Math.floor(Math.random() * 90000) + 10000
      ).toString();
      const newTicket = {
        fullName,
        email,
        avatar: reader.result as string,
        ticketNumber,
      };

      setTicket(newTicket);
      localStorage.setItem("ticket", JSON.stringify(newTicket));
      setErrors({
        fullName: "",
        email: "",
        githubUsername: "",
        avatar: "",
      }); // Clear all errors
    };

    reader.readAsDataURL(avatar);
  };

  return (
    <main className="relative overflow-hidden bg-mobile md:bg-tablet lg:bg-desktop bg-no-repeat bg-cover bg-top min-h-screen flex flex-col items-center">
      <BgItems />
      <Logo />
      <Hero />
      <div className=" flex flex-col items-center justify-center ">
        <div className=" p-6 rounded shadow-md w-full max-w-md">
          <AnimatePresence>
            {ticket ? (
              <motion.div
                key="ticket"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <TicketItem />
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <AvatarUpload />
                <InputItem
                  id="full-name"
                  label="Full Name"
                  value={fullName}
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  error={errors.fullName}
                />
                <InputItem
                  id="email"
                  label="Email Address"
                  value={email}
                  type="email"
                  placeholder="example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />
                <InputItem
                  id="username"
                  label="GitHub Username"
                  value={githubUsername}
                  type="text"
                  placeholder="@yourusername"
                  onChange={(e) => setGithubUsername(e.target.value)}
                  error={errors.githubUsername}
                />

                <button
                  type="button"
                  onClick={handleGenerateTicket}
                  className="w-full bg-primary text-background font-bold rounded-lg py-2 hover:opacity-75 transition-opacity duration-300 ease-in-out"
                >
                  Generate My Ticket
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};
