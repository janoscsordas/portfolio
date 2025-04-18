import Link from "next/link";

export default function NotFound() {

    return (
        <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center mb-16">404 - Nem található</h1>
            <p className="text-muted-foreground text-center font-semibold">A keresett oldal nem található.</p>
            <Link 
                href="/" 
                className="text-center font-semibold cursor-none py-2 px-4 bg-primary text-background rounded-md mt-3 hover:bg-primary/80 transition-all duration-300"
            >
                Vissza a főoldalra
            </Link>
        </main>
    )
}