'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const images = [
    {
        url: "https://res.cloudinary.com/rockmonkey/image/upload/f_auto,q_auto/v1587132373/cinnamon-rolls_zy2vhh.jpg",
        alt: "Warm Cinnamon Rolls"
    },
    {
        url: "https://res.cloudinary.com/rockmonkey/image/upload/f_auto,q_auto/v1608324541/Blog/healthy_creamy_sausage_pasta_vhejht.jpg",
        alt: "Creamy Sausage Pasta"
    },
    {
        url: "https://res.cloudinary.com/rockmonkey/image/upload/f_auto,q_auto/v1607979123/Blog/Snickerdoodle_sjfi8k.jpg",
        alt: "Paleo Snickerdoodles"
    }
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // Change image every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Slide Backgrounds */}
            {images.map((image, index) => (
                <div
                    key={image.url}
                    className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                >
                    <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover brightness-[0.8]"
                        priority={index === 0}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Content Overlay */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6 max-w-3xl mx-auto bg-background/20 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground/90 font-serif leading-[1.1]">
                            Health, Healing, <br className="hidden md:block" /> and Hope
                        </h1>
                        <p className="text-lg md:text-2xl text-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
                            A journey through the peaks and valleys of wellness. Sharing wholesome recipes,
                            thoughtful tips, and a community of support.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                        <Link
                            href="/blog"
                            className="px-10 py-4 bg-foreground text-background font-bold tracking-widest uppercase rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 justify-center shadow-xl shadow-foreground/10 group"
                        >
                            Explore the Blog
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-10 py-4 bg-white/40 backdrop-blur-md border border-white/50 text-foreground font-bold tracking-widest uppercase rounded-full transition-all hover:bg-white/60 shadow-xl shadow-foreground/5"
                        >
                            My Story
                        </Link>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-12 bg-white' : 'w-3 bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
