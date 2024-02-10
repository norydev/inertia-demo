// Entry point for the build script in your package.json
import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

// You need Vite to do `import.meta.glob`.
// It's not necessary to run inertia, just simpler to implement than
// importing each file individually.
//
// This little piece of magic (plus part 2 bellow) is what let's you add
// pages without importing all of them individiually. For ex, if your
// Rails controller does:
//   `render inertia: "posts/index"`
// You can simply add `/pages/posts/index.jsx` which exports a React
// component as default function, and that component will be rendered
// (via part 2 bellow).
const pages = import.meta.glob("../pages/**/*.jsx");

document.addEventListener("DOMContentLoaded", () => {
  createInertiaApp({
    resolve: async (name) => {
      // part 2: find the correct page based on name
      return (await pages[`../pages/${name}.jsx`]()).default;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
  });
});
