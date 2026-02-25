import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
    const posts = getAllPosts();
    const searchData = posts.map(post => ({
        slug: post.slug,
        title: post.title,
        description: post.description,
        tags: post.tags
    }));

    return NextResponse.json(searchData);
}
