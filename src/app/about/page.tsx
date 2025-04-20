"use client"

import { motion } from "framer-motion"

export default function About() {

    return (
        <main className="container max-w-5xl mx-auto px-4 py-32 min-h-screen">
            <motion.section 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col-reverse items-center md:flex-row justify-between gap-10"
            >
                <div className="max-w-sm">
                    <img loading="lazy" src="/profile-picture.jpg" aria-label="Én" alt="Én" className="rounded-full w-full h-full object-cover" />
                </div>
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-16">Rólam</h1>
                    <p className="text-muted-foreground text-justify font-semibold text-lg">
                        22 éves vagyok, jelenleg Szoftverfejlesztő és Tesztelő szakmát tanulok. Ez a második szakképesítésem; az elsőt Rendszer- és Alkalmazásüzemeltető Technikusként szereztem. Szeretek új dolgokat felfedezni és saját ötleteimet megvalósítani. Emellett szeretek írni, és szívesen olvasok cikkeket különböző témákban.
                    </p>
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">💡 Érdeklődési körök</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>Webfejlesztés</li>
                        <li>Linux és körülötte lévő technológiák</li>
                        <li>Későbbiekben blog írása</li>
                    </ul>
                    </div>

                    <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">⚙️ Kedvenc technológiák</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>Next.js & React</li>
                        <li>Tailwind CSS</li>
                        <li>TypeScript</li>
                    </ul>
                    </div>

                    <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">🚀 Jövőkép</h3>
                    <p className="text-muted-foreground">
                        Szeretnék saját projekteket készíteni és idővel egy olyan fejlesztő lenni, 
                        aki másokat is inspirál.
                    </p>
                    </div>
                </div>
            </motion.section>
        </main>
    )
}
