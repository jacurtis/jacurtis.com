# J. Alexander Curtis - Personal Portfolio

A modern personal portfolio website built with Astro v5, featuring a blog, digital garden, and professional showcase. This is the personal website of J. Alexander Curtis, Cloud Architect & Cybersecurity Expert.

🌐 **Live Site:** [jacurtis.com](https://jacurtis.com)

## ✨ Features

- **📝 Notes**: Quick updates and daily thoughts with RSS feed
- **🌱 Wiki**: Digital garden for curated knowledge and explorations
- **🛍️ Store**: Showcase of projects and offerings
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI**: Clean design with DaisyUI components
- **🔍 SEO Optimized**: Built-in sitemap and meta tags
- **⚡ Fast Performance**: Static site generation with Astro
- **📊 Content Collections**: Type-safe content management

## 🚀 Quick Start

### Prerequisites

- Node.js 22.0.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacurtis/jacurtis.com.git
   cd jacurtis.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:4321` to see the site

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🏗️ Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   ├── notes/       # Blog posts and updates
│   │   ├── wiki/        # Digital garden entries
│   │   └── store/       # Project showcase
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── content.config.ts # Content collection schemas
├── astro.config.mjs     # Astro configuration
└── package.json
```

## 📚 Content Management

### Adding Notes
Create new markdown files in `src/content/notes/` with frontmatter:

```yaml
---
title: "Your Note Title"
description: "Brief description"
pubDate: 2024-01-01
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

### Adding Wiki Entries
Create markdown files in `src/content/wiki/` with:

```yaml
---
title: "Knowledge Entry"
description: "What this covers"
pubDate: 2024-01-01
tags: ["knowledge", "reference"]
---

Detailed content...
```

### Adding Store Items
Create files in `src/content/store/` with:

```yaml
---
title: "Project Name"
description: "Project description"
pricing: "$99"
updatedDate: 2024-01-01
custom_link_label: "View Project"
custom_link: "https://example.com"
---

Project details...
```

## 🎨 Customization

### Site Configuration
Update site constants in `src/content.config.ts`:

```typescript
export const SITE_TITLE = 'Your Name';
export const SITE_DESCRIPTION = 'Your description';
export const SITE_HEADER = 'Welcome message';
```

### Styling
- Built with Tailwind CSS and DaisyUI
- Theme can be changed in `src/layouts/BaseLayout.astro`
- Custom styles in component files

### Icons
Uses `astro-icon` with Iconify icons. Add new icons:

```astro
<Icon name="ri:github-fill" />
```

## 🚀 Deployment

### Cloudflare Pages
This site is optimized for Cloudflare Pages deployment:

1. Connect your GitHub repository to Cloudflare Pages
2. Build settings are automatically detected
3. Node.js version is specified in `.nvmrc` (22.10.0)

### Other Platforms
The site can be deployed to any static hosting platform:

- Vercel
- Netlify  
- GitHub Pages
- AWS S3

## 🛠️ Tech Stack

- **Framework**: [Astro v5](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Content**: MDX with content collections
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) + Iconify
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **RSS**: [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- **Sitemap**: [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

- **Website**: [jacurtis.com](https://jacurtis.com)
- **GitHub**: [@jacurtis](https://github.com/jacurtis)
- **LinkedIn**: [J. Alexander Curtis](https://linkedin.com/in/jacurtis)

---

Built with ❤️ using Astro and deployed on Cloudflare Pages.