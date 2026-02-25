import Link from 'next/link';
import Image from 'next/image';
import { Heart, Sun, Leaf, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "My Story",
    description: "Learn about Laura's journey of health, healing, and hope, and the heart behind H3.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-4xl">
            <div className="space-y-16">
                {/* Hero Section */}
                <div className="space-y-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-foreground">
                        About <span className="text-accent-blue italic">Laura</span>
                    </h1>
                    <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
                        Just wanted to share a bit about my journey of health, healing, and hope.
                    </p>
                </div>

                {/* Image Section */}
                <div className="aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-muted shadow-2xl shadow-foreground/5 border-8 border-white relative">
                    <Image
                        src="https://res.cloudinary.com/rockmonkey/image/upload/dpr_auto,f_auto,fl_any_format.fast_scale.force_strip.immutable_cache.progressive.progressive:semi.progressive:steep,q_auto/v1587782942/spring-flower_rj4zsg.jpg"
                        alt="Laura holding fresh picked strawberries"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 896px"
                    />
                </div>

                {/* Content Section */}
                <div className="prose prose-neutral prose-lg max-w-none font-light leading-relaxed space-y-8">
                    <p className="text-2xl font-serif italic text-accent-blue">Hi! I am so thankful you stopped by.</p>

                    <p>
                        My name is Laura and I am the founder of Health, Healing, and Hope (H3). I am a lover of paleo treats, coffee, the beach and all things wellness.
                    </p>

                    <p>
                        A little background on me—I was born and raised in Alaska but now live in Music City (Nashville, Tennessee). I journeyed for the last 7 years to find a restoration of health, increased healing, and a renewed hope.
                    </p>

                    <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50 space-y-4">
                        <h3 className="text-2xl font-serif font-bold m-0">My Story</h3>
                        <p className="m-0">
                            When I was 20, I started to experience physical pain, exhaustion, memory issues, weight gain, and other unexplainable symptoms. After years of seeing doctor after doctor, I finally learned about hypothyroidism, adrenal fatigue, IBS and fibromyalgia.
                        </p>
                    </div>

                    <p>
                        The next day, I started a whole new way of eating by trying to avoid anything causing inflammation. My doctor called it a “Paleo lifestyle” with a focus on nutrient dense foods to heal my body.
                    </p>

                    <p>
                        Since then, I discovered a parasitic infection from my time spent overseas. Through all these years, I changed my entire lifestyle. I approached managing stress, sleep, food choice, and physical activity through a different lens. I experienced seasons of bedridden days, saying “no” to 90% of social invitations, and only being able to walk for exercise. Now, I feel like I can clean the house and run in the same day.
                    </p>

                    <blockquote className="border-l-4 border-accent-blue pl-6 italic text-foreground/70 bg-muted/50 py-6 pr-6 rounded-r-2xl">
                        "Learning to seek hope in the darkness brought me strength to keep fighting."
                    </blockquote>

                    <p>
                        Even though it has been 7 years, I am still learning about tailoring a personal approach to health. These changes did not take place overnight. It took years. Although I saw tremendous healing, especially this last year, I believe I will continue on the journey of healing for my physical body, my spirit and my soul.
                    </p>

                    <div className="text-center pt-12 space-y-6">
                        <p className="text-xl font-serif italic">
                            Let us take this journey together. Let us grow, learn, challenge and encourage one another on our journeys of health, healing and hope.
                        </p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:scale-105 transition-transform"
                        >
                            Exlpore the Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
