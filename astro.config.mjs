// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/bolt": "https://discord.com/oauth2/authorize?client_id=1402185856806031390"
  }
});
