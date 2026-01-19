// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://zapzig.org',           // ← changed to http for now
  base: '/zap-docs/',                  // ← Changed to match your repository name
  trailingSlash: 'never',              
});
