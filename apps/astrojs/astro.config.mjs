import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [solid()],
  adapter: node({
    mode: 'standalone'
  }),
});
