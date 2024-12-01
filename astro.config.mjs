import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/edge-functions";

// read more at doc site: https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "server",
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true, // default to up to one year, set headers to specify
  }),
  // sample headers, add to each PAGE:
  // Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=300, must-revalidate');
  //  ---
  /* copilot suggested addon; 
    functions: {
      "api/*": {
        src: "src/functions/api.js",
      },
    }, */
});
