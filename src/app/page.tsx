"use client";

import IconsComponent from "@/components/icons-component";
import { FacebookIcon, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { motion } from "motion/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-background py-2 px-4 rounded-md font-bold font-mono cursor-none hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Kapcsolatfelvétel
              </motion.button>
            </DialogTrigger>
            <DialogContent className="bg-background cursor-auto">
              <DialogHeader>
                <DialogTitle>Kapcsolatfelvétel</DialogTitle>
                <DialogDescription>
                  Itt vagyok elérhető
                </DialogDescription>
                <div className="space-y-4 mt-5">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:janoscsordas@protonmail.com"
                        className="text-sm text-muted-foreground hover:underline hover:text-primary"
                        aria-label="Email"
                      >
                        janoscsordas@protonmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Gmail</p>
                      <a
                        href="mailto:janoscsordas072@gmail.com"
                        className="text-sm text-muted-foreground hover:underline hover:text-primary"
                        aria-label="Gmail"
                      >
                        janoscsordas072@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a
                        href="tel:+36205038807"
                        className="text-sm text-muted-foreground hover:underline hover:text-primary"
                        aria-label="Telefon"
                      >
                        +36 20 503 8807
                      </a>
                    </div>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://github.com/janoscsordas"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/j%C3%A1nos-csord%C3%A1s-17b6a2355/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/janos.csordas.129/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none hover:text-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
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
              aria-label="Kódolás"
            />
          </div>
        </motion.div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-32">Amit csinálok</h2>
        <div className="max-w-5xl mx-auto flex flex-col-reverse items-center md:flex-row md:items-start gap-10 justify-between">
          <div className="max-w-sm">
            <img
              src="/dev-image.svg"
              alt="Fejlesztés"
              className="w-full h-full object-cover"
              aria-label="Fejlesztés"
            />
          </div>
          <div>
            <h3 className="text-3xl mb-4 text-center">Full Stack Fejlesztés</h3>
            <IconsComponent />
            <p className="text-muted-foreground text-center font-semibold mt-4">
              És még sok más.
            </p>
            <div className="text-muted-foreground mt-4 space-y-2">
              <p>💥 Web alkalmazások fejlesztése, a fenti technológiákkal.</p>
              <p>
                💥 Mobil alkalmazások fejlesztése, React Native-al és Expo-val.
              </p>
              <p>
                💥 Backend fejlesztése Node.js-el (Express, Hono), illetve
                Laravel-el.
              </p>
              <p>💥 Integrálás 3. féltől származó szolgáltatásokkal.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
