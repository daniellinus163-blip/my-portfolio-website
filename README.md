## AI Developer Portfolio

A modern Next.js + Tailwind portfolio with:
- light glassmorphism UI with blue accents
- hero section video background (local MP4 or optional YouTube loop)
- animated sections
- project and case study sections
- floating AI chatbot demo
- working contact form API (Resend)

### Hero video

- Add your compressed loop to **`public/videos/ai-coding-bg.mp4`** (coding / AI / terminal visuals).
- Mobile shows a lightweight **coding-themed still image** automatically; tablet/desktop plays the MP4 with a dark readability overlay.

## Contact Form Setup (Resend)

1. Create a `.env.local` file in the project root.
2. Copy values from `.env.example`.
3. Set:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional, but recommended with your verified domain)
4. Restart the dev server after adding env vars.

When configured, contact submissions from the website are sent to your email via Resend.

---

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
