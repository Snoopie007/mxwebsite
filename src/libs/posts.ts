import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export interface PostMeta {
    title: string;
    description?: string;
    date?: string;
    author?: string;
    [key: string]: any;
}

export interface Post {
    slug: string;
    meta: PostMeta;
    content: string;
}

export async function getPostByName(slug: string, category: string = 'legal'): Promise<Post | null> {
    try {
        const fullPath = path.join(docsDirectory, category, `${slug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            meta: {
                title: data.title || slug,
                description: data.description,
                date: data.date,
                author: data.author,
                ...data,
            },
            content,
        };
    } catch (error) {
        console.error('Error reading post:', error);
        return null;
    }
}

export async function getAllPosts(category: string = 'legal'): Promise<Post[]> {
    try {
        const categoryPath = path.join(docsDirectory, category);

        if (!fs.existsSync(categoryPath)) {
            return [];
        }

        const fileNames = fs.readdirSync(categoryPath);
        const mdxFiles = fileNames.filter(name => name.endsWith('.mdx'));

        const posts = await Promise.all(
            mdxFiles.map(async (fileName) => {
                const slug = fileName.replace(/\.mdx$/, '');
                return await getPostByName(slug, category);
            })
        );

        return posts.filter((post): post is Post => post !== null);
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

export function getPostSlugs(category: string = 'legal'): string[] {
    try {
        const categoryPath = path.join(docsDirectory, category);

        if (!fs.existsSync(categoryPath)) {
            return [];
        }

        const fileNames = fs.readdirSync(categoryPath);
        return fileNames
            .filter(name => name.endsWith('.mdx'))
            .map(name => name.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading post slugs:', error);
        return [];
    }
}
