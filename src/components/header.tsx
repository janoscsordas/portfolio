"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 font-mono bg-background/75 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold cursor-none">
          Csordás János
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <Link href="/" className="cursor-none">
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-md px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                Kezdőlap
              </motion.li>
            </Link>
            <Link href="/about" className="cursor-none">
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-md px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                Rólam
              </motion.li>
            </Link>
            <Link href="/projects" className="cursor-none">
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-md px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                Projektek
              </motion.li>
            </Link>
            <Link href="/contact" className="cursor-none">
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-md px-2 py-1 hover:bg-primary hover:text-background transition-all duration-300"
              >
                Kapcsolat
              </motion.li>
            </Link>
            <ModeToggle />
          </ul>
        </nav>
        <div className="md:hidden flex items-center gap-4 relative">
          <ModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 cursor-none bg-primary text-background hover:bg-primary/80 transition-all duration-300"
          >
            {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="fixed w-full h-max top-full left-0 bg-background/75 backdrop-blur-sm border-b border-border py-3"
            >
              <ul className="flex flex-col gap-1">
                <Link href="/" className="py-2 px-4 hover:bg-primary hover:text-background transition-all duration-300 cursor-none">Kezdőlap</Link>
                <Link href="/about" className="py-2 px-4 hover:bg-primary hover:text-background transition-all duration-300 cursor-none">Rólam</Link>
                <Link href="/projects" className="py-2 px-4 hover:bg-primary hover:text-background transition-all duration-300 cursor-none">Projektek</Link>
                <Link href="/contact" className="py-2 px-4 hover:bg-primary hover:text-background transition-all duration-300 cursor-none">Kapcsolat</Link>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
