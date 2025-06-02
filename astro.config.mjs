// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://astro.kralj.de",
  //site: "https://akralj.github.io",
  //base: "/astro-cms-daisyui",
  vite: {
    plugins: [tailwindcss()]
  }
})
