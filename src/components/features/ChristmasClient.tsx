'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Coffee, Gift, Heart } from 'lucide-react';

export default function ChristmasClient() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-4xl">
            <div className="space-y-16">
                {/* Hero Section */}
                <div className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-sage/10 text-accent-sage rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        <Gift className="w-4 h-4" />
                        Seasonal Gift
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-foreground">
                        Christmas Treats <span className="text-accent-sage italic">E-Book</span>
                    </h1>
                    <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
                        Hope these make the Holidays more Enjoyable! A collection of family favorites, recreated to be paleo and vegan friendly.
                    </p>
                </div>

                <div className="aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-muted shadow-2xl shadow-foreground/5 border-8 border-white relative">
                    <Image
                        src="https://res.cloudinary.com/rockmonkey/image/upload/f_auto,q_auto/v1605233554/Christmas_treat_Ebook_tnwuce.jpg"
                        alt="Merry Christmas letters on fruit"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 896px"
                    />
                </div>

                {/* Content Section */}
                <div className="prose prose-neutral prose-lg max-w-none font-light leading-relaxed space-y-8">
                    <p>
                        One of the big lifestyle changes I made was an overhaul of my food. The first few years were really hard and I spent many holidays and family gatherings feeling left out as I could not partake in most of the food being served.
                    </p>

                    <blockquote className="border-l-4 border-accent-sage pl-6 italic text-foreground/70 bg-muted/50 py-8 pr-8 rounded-r-3xl">
                        "My heart behind my Christmas Treat E-Book is to provide recipes that not only taste good but help us continue to feel good."
                    </blockquote>

                    <p>
                        These are family favorite recipes I recreated without the refined sugar, gluten, grains, eggs, or dairy and are paleo and vegan friendly. I hope that these recipes inspire you to enjoy the holidays without feeling restricted and left out.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <div className="bg-white p-8 rounded-[2rem] border border-border shadow-xl shadow-foreground/5 flex flex-col items-center text-center space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-accent-sage/10 flex items-center justify-center">
                                <Download className="w-8 h-8 text-accent-sage" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-serif">Instant Access</h3>
                                <p className="text-sm text-foreground/60 font-light px-4">Download the full PDF e-book for free and start baking tonight.</p>
                            </div>
                            <a
                                href="https://drive.google.com/file/d/17XHcWJv9nkdWN0XWRLtqYV7piTDe8Q-V/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-foreground text-background py-4 rounded-xl font-bold tracking-widest uppercase hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                            >
                                Download E-Book
                            </a>
                        </div>

                        <div className="bg-secondary/20 p-8 rounded-[2rem] border border-border shadow-xl shadow-foreground/5 flex flex-col items-center text-center space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-accent-warm/20 flex items-center justify-center">
                                <Coffee className="w-8 h-8 text-foreground/60" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-serif">Support H3</h3>
                                <p className="text-sm text-foreground/60 font-light px-4">If you find value in these recipes, consider donating a coffee.</p>
                            </div>
                            <a
                                href="http://buymeacoffee.com/h3withlaura"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white border border-border py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-muted transition-colors flex items-center justify-center gap-2"
                            >
                                Donate a Coffee
                            </a>
                        </div>
                    </div>

                    <div className="text-center pt-12">
                        <p className="text-sm font-medium text-foreground/40 italic flex items-center justify-center gap-2">
                            <Heart className="w-4 h-4 text-accent-sage fill-accent-sage" />
                            Merry Christmas and Happy Holidays from my kitchen to yours!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
