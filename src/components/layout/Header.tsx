'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Search from './Search';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '/blog', label: 'Blog' },
        { href: '/christmas', label: 'Christmas Gift' },
        { href: '/recommended-items', label: 'Pantry' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/60 backdrop-blur-xl transition-all">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 group transition-opacity hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-2xl font-bold tracking-tight text-foreground font-serif">H3 <span className="text-foreground/40 font-light italic">with Laura</span></span>
                </Link>

                <div className="flex items-center gap-8 md:gap-12">
                    <nav className="hidden md:flex gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium tracking-wide transition-colors hover:text-accent-blue/80"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-5">
                        <Search />
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2.5 md:hidden hover:bg-muted/50 rounded-full transition-colors active:scale-90"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="w-5 h-5 text-foreground/60" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-background backdrop-blur-3xl transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full items-center justify-start p-8 pt-32 space-y-16">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-8 right-8 p-3 hover:bg-muted rounded-full transition-all active:scale-95"
                        aria-label="Close menu"
                    >
                        <X className="w-8 h-8 text-foreground/60" />
                    </button>

                    <Link
                        href="/"
                        className="text-3xl font-bold font-serif tracking-tight"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        H3 <span className="text-foreground/30 font-light italic">with Laura</span>
                    </Link>

                    <nav className="flex flex-col items-center gap-10">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-3xl font-bold font-serif transition-all duration-500 hover:text-accent-blue-dark ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="pt-16 flex flex-col items-center gap-6 text-center">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30 border-t border-border pt-8 w-32 mx-auto">Connect & Support</p>
                        <div className="flex gap-8">
                            <a href="http://buymeacoffee.com/h3withlaura" className="text-sm font-bold tracking-[0.1em] uppercase hover:text-accent-warm transition-colors">Coffee</a>
                            <a href="https://www.instagram.com/h3withlaura" className="text-sm font-bold tracking-[0.1em] uppercase hover:text-accent-blue transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
