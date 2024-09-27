# 教程信息

> Learn how to add advanced authentication to your NextJS App.

- 教程来源： [Next Auth V5 - Advanced Guide (2024)](https://www.youtube.com/watch?v=1MTyCvS05V4&list=LL)

- 用到的库和开源项目
  - Source code: [https://dub.sh/N31z2Qp](https://dub.sh/N31z2Qp)
  - Auth.js: [https://authjs.dev/](https://authjs.dev/)
  - Middleware config: [https://dub.sh/Apr6dvD](https://dub.sh/Apr6dvD)
  - Resend: [https://resend.com/](https://resend.com/)
  - Node.js: [https://nodejs.org/en](https://nodejs.org/en)
  - ShadcnUI: [https://ui.shadcn.com/](https://ui.shadcn.com/)
  - Clerk: [https://dub.sh/SdVFxFU](https://dub.sh/SdVFxFU)


- Key Features:
  - 🔐 Next-auth v5 (Auth.js)
  - 🚀 Next.js 14 with server actions
  - 🔑 Credentials Provider
  - 🌐 OAuth Provider (Social login with Google & GitHub)
  - 🔒 Forgot password functionality
  - ✉️ Email verification
  - 📱 Two factor verification (2FA)
  - 👥 User roles (Admin & User)
  - 🔓 Login component (Opens in redirect or modal)
  - 📝 Register component
  - 🤔 Forgot password component
  - ✅ Verification component
  - ⚠️ Error component
  - 🔘 Login button
  - 🚪 Logout button
  - 🚧 Role Gate
  - 🔍 Exploring next.js middleware
  - 📈 Extending & Exploring next-auth session
  - 🔄 Exploring next-auth callbacks
  - 👤 useCurrentUser hook
  - 🛂 useRole hook
  - 🧑 currentUser utility
  - 👮 currentRole utility
  - 🖥️ Example with server component
  - 💻 Example with client component
  - 👑 Render content for admins using RoleGate component
  - 🛡️ Protect API Routes for admins only
  - 🔐 Protect Server Actions for admins only
  - 📧 Change email with new verification in Settings page
  - 🔑 Change password with old password confirmation in Settings page
  - 🔔 Enable/disable two-factor auth in Settings page
  - 🔄 Change user role in Settings page (for development purposes only)



# 项目初始化 (手动)

## 环境准备
1. 确保node.js version在18以后

```node -v ```

2. 创建项目: 

> 详见： [shadcn/ui install](https://ui.shadcn.com/docs/installation/next)

```npx create-next-app@latest auth-tutorial```

按顺序选择:
```bash
Would you like to use TypeScript? ...  Yes
Would you like to use ESLint? ...  Yes
Would you like to use Tailwind CSS? ...  Yes
Would you like to use src/`directory? ...  No
Would you like to use App Router?(recommended)...  Yes
Would you like to customize the default import alias(@/*)? >  No
```

## 添加shadcn-ui

```bash
npm install shadcn-ui@latest init
``` 

选择:

```bash
✔ Which style would you like to use? › New York
✔ Which color would you like to use as the base color? › Slate
✔ Would you like to use CSS variables for theming? … no / yes
```


## Add shadcn-ui button

> 详见： [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)

```bash
npx shadcn@latest add button
```


## NextJS routing and layout learning
> 详见： [NextJS routing and file conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)


# 项目介绍 (自动生成)

## 项目介绍

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
