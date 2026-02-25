'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4 col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold font-serif">H3 with Laura</h3>
                        <p className="text-sm text-foreground/70 max-w-xs">
                            A journey of the peaks and valleys of health, healing, and hope.
                            Sharing favorite paleo, gluten-free, and wholesome recipes.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Links</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/blog" className="text-sm hover:text-accent-blue-dark transition-colors">Blog</Link>
                            <Link href="/christmas" className="text-sm hover:text-accent-blue-dark transition-colors">Christmas Gift</Link>
                            <Link href="/recommended-items" className="text-sm hover:text-accent-blue-dark transition-colors">Pantry</Link>
                            <Link href="/about" className="text-sm hover:text-accent-blue-dark transition-colors">About Me</Link>
                            <Link href="/contact" className="text-sm hover:text-accent-blue-dark transition-colors">Contact</Link>
                        </nav>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Follow</h4>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com/h3withlaura" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://instagram.com/lauramsanders" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="mailto:laura@h3withlaura.com" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="space-y-4 pt-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">Newsletter</h4>
                            <form
                                action="https://feedburner.google.com/fb/a/mailverify"
                                method="post"
                                target="popupwindow"
                                onSubmit={() => { window.open('https://feedburner.google.com/fb/a/mailverify?uri=h3withlaura', 'popupwindow', 'scrollbars=yes,width=550,height=520'); return true; }}
                                className="flex flex-col gap-2"
                            >
                                <input type="hidden" value="h3withlaura" name="uri" />
                                <input type="hidden" name="loc" value="en_US" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20 transition-all font-light"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-foreground text-background text-xs font-bold tracking-widest uppercase py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/50">
                        © {new Date().getFullYear()} Health, Healing, and Hope (H3). All rights reserved.
                    </p>
                    <p className="text-xs text-foreground/50 italic">
                        Neutrally curated for a peaceful experience.
                    </p>
                </div>
            </div>
        </footer>
    );
}
