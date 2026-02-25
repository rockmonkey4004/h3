import Link from 'next/link';
import { Menu } from 'lucide-react';
import Search from './Search';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/60 backdrop-blur-xl transition-all">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
                    <span className="text-2xl font-bold tracking-tight text-foreground font-serif">H3 <span className="text-foreground/40 font-light italic">with Laura</span></span>
                </Link>
                <div className="flex items-center gap-8 md:gap-12">
                    <nav className="hidden md:flex gap-10">
                        <Link href="/blog" className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80">Blog</Link>
                        <Link href="/christmas" className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80">Christmas Gift</Link>
                        <Link href="/recommended-items" className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80">Pantry</Link>
                        <Link href="/about" className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80">About</Link>
                        <Link href="/contact" className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-5">
                        <Search />
                        <button
                            className="p-2.5 md:hidden hover:bg-muted/50 rounded-full transition-colors"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="w-5 h-5 text-foreground/60" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
