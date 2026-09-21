import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Smart base path resolution for GitHub Pages:
  // 1. If VITE_BASE_PATH is provided (from configure-pages action)
  // 2. Or if GITHUB_REPOSITORY is available in GitHub Actions
  // 3. Default to './' for standalone/local builds
  let base = './';
  if (process.env.VITE_BASE_PATH) {
    base = process.env.VITE_BASE_PATH.endsWith('/')
      ? process.env.VITE_BASE_PATH
      : `${process.env.VITE_BASE_PATH}/`;
  } else if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/';
  }

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
