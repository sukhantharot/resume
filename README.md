# Kittipan Sukhantharot - Resume

A modern, responsive resume website with dark mode support built with Next.js and Tailwind CSS.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Responsive design
- 🖨️ Print-friendly layout
- ⚡ Fast loading with Next.js
- 🎨 Modern UI with shadcn/ui components

## Getting Started

### Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the resume.

### Building for Production

\`\`\`bash
npm run build
\`\`\`

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `resume`
2. Push this code to the repository
3. Go to repository Settings > Pages
4. Set Source to "GitHub Actions"
5. The site will be available at `https://yourusername.github.io/resume`

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
\`\`\`

## Customization

- Edit personal information in `app/page.tsx`
- Modify colors in `tailwind.config.ts`
- Update styling in `app/globals.css`

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
