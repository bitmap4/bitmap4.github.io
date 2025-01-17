# Personal Website

My personal portfolio built with Astro Starlight, showcasing projects and skills.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📦 Tech Stack
- [Astro](https://astro.build)
- [Starlight](https://starlight.astro.build)
- [MDX](https://mdxjs.com)

## 🗂️ Project Structure
```
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx    # Home page
│   │       └── projects/    # Project pages
│   └── assets/              # Images and static files
├── astro.config.mjs         # Astro configuration
└── package.json
```

## 🚀 Deployment
This site is deployed using GitHub Pages. Pushing to main branch automatically triggers deployment via GitHub Actions.

## 📝 Adding Content

### New Project
1. Create `.md` file in `projects`
2. Add frontmatter with title and description
3. Write project content using Markdown

### Update Home Page
Modify `index.mdx` to update the landing page.

## 📄 License
MIT