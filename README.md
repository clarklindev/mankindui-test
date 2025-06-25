## @mdx-js/rollup

```
npm install @mdx-js/rollup
```

## vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [react(), mdx()],
});
```

## 1. Import .mdx files like React components

- Import .mdx files like React components

```tsx
import MyDoc from "./docs/example.mdx";

export const Page = () => (
  <div className="prose">
    <MyDoc />
  </div>
);
```

## 2. Write JSX inside your Markdown

- MDX lets you mix Markdown with React components:

````md
# Hello MDX

This is a paragraph.

<MyCustomComponent title="from inside MDX!" />

```ts
// Code blocks are preserved
console.log("highlight me");
```
````
