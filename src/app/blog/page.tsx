import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Tag as TagIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts on health, healing, and hope. Discover wholesome recipes, personal stories, and practical wellness tips.",
};


export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-24 md:px-6">
            <div className="flex flex-col gap-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground">The Blog</h1>
                    <p className="text-lg text-foreground/60 font-light max-w-2xl">
                        Thoughts on health, healing, and hope. Discover recipes, stories, and wellness tips.
                    </p>
                </div>

                {/* Category Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Link href="/tags/topic-tuesday" className="group relative overflow-hidden rounded-[2rem] h-40 flex items-center justify-center bg-accent-blue/10 border border-accent-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <div className="text-center space-y-1 z-10">
                            <h3 className="text-2xl font-bold font-serif text-accent-blue-dark">Topic Tuesday</h3>
                            <p className="text-xs font-bold tracking-widest uppercase text-accent-blue-dark/60">In-depth Wellness</p>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-bl-full transition-transform group-hover:scale-150" />
                    </Link>
                    <Link href="/tags/tip-thursday" className="group relative overflow-hidden rounded-[2rem] h-40 flex items-center justify-center bg-accent-sage/10 border border-accent-sage/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <div className="text-center space-y-1 z-10">
                            <h3 className="text-2xl font-bold font-serif text-accent-sage-dark">Tip Thursday</h3>
                            <p className="text-xs font-bold tracking-widest uppercase text-accent-sage-dark/60">Practical Advice</p>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-sage/5 rounded-bl-full transition-transform group-hover:scale-150" />
                    </Link>
                    <Link href="/tags/my-story" className="group relative overflow-hidden rounded-[2rem] h-40 flex items-center justify-center bg-accent-warm/10 border border-accent-warm/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <div className="text-center space-y-1 z-10">
                            <h3 className="text-2xl font-bold font-serif text-foreground/70">My Story</h3>
                            <p className="text-xs font-bold tracking-widest uppercase text-foreground/40">Personal Journey</p>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-warm/5 rounded-bl-full transition-transform group-hover:scale-150" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="group flex flex-col gap-5 p-5 rounded-3xl border border-border/50 bg-card transition-all hover:border-accent-blue/30 hover:shadow-2xl hover:shadow-accent-blue/5 outline-none"
                        >
                            <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted relative">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-foreground/10 bg-muted/50">
                                        <span className="font-serif italic text-3xl">H3</span>
                                    </div>
                                )}
                            </Link>
                            <div className="space-y-4 flex-grow flex flex-col">
                                <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.1em] text-foreground/40 uppercase">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    {post.tags.length > 0 && (
                                        <Link
                                            href={`/tags/${post.tags[0].toLowerCase().replace(/\s+/g, '-')}`}
                                            className="flex items-center gap-1.5 hover:text-accent-blue transition-colors bg-muted/50 px-2 py-0.5 rounded-full"
                                        >
                                            <TagIcon className="w-3 h-3" />
                                            {post.tags[0]}
                                        </Link>
                                    )}
                                </div>
                                <div className="space-y-3 flex-grow">
                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="text-2xl font-bold font-serif leading-tight group-hover:text-accent-blue/80 transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-foreground/60 line-clamp-2 font-light leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-xs font-bold tracking-widest uppercase text-accent-blue-dark pt-2 hover:translate-x-1 transition-transform inline-flex items-center gap-2"
                                >
                                    Read Post <span className="text-lg">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
