import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isLibBuild = process.env.BUILD_MODE === 'lib';

export default defineConfig({
    plugins: [react(), ...(isLibBuild ? [dts({ insertTypesEntry: true })] : [])],
    resolve: {
        alias: {
            '@src': path.resolve('', 'src'),
        },
    },
    base: process.env.NODE_ENV === 'production' && !isLibBuild ? '/qwep-ui-kit/' : '/',
    build: isLibBuild
        ? {
              outDir: 'dist',
              lib: {
                  entry: path.resolve('', 'src/lib/index.ts'),
                  name: 'QWEP-KIT',
                  formats: ['es', 'umd'],
                  fileName: (format) => `qwep-kit.${format}.js`,
              },
              rollupOptions: {
                  external: ['react', 'react-dom'],
                  output: {
                      globals: {
                          react: 'React',
                          'react-dom': 'ReactDOM',
                      },
                  },
              },
          }
        : {
              outDir: 'dist-demo',
          },
});
