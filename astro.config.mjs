// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://anamariamoreno11.github.io',
  base: '/anamariamoreno11.portafolio',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
