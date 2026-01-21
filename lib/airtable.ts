import Airtable from 'airtable';
import { Product, BlogPost } from '@/types';

// Configure Airtable
// Note: In Next.js, environment variables should be available server-side.

const getAirtableClient = () => {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;

    if (!apiKey || !baseId) {
        console.warn("Airtable credentials missing. Please check .env.local");
        return null;
    }

    return new Airtable({ apiKey }).base(baseId);
};

export const getProducts = async (): Promise<Product[]> => {
    const base = getAirtableClient();
    if (!base) return [];

    try {
        // Select records from the 'Products' table
        const records = await base('Products').select({
            view: 'Grid view', // Ensure this view exists in your Airtable base
            // Optionally sort by name
            sort: [{ field: 'Name', direction: 'asc' }],
            filterByFormula: "{Available} = 'Yes'"
        }).all();

        return records.map(record => {
            // Helper to safely get fields
            const getField = (field: string) => record.get(field);

            const images = (getField('Image') as any[]) || [];

            return {
                id: record.id,
                name: (getField('Name') as string) || 'Untitled Product',
                description: (getField('Description') as string) || '',
                price: (getField('Price') as number) || 0,
                category: (getField('Category') as string) || 'Uncategorized',
                images: images.map((img: any) => ({
                    id: img.id,
                    width: img.width,
                    height: img.height,
                    url: img.url,
                    filename: img.filename,
                    size: img.size,
                    type: img.type,
                    thumbnails: img.thumbnails
                })),
                video: (getField('Video') as any[])?.[0]?.url || undefined,
                stock: (getField('Stock') as number) || 0,
                discount: (getField('Discount') as number) || 0,
                inStock: (getField('InStock') as boolean) ?? false
            };
        });
    } catch (error) {
        console.error("Error fetching products from Airtable:", error);
        return [];
    }
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const base = getAirtableClient();
    if (!base) return [];

    try {
        const records = await base('Blogs').select({
            view: 'Grid view',
            filterByFormula: "{Available} = 'Yes'"
        }).all();

        return records.map(record => {
            const getField = (field: string) => record.get(field);
            const image = (getField('Attachments') as any[])?.[0]?.url || '/placeholder.png';

            return {
                id: record.id,
                title: (getField('Heading') as string) || 'Untitled Post',
                image: image,
                excerpt: (getField('Description') as string) || '',
                content: (getField('Content') as string) || '',
                tags: [], // No Tags column provided by user
                date: '', // No Date column provided
                readTime: '', // No Read Time column
                author: '' // No Author column
            };
        });
    } catch (error) {
        console.error("Error fetching blog posts from Airtable:", error);
        return [];
    }
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
    const base = getAirtableClient();
    if (!base) return null;

    try {
        const record = await base('Blogs').find(id);
        const getField = (field: string) => record.get(field);
        const image = (getField('Attachments') as any[])?.[0]?.url || '/placeholder.png';

        return {
            id: record.id,
            title: (getField('Heading') as string) || 'Untitled Post',
            image: image,
            excerpt: (getField('Description') as string) || '',
            content: (getField('Content') as string) || '',
            tags: [],
            date: '',
            readTime: '',
            author: ''
        };
    } catch (error) {
        console.error(`Error fetching blog post ${id} from Airtable:`, error);
        return null;
    }
};
