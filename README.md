# Arjun's Project Log

A minimal, clean portfolio site showcasing projects and build logs.

## Overview

This site serves as a collection of:
- Projects built with Claude Code
- Personal projects and experiments
- Detailed build logs and behind-the-scenes documentation

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Minimal, utility-first styling
- **React Markdown** - Markdown rendering for build logs

## Features

- Clean, readable design inspired by Medium/Notion
- Simple project list homepage
- Individual project pages with optional build logs
- Fast, static site generation
- Mobile responsive

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding New Projects

To add a new project:

1. Add project info to the `projects` array in `app/page.tsx`
2. If the project has a build log:
   - Create a directory: `app/projects/[project-id]/`
   - Add the markdown file: `build-log.md`
   - Create `page.tsx` to render it (similar to existing examples)

## Deployment

Deployed on Vercel with automatic deployments from the main branch.

## License

Private project - All rights reserved.
