import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'production',
  }),
  integrations: [react(), tailwind({ config: { applyBaseStyles: false }})]
});