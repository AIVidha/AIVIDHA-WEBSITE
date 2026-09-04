# AIVIDHA Academy

AIVIDHA Academy is a modern landing page for practical artificial intelligence education. It presents the academy's vision, learning paths, hands-on projects, learner testimonials, and contact information in one responsive experience.

## Highlights

- Responsive single-page academy website
- Dark and light theme support
- Animated section reveals and atmospheric background effects
- Courses and project showcase sections
- Testimonials and contact experience
- Vercel Analytics support in production

## Tech Stack

- [Next.js](https://nextjs.org/) 15 with the App Router
- [React](https://react.dev/) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and Radix UI primitives
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Lucide](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
app/                 App Router entry point, layout, and global styles
components/          Page sections and reusable UI components
hooks/               Shared React hooks
lib/                 Shared utilities
public/              Logos, icons, and image assets
styles/              Additional global styles
```

## Deployment

The project can be deployed to [Vercel](https://vercel.com/) or any platform that supports Next.js:

```bash
npm run build
npm run start
```

When deployed to production, the Vercel Analytics component is enabled automatically.

## License

This project is maintained for AIVIDHA Academy. Contact the repository owner before reusing branded content or assets.