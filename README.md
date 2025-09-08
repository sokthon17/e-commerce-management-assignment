E-Commerce Management Dashboard
This is a Next.js project for an E-Commerce Management Dashboard built as an assignment based on a Figma design
The project fetches product data dynamically from the DummyJSON API

🛠 Tech Stack
Next.js 13+ (App Router) – modern React framework with SSR/SSG support
TypeScript – for type safety
React – UI library
Tailwind CSS – for styling and responsive design
DummyJSON API – for product and category data
next/font – optimized font loading with Geist

🚀 Getting Started

Clone the repo and install dependencies:

### Run the project

Make sure you install the packages

```sh
npm install
```

Start the Nextjs development asset server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server. You can access the website by going to `http://localhost:3000` in your browser.

## E2E Testing

This project already includes end to end testing with [playwright](https://playwright.dev/)

All the test cases need to be inside the `tests` directory that is located in the root folder of the project.

For every commit to BitBucket the default pipeline will run and the E2E testing is part of that pipeline.

### Create a new test case

Create a new file and the file should be ending with `.test.ts` to be recognized and run. This is the default template for a test case

```ts
import {test, expect} from '@playwright/test';

test.describe('Test Name', () => {
    test('Step N for test', async ({page}) => {
         await page.goto('/') // Go to Homepage: Insert the relative URL you want to test

        const title = await page.locator(`title`).textContent() // You can use JS locators like ( tag / .className / #id ) to locate content
        expect(title).toEqual('Hello World')
    })
})
```

### Run testing locally

You can run tests in two ways:

- CLI - will just run in the command line: `npm run e2e`
- UI - will run the test in a view window executing all the steps in the test: `npm run e2e:ui`

You can start editing the pages under app/. The page updates automatically as you make changes.
Dashboard layout following the Figma design
Dynamic fetching of products and categories from DummyJSON API
Add, update, and view product details
Optimized .webp product images
Responsive UI

📚 Learn More
Next.js Documentation
– features, API, and guides
Learn Next.js
– interactive tutorial
Next.js GitHub
– explore the source, issues, and contribute

⚡ Deployment
The easiest way to deploy this project is via Vercel
See Next.js Deployment Documentation
for more deployment options.

🎨 Figma Design Reference
View the full design for this project here: E-Commerce Management(http://figma.com/design/gguLEALNnAdpNVMBV19LdA/E-commerce-Management?node-id=11-1556&t=CU6YSWXuShllswKf-0) Figma
