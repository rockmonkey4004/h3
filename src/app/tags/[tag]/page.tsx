import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Tag as TagIcon, ArrowLeft } from 'lucide-react';

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
    const { tag } = await params;
    const tagName = tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return {
        title: `${tagName} Recipes`,
        description: `Explore our collection of ${tagName} recipes and wellness tips on H3 with Laura.`,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    const tags = new Set<string>();
    posts.forEach(post => {
        post.tags.forEach(tag => tags.add(tag.toLowerCase().replace(/\s+/g, '-')));
    });
    return Array.from(tags).map(tag => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
    const { tag } = await params;
    const posts = getAllPosts().filter(post =>
        post.tags.some(t => t.toLowerCase().replace(/\s+/g, '-') === tag)
    );

    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-6xl">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-accent-blue transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
            </Link>

            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif">
                        Posts tagged with <span className="text-accent-blue capitalize italic">"{tag.replace(/-/g, ' ')}"</span>
                    </h1>
                    <p className="text-lg text-foreground/60 font-light">
                        Found {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group space-y-4 block">
                            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-sm">
                                <img
                                    src={post.image || 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&auto=format&fit=crop&q=60'}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-xs text-foreground/40 font-medium tracking-wider uppercase">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold font-serif leading-tight group-hover:text-accent-blue transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-foreground/60 line-clamp-2 font-light leading-relaxed">
                                    {post.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
