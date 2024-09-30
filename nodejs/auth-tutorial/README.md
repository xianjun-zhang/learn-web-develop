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

> 详见： [shadcn/ui install](https://ui.shadcn.com/docs/installation/next)

All shadcn-ui components are installed in path: `./components/ui`, all files are named as `[component-name].tsx`, and these files are generated automatically.

```bash
npm install shadcn-ui@latest init
``` 

选择:

```bash
✔ Which style would you like to use? › New York
✔ Which color would you like to use as the base color? › Slate
✔ Would you like to use CSS variables for theming? … no / yes
```


### Add shadcn-ui button

> 详见： [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)


```bash
npx shadcn@latest add button
```

### Add shadcn-ui card

> 详见： [shadcn/ui Card](https://ui.shadcn.com/docs/components/card)

```bash
npx shadcn@latest add card
```

### Add shadcn-ui form

> 详见： [shadcn/ui Form](https://ui.shadcn.com/docs/components/form)

```bash
npx shadcn@latest add form
```


### Add shadcn-ui input

> 详见： [shadcn/ui Input](https://ui.shadcn.com/docs/components/input)

```bash
npx shadcn@latest add input
```





## Social Login

### Social Icon

> Used in socal.tsx, for social media login

```bash
npm i react-icons
```


## 数据库操作

### 安装Prisma到dev环境中

```bash
npm install -D prisma
```
安装完成后，可以看到package.json `"dependencies` 中多了`prisma`的依赖

### 安装Prisma Client

After installing Prisma, you need to add Prisma Client to your project:

```bash
npm install @prisma/client
```
安装完成后，可以看到package.json `"dependencies` 中多了`@prisma/client`的依赖

### Initialize Prisma

To set up Prisma in your project, run the following command:

This command will create a new Prisma schema file and generate a `.env` file for your database connection string (You can add .env to .gitignore):

```bash
npx prisma init
```

这个命令成功后， 会生成`prisma`目录， 里面有`schema.prisma`文件， 和`.env`文件。同时，命令行会输出next step的提示， 比如：

```bash
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm
```






## NextJS routing and layout learning
> 详见： [NextJS routing and file conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)

1. NextJS默认用app下面的目录作为网站router结构，每个目录下方用page.tsx作为默认页面
2. 每个目录下面的layout.tsx 应用到所有当前目录与子目录，作为基础的layout， 内部用` { children }`来带入各自的页面样式
3. 如果不想所有的子页面访问url必须带父目录，可以用`()`将父目录包裹， 这样所有子页面访问url就不需要带父目录了。比如：`/auth/login`, `/auth/register`, 用把文件夹名字`auth`包裹在()里变成`(auth)`， 这样访问的时候只需要 `/login`, `/register`即可
4. 由于app下面的目录默认作为router， 在web url可访问，有些目录我们只是作为内部使用，不想错误的对外暴露，可以用`_`来放在目录前，比如`_components`， 这样外部url就无法访问，显示404错误。同时， 在app目录下， 可以自由调用`components`目录下的组件。



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
