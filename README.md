# The Homelabber.io

This is the source code for my personal website, [thehomelabber.io](https://thehomelabber.io).

I use this website to share my homelab, projects, blog posts, and practical notes about IT. My main interests are Linux, networking, virtualization, containers, and automation.

I used the original idea and code from [Dillion Verma’s portfolio](https://github.com/dillionverma/portfolio) as a starting point for my own website. I have changed it to fit my own needs, and I am still working on it as I learn and add new ideas.

## What is on the website?

- Information about me and my interests
- An overview of my homelab
- Blog posts about IT and everyday life
- HomeLab 
- A knowledge base with notes and guides
- Socials
- Light and dark themes

## Built with

Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Magic UI, and Motion. Blog posts and knowledge articles use MDX.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/marcelvanleeuwen/portfolio.git
   cd portfolio
   ```

2. Install the packages:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [localhost:3000](http://localhost:3000) in your browser.

## Make changes

- Edit `src/data/resume.tsx` to change personal information and menu items.
- Add or edit blog posts in `content/`.
- Add or edit knowledge articles in `knowledge/`.
- Store images and other public files in `public/`.

## License

This project uses the [MIT License](./LICENSE). The original copyright notice for Dillion Verma is kept in the license file.
