import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    nesting: true
  }), vue()],
  server: {
    host: "0.0.0.0"
  }
});