import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');
const POST_EXTENSIONS = ['.mdx', '.md'] as const;

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    image: string;
    content: string;
};

type Frontmatter = {
    title?: unknown;
    date?: unknown;
    description?: unknown;
    tags?: unknown;
    image?: unknown;
};

function toIsoDate(value: unknown): string {
    if (!value) {
        return '';
    }

    const date = new Date(String(value));
    return Number.isNaN(date.valueOf()) ? '' : date.toISOString();
}

function toTags(value: unknown): string[] {
    if (Array.isArray(value)) {
        return value.filter((tag): tag is string => typeof tag === 'string');
    }

    if (typeof value === 'string' && value.trim().length > 0) {
        return [value];
    }

    return [];
}

function toPost(slug: string, fileContent: string): Post {
    const { data, content } = matter(fileContent);
    const frontmatter = data as Frontmatter;

    return {
        slug,
        title: typeof frontmatter.title === 'string' ? frontmatter.title : slug,
        date: toIsoDate(frontmatter.date),
        description: typeof frontmatter.description === 'string' ? frontmatter.description : '',
        tags: toTags(frontmatter.tags),
        image: typeof frontmatter.image === 'string' ? frontmatter.image : '',
        content,
    };
}

function getPostTimestamp(date: string): number {
    if (!date) {
        return 0;
    }

    const timestamp = Date.parse(date);
    return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function getAllPosts(): Post[] {
    const files = fs.readdirSync(POSTS_PATH);

    const posts = files
        .filter((file) => POST_EXTENSIONS.some((extension) => file.endsWith(extension)))
        .map((file) => {
            const filePath = path.join(POSTS_PATH, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const slug = file.replace(/\.mdx?$/, '');
            return toPost(slug, fileContent);
        })
        .sort((a, b) => getPostTimestamp(b.date) - getPostTimestamp(a.date));

    return posts;
}

export function getPostBySlug(slug: string): Post | null {
    try {
        for (const extension of POST_EXTENSIONS) {
            const filePath = path.join(POSTS_PATH, `${slug}${extension}`);
            if (!fs.existsSync(filePath)) {
                continue;
            }

            const fileContent = fs.readFileSync(filePath, 'utf8');
            return toPost(slug, fileContent);
        }

        return null;
    } catch {
        return null;
    }
}
