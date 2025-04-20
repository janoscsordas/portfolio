"use client"

import { Link, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
    {
        title: "Planitapp",
        description: "A Planitapp egy főként csapatoknak szánt feladatkezelő alkalmazás egyéb funkciókkal, amelyekkel a csapatok könnyedén tudnak együtt dolgozni.",
        link: "https://planitapp.hu",
        github: "https://github.com/janoscsordas/planit-vizsgaremek-fullstack"
    },
    {
        title: "Lumina AI",
        description: "A Lumina AI egy chatbot alkalmazás, amelyben különböző modellekkel lehet kommunikálni.",
        link: "https://lumina-inc-ai.vercel.app",
        github: "https://github.com/janoscsordas/lumina-ai"
    }
]

export default function Projects() {
    return (
        <main className="container max-w-5xl mx-auto px-4 py-32 min-h-screen">
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col-reverse items-center md:flex-row justify-between gap-10"
            >
                <div className="max-w-sm">
                    <img loading="lazy" src="/project-image.svg" alt="Projekt Kép" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-8">Projektek</h1>
                    <p className="text-muted-foreground text-center leading-relaxed font-semibold text-lg">
                        A projektek készítése során rengeteget segített a TypeScript, imádom, hogy biztonságosabbá és átláthatóbbá teszi a fejlesztést. Használom többek között React, Next.js, Bun, és Hono mellett – csak hogy néhányat említsek. Illetve a Laravel-t is megemlítem, amit Inertia-val együtt használok.

                        Frontendnél pedig a Tailwind CSS a kedvencem – gyors, kényelmes, és nem kell külön CSS fájlokkal bajlódni. Egyszerűen hozza, amit kell.
                    </p>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto px-4 pt-32 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {projects.map((project) => (
                    <div 
                        className="p-4 bg-background drop-shadow-lg drop-shadow-black/20 transition-all duration-300 rounded-lg hover:drop-shadow-lg hover:drop-shadow-black/40 flex flex-col justify-between" 
                        key={project.title}
                    >
                        <div className="">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary underline cursor-none flex items-center gap-2 p-2 hover:bg-primary/10 rounded-lg w-max transition-all duration-300" aria-label="Link">
                                <Link className="w-5 h-5" />
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary underline cursor-none flex items-center gap-2 p-2 hover:bg-primary/10 rounded-lg w-max transition-all duration-300" aria-label="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}

            </motion.section>
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
            >
                <a href="https://github.com/janoscsordas" target="_blank" rel="noopener noreferrer" className="cursor-none" aria-label="GitHub Profil">
                    <button className="text-primary mx-auto font-semibold cursor-none flex items-center gap-2 p-2 hover:bg-primary/10 rounded-lg w-max transition-all duration-300">
                        GitHub Profil
                    </button>
                </a>
            </motion.div>
        </main>
    )
}