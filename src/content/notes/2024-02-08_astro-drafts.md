---
title: "How to Create a Draft Post in Astro"
slug: "astro-draft-posts"
description: "A quick guide on how to create a draft post in Astro."
pubDate: "Feb 8 2024"
heroImage: "/img/notes/2024-02-08-astro-draft.jpg"
tags: ["astro", "coding"]
---

I recently started using Astro for my blog and I found myself wishing write a few posts in advance to keep a nice buffer
on posts in case I had a busy week. All of my posts are written in Markdown (I don't need no fancy CMS! 😄) and I wanted
to be able to write a post and commit it to my repository without it being published to the world.

Since any commit to the <kbd>main</kbd> branch is automatically built and deployed, I needed a way to create a post and commit it
while it being marked as a draft so it doesn't get published. I figured that other people probably wanted to do the 
same, so I wanted to share how I did it.

## How to Create a Draft Post in Astro

My favorite thing about Astro is that I have full control over the build process and content collection and metadata.
This gives me complete control over my content, but also means that a feature like drafts is something I need to build 
myself. Luckily this ended up being insanely simple.

To create a draft post in Astro, we just need to filter our content collection so that posts marked as **draft**, are 
not part of the content collection when the site is built. So we want Astro to acknowledge it, but not include it in the
content collection that is looped through when rendering pages.

### 1. Add a Draft Field to the Frontmatter

The way I did this was by adding a new field `draft: true` to the frontmatter of my post. This will make the field 
available as metadata of the post.

```md
---
title: "How to Create a Draft Post in Astro"
slug: "astro-draft-posts"
description: "A quick guide on how to create a draft post in Astro."
pubDate: "Feb 8 2024"
heroImage: "/img/notes/2024-02-08-astro-draft.jpg"
tags: ["astro", "coding"]
draft: true
---

This is a post example to show how a normal `.md` file might look like.
```

As seen above, we added a new line to the frontmatter of the post. This will make the `draft` field available as 
metadata. It is that easy!

### 2. Add Draft to the Content Collection Interface [Typescript]

If you are using TypeScript, you will need to add the `draft` field to the `Content` interface in `src/content/content.config.ts`.

```ts
import { z, defineCollection } from "astro:content";
const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    draft: z.boolean().optional(),
});
export type Post = z.infer<typeof postSchema>;
```

Obviously you don't need everything shown in the example above, but I wanted to give a full example to see how it comes
together. The important part is the `draft: z.boolean().optional()` line. This tells the schema that the `draft` field 
may exist and if it doesn, it will be a boolean.

Making it optional means we don't have to include it in every post, we can just add it to the ones we want as drafts.

### 3. Filter the Content Collection

Now, the posts should have a draft field in the post data. So now we need to filter the content collection so that any
post that contains `draft: true` is not included in the content collection.

This will need to happen anywhere that you have a content collection being looped through. For example, in the 
`[...page].astro` file that lists all the posts, you would filter the content collection like this:

```ts
import { getCollection } from "astro:content";

export async function getStaticPaths({ paginate }) {
  const posts = await getCollection('posts', ({ data }) => { data.draft !== true });
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
```

So you should already have a `getStaticPaths` function in your `[...page].astro` and/or `[slug].astro` files. You just
need to add the filter to the `getCollection` function. This allows you create a statement that each post must pass 
through before being included in the content collection. Any post that returns a truthy value will be included in the
collection.

You can see that our statement is `data.draft !== true`. This means that any post that has `draft: true` in the 
frontmatter will not be included in the content collection. 

Finally, we have a way to mark a post as a draft! 🎉

### BONUS: Show Drafts in Development

I decided I wanted to take this a little further because I wanted a way to preview my posts before they were published.

Of course, you could just leave the draft flag off while in development and just remember to set it to `true` before 
you commit it, but the problem with that is how easy it is to forget to do.

However, whenever we run `astro dev`, we are in development mode. So we can use the `import.meta.env` object to check 
what the current environment is and only do our draft check if the environment is `production`. Otherwise we don't 
perform filtering, which means we would see ALL posts in development.

Here is how one could add this to the code:

```ts
import { getCollection } from "astro:content";

export async function getStaticPaths({ paginate }) {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
```

Notice how we added a check to see if the environment is production with `import.meta.env.PROD`. This is `true` when 
running in production and we now use a terenary operator to only filter out drafts when this is the case. For the `else`
part of our terenary we hardcode `true` so that all posts are included in the content collection when in development.

## Wrapping Up

Finally we have a way to create draft posts in Astro! This is a simple solution that gives us full control over our
posts.

If you followed the bonus step, you can even preview your drafts in development mode. This is a great way to make sure
your posts are perfect, without fear of the world seeing them before they are ready. If you really wanted to get fancy 
you can add a banner to the top of the post that says "DRAFT" in big red letters. 😄 Get creative!

I hope this guide was helpful to you. If you have any questions or comments, feel free to [connect with me](/connect) and
share me your Astro website. I am always looking for new inspiration and love reading personal blogs.
