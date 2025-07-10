import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../content.config.ts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("notes");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/notes/${post.id}/`,
    })),
  });
}
