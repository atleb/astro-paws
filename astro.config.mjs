import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/edge-functions";

// read more at doc site: https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: 'hybrid',
  experimental: {
    hybridOutput: true,
  },
  adapter: netlify()
});