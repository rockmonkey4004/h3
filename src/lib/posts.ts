import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    image: string;
    content: string;
};

export function getAllPosts(): Post[] {
    const files = fs.readdirSync(POSTS_PATH);

    const posts = files
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(POSTS_PATH, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);
            const slug = file.replace(/\.mdx?$/, '');

            return {
                slug,
                title: data.title || slug,
                date: data.date ? new Date(data.date).toISOString() : '',
                description: data.description || '',
                tags: data.tags || [],
                image: data.image || '',
                content,
            };
        })
        .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));

    return posts;
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title || slug,
            date: data.date ? new Date(data.date).toISOString() : '',
            description: data.description || '',
            tags: data.tags || [],
            image: data.image || '',
            content,
        };
    } catch (e) {
        return null;
    }
}
