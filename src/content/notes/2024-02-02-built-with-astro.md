---
title: "Building my Blog with Astro"
slug: "building-my-blog-with-astro"
description: "This website is built with Astro, a new static site generator. Here are my thoughts on the experience."
pubDate: "Feb 2 2024"
heroImage: "/img/notes/2024-02-02-featured-astro-coder.png"
tags: ["astro", "coding"]
---

I built this site using a Static Site Generator (SSG) called Astro. 

## Why a Static Site Generator?

Static Site Generators (SSG) are a great way to build a website. They are fast, secure, and easy to maintain. They are also 
great for SEO and are very cost-effective to operate. The downside is that they are not as dynamic as a traditional 
websites, but for a personal blog like this, it is less of a problem.

Static Site Generators work by rendering all of the content as static HTML files before they are put on a server. This 
makes them fast because they don't require a server to generate the content on the fly, to pull from a database, or to 
talk to external APIs between the user's request and the response. 

This yeilds fast websites with broad compatibility and low cost. The server doesn't have to work with each request, it 
simply serves pre-built static files. When you add a CDN (content delivery network) to the mix, you can serve your files
even faster and since the content doesn't change, you can cache it for a long time.

Not every website is suited for a SSG. For example a social media site or a site that requires a lot of user interaction
would never work as an SSG or a website that generates reports of user data. These requirements need a server to work
with the data and generate the content on the fly.

But a blog like this? It is perfect for a SSG. The content is written once and generated into HTML files. They do not
change based on a visitor to the site and rarely change once they are published. Content sites are perfect for SSGs.

## Why Astro?

There are many Static Site Generators out in the wild. If you want to learn about more of them, I recommend the 
[Jamstack website](https://jamstack.org/generators/) which shows all the different SSGs and their features. According
to this site, there are 355 different SSG frameworks at the time of this writing. I plan to write a wiki post about 
SSGs and the popular choices in the future.

I chose Astro for a few reasons:

1. **Framework Agnostic:** Most SSGs are built for a specific front-end framework. For example, Gatsby and Next.js were 
   built for React, Nuxt.js and Vuepress were built for Vue, and Sapper and Elder.js were built for Svelte. Astro is one
   of the few that are framework agnostic. You can even use multiple front-end frameworks side by side in the same page.
   Astro calls these "islands".
2. **No Framework Required:** Astro also allows you to build a website that doesn't use a front-end framework at all. 
   You can use vanilla JavaScript, or even no JavaScript at all. This is great for performance and accessibility. It 
   also eases the learning curve for new developers. You can write components in `.astro` format, which is really just 
   a superset of HTML with some extra features. But ultimately an HTML file could just be renamed to `.astro` and it
   works! This allows for progressive development, which I wanted, allowing me to start simple and add as I go.
3. **Active Development:** Almost too active. Since I started looking into Astro in January 2023, I built my first site
   on Astro 2, which was hot and new at the time. I revisted Astro in the fall of 2023 and realized Astro 3 was here. 
   Then when I started building this site in January 2024 (as part of my "publish more" theme), Astro 4 was released. In
   just the first month of 2024, there is already 4 minor releases, putting us at Astro 4.4. This is a good sign that
   development will continue to be strong. I don't want to hitch my wagon to abandonware, so this is a good sign for me,
   allowing me to focus on publishing and not rebuilding again on something new.
4. **Extremely Customizable:** Unlike a lot of SSGs, you can easily support multiple content types. For example I am 
   writing a "notes" content type right now, but I can also support my upcoming "wiki" feature, "projects", and "art".
   Each of these are different content types and can be rendered and organized differently and independently. 
5. **Flexible Content:** Astro allows me to use markdown, MDX, or even just plain HTML. This is great for me because I 
   can write in markdown, but I can also write in HTML if I want to do something more complex. I can also use MDX if I 
   want to use React components in my content. This means I will have full flexibility as my needs change in the future.
   For a blog post, I will usually write in plain markdown. But as I write my wiki, I will likely use MDX to include
    interactive components and more complex layouts.
6. **Write Anywhere:** I can write my content in any text editor I want. I usually write in WebStorm (from Jetbrains), 
   but I can also write in another app (on my Ipad or iPhone) and then push it to my git repository. I could even write 
   it in the GitHub web interface if I wanted to. Plain text files like this allow for easy customization and portability.
   They also make scripting and automation easier.
7. **Performance:** Astro is fast! The fastest in the industry. It is built with performance in mind and is designed to 
   be fast out of the box. This is great for SEO and for user experience. I want my site to be fast and Astro is the best
   choice for that. It ships less Javascript which means less code to parse and execute. Without any database or any
   front-end framework to bootstrap, the browser can render the content faster. Plus, the content is easily distributable
   via CDN.

![Astro Performance](/img/notes/2024-02-02-astro-performance.png)

Astro performance is great. It is the fastest SSG in the industry by nearly every metric. Plus t 

![Astro Performance Cohort](/img/notes/2024-02-02_astro-performance-2.png)

## My Experience

I already covered a lot of these points up above. But I wanted to quickly highlight a few of the quality of life 
features that drew me to Astro. 

Of course using any SSG allows me to write in markdown, which is a huge win for me. I can write in my text editor of
choice and then push it to my git repository. I can also write in the GitHub web interface if I wanted to, an IDE, or 
just a generic text editor. This allows me to find new workflows and tools with a high liklihood that I can build an
integration into my project to make life as easy as possible.

The ability to write in markdown, MDX, HTML, and other formats is also a huge convenience because I can easily customize
and improve my content as I go, but I won't be locked into a specific format. This allows me to create interactive 
elements throughout my site.

I also like the fact that I can use different front-end frameworks side by side. Also if new frontend frameworks come 
out in the future, then Astro will easily support them without me needing to switch to a new framework. 

## Conclusion

I wrote this blog using Astro. I am excited about what it will provide for the future development of this blog. 

I have really enjoyed learning more about what Astro is capable of and I will likely share more of those in future 
notes on this blog.