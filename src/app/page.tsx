import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Health, Healing, and Hope",
  description: "A journey of health, healing, and hope. Sharing wholesome recipes, thoughtful tips, and a supportive community.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/rockmonkey/image/upload/c_scale,f_auto,fl_any_format,q_auto,w_1920/v1587132373/cinnamon-rolls_zy2vhh.jpg"
            alt="Cinnamon Rolls Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.85]"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto bg-background/30 backdrop-blur-sm p-8 rounded-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-serif">
              Health, Healing, <br className="hidden md:block" /> and Hope
            </h1>
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              A journey of the peaks and valleys of wellness. Sharing wholesome recipes,
              thoughtful tips, and a community of support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-foreground text-background font-medium rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 justify-center shadow-lg"
            >
              Explore the Blog <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-background/80 backdrop-blur-sm border border-border text-foreground font-medium rounded-full transition-all hover:bg-muted shadow-lg"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Link href="/tags/recipes" className="group space-y-6 text-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-foreground/5 bg-white transition-shadow group-hover:shadow-2xl relative">
                <Image
                  src="https://res.cloudinary.com/rockmonkey/image/upload/f_auto,q_auto/v1587782937/Blog/Burger-Up-Salad_w1gncd.jpg"
                  alt="Vibrant house salad representing health and nourishment"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-serif group-hover:text-accent-blue transition-colors">Health</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light px-4">
                  Nourishing the body with clean, paleo, and allergen-friendly ingredients.
                </p>
              </div>
            </Link>
            <Link href="/tags/topic-tuesday" className="group space-y-6 text-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-foreground/5 bg-white transition-shadow group-hover:shadow-2xl relative">
                <Image
                  src="https://res.cloudinary.com/rockmonkey/image/upload/f_auto,fl_fast_scale.force_strip.immutable_cache.progressive:semi,q_auto/v1587094239/Tip-Thursday-Photo-Front_tdlp1p.jpg"
                  alt="Peaceful background image representing healing and recovery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-serif group-hover:text-accent-blue transition-colors">Healing</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light px-4">
                  A gentle approach to recovery, listening to your body's unique needs.
                </p>
              </div>
            </Link>
            <Link href="/about" className="group space-y-6 text-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-foreground/5 bg-white transition-shadow group-hover:shadow-2xl relative">
                <Image
                  src="https://res.cloudinary.com/rockmonkey/image/upload/f_auto,fl_fast_scale,q_auto/v1587094239/pic02_uctjac.jpg"
                  alt="Gentle scenic image representing hope and optimism"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-serif group-hover:text-accent-blue transition-colors">Hope</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light px-4">
                  Remaining optimistic through the valleys, finding joy in every small win.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
