# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a clean design.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives
- **Form Handling:** Formspree
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file (see `.env.example` for required variables)

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── magicui/     # Custom animated components
│   ├── data/            # Content data (resume, projects)
│   └── lib/             # Utility functions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/resume.tsx` to update:

- Personal details (name, location, description)
- Work experience
- Education
- Skills and languages
- Projects
- Certificates
- Social media links

### Update Styling

- Modify `src/app/globals.css` for global styles
- Edit `tailwind.config.ts` for theme customization
- Adjust color scheme in CSS variables (light/dark mode)

### Add New Sections

Create new components in `src/components/` and import them in `src/app/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

See `.env.example` for required environment variables.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- Email: sahinmeric22@gmail.com
- LinkedIn: [sahinmeric](https://linkedin.com/in/sahinmeric)
- GitHub: [sahinmeric](https://github.com/sahinmeric)
