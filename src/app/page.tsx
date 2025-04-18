"use client";

import IconsComponent from "@/components/icons-component";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container max-w-5xl mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <h1 className="text-3xl md:text-5xl font-bold flex items-center mb-3">
            Hello
            <motion.div
              animate={{
                rotate: [0, -20, 0, 20, 0],
              }}
              transition={{
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-none select-none"
            >
              👋
            </motion.div>
            .
          </h1>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-semibold max-w-lg mb-4">
            A nevem{" "}
            <span className="text-primary font-mono">Csordás János</span>.
            Szoftverfejlesztőnek tanulok, emellett saját projektekkel
            foglalkozom.
          </p>
          <Link href="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-background py-2 px-4 rounded-md font-bold font-mono cursor-none hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              Kapcsolatfelvétel
            </motion.button>
          </Link>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://github.com/janoscsordas"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/j%C3%A1nos-csord%C3%A1s-17b6a2355/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:janoscsordas@protonmail.com" className="cursor-none">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-md">
            <img
              loading="lazy"
              src="/hero-image.svg"
              alt="Kódolás"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-32">Amit csinálok</h2>
        <div className="max-w-5xl mx-auto flex flex-col-reverse items-center md:flex-row md:items-start gap-10 justify-between">
          <div className="max-w-sm">
            <img src="/dev-image.svg" alt="Fejlesztés" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl mb-4 text-center">Full Stack Fejlesztés</h3>
            <IconsComponent />
            <p className="text-muted-foreground text-center font-semibold mt-4">
              És még sok más.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
