## PROJECT FLOW

### Setup Steps

1. **Setup Next.js project**
   1. **Verify files and versions**
   - Check `package.json` for correct dependencies.
   - Ensure the project structure and versions match expected setup.

   2. **Setup shadcn**
   - Run `npx shadcn-ui@latest init` to configure shadcn/ui.
   - Add required components as needed.

   3. **Create Git repo**
   - Initialize Git and commit the project.
   - Connect to GitHub or your preferred remote repository.

2. **Setup Database for project**
   1. **PostgreSQL database (Neon)**
   - Make id a Neon
   - copy database url in .env file

   2. **Setup Prisma**
   - Add schema
   - Basic migrations
   - Database studio
   - database reset ( For Development ONLY )

   3. **Create Git repo**
   - Initialize Git and commit the project.
   - Connect to GitHub or your preferred remote repository.

3. **TRPC Setup**
   1. **Setup tRPC**
   - Experiment with client component
   - Experiment with server component
   - Previe prefetching



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


