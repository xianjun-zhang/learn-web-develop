# 项目初始化 (手动)

## 环境准备
1. 确保node.js version在18以后

```node -v ```

2. 创建项目: 

> 详见： [shadcn/ui install](https://ui.shadcn.com/docs/installation/next)

```npx create-next-app@latest auth-tutorial-clerk```

按顺序选择:
```bash
Would you like to use TypeScript? ...  Yes
Would you like to use ESLint? ...  Yes
Would you like to use Tailwind CSS? ...  Yes
Would you like to use src/`directory? ...  No
Would you like to use App Router?(recommended)...  Yes
Would you like to customize the default import alias(@/*)? >  No
```

# Use Clerk

按照官网的指引，安装 Clerk 的依赖

```bash
npm install @clerk/nextjs
```

然后按照官网的步骤，配置环境变量，更新代码





# 项目介绍 (自动生成)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
