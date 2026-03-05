import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Tag as TagIcon, ArrowLeft } from 'lucide-react';
import Comments from '@/components/ui/Comments';

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            images: post.image ? [post.image] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: post.image ? [post.image] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-24 md:px-6 max-w-4xl">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-accent-blue transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
            </Link>

            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        {post.tags.length > 0 && (
                            <span className="flex items-center gap-2">
                                <TagIcon className="w-4 h-4" />
                                {post.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-accent-blue transition-colors underline decoration-border/30 underline-offset-4"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                        {post.title}
                    </h1>
                </div>

                {post.image && (
                    <div className="aspect-[21/9] w-full overflow-hidden rounded-3xl bg-muted shadow-sm relative">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 896px"
                        />
                    </div>
                )}

                <div className="prose prose-neutral prose-lg max-w-none dark:prose-invert font-light leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                <Comments title={post.title} />
            </div>
        </article>
    );
}
