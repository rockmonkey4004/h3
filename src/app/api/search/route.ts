import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
    const posts = getAllPosts();
    const searchData = posts.map(post => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        tags: post.tags
    }));

    return NextResponse.json(searchData, {
        headers: {
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
        },
    });
}
