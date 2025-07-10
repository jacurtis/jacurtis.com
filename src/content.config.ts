import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const noteSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    draft: z.boolean().optional(),
});

const wikiSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique'
    }).optional()
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
export type WikiSchema = z.infer<typeof wikiSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const noteCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/notes" }),
    schema: noteSchema
});
const wikiCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/wiki" }),
    schema: wikiSchema 
});
const storeCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/store" }),
    schema: storeSchema
});

export const collections = {
    'notes': noteCollection,
    'wiki': wikiCollection,
    'store': storeCollection
}

export const SITE_TITLE = 'JACURTIS';
export const SITE_DESCRIPTION = 'Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS.';
export const SITE_HEADER = 'Welcome to Astrofy';