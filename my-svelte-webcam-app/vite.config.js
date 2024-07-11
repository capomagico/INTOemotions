import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: "/INTOemotions/", // Indica il nome del repository qui
  plugins: [svelte()],
});
