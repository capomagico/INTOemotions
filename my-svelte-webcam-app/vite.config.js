import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/INTOemotions/",
  plugins: [svelte(), ghPages()],
});
