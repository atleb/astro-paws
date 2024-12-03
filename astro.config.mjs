import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify";

//process.env.NODE_ENV -> development for run dev
// adapt to dynamic set sutiable config, or improve local DX for netlify

const prodConfig = {
  integrations: [vue()],
  output: "server",
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true, // default to up to one year, set headers to specify
  }),
};
const devConfig = {
  integrations: [vue()],
};

// read more at doc site: https://astro.build/config
export default defineConfig(
  prodConfig
  //devConfig
);
