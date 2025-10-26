import { motion } from "framer-motion";
import { useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [copied, setCopied] = useState(""); // '' | 'email' | 'phone'
  const email = "belafisabri05@gmail.com";
  const phone = "+33 6 13 15 91 17";

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(""), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const telHref = phone.replace(/[^+\d]/g, "");

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto items-center"
          >
            <p className="text-white/70 mb-6">
              Pour toute demande, recrutement ou collaboration, contacte‑moi par
              e-mail ou téléphone. Je réponds rapidement.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="text-accent bg-black/60 px-6 py-4 rounded-md font-medium text-lg shadow-md hover:opacity-90"
              >
                {email}
              </a>

              <button
                onClick={() => handleCopy(email, "email")}
                className="px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 text-sm"
                aria-label="Copier l'email"
              >
                {copied === "email" ? "Copié ✅" : "Copier l'email"}
              </button>
              <br />
              <a
                href={`tel:${telHref}`}
                className="text-accent bg-black/60 px-6 py-4 rounded-md font-medium text-lg shadow-md hover:opacity-90"
              >
                {phone}
              </a>

              <button
                onClick={() => handleCopy(phone, "phone")}
                className="px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 text-sm"
                aria-label="Copier le numéro"
              >
                {copied === "phone" ? "Copié ✅" : "Copier le numéro"}
              </button>
            </div>

            <p className="text-xs text-white/50 mt-6">
              Ouvert aux propositions — disponible pour mobilité et postes opérationnels.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;