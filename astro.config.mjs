// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zapzig.org',          // ← your domain
  base: '/',                           // ← root, no /zap-docs or other subpath
  trailingSlash: 'never',              // optional: cleaner URLs
});
