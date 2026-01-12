import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// Проверяем, собираем ли мы библиотеку или демо-приложение
const isLibBuild = process.env.BUILD_MODE === 'lib';

export default defineConfig({
    plugins: [
        react(),
        // dts только для сборки библиотеки
        ...(isLibBuild ? [dts({ insertTypesEntry: true })] : []),
    ],
    resolve: {
        alias: {
            '@src': path.resolve('', 'src'),
        },
    },
    // Base path для GitHub Pages (важно!)
    base: process.env.NODE_ENV === 'production' && !isLibBuild ? '/qwep-ui-kit/' : '/',
    build: isLibBuild
        ? {
              // Конфигурация для сборки библиотеки
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
                      dir: 'dist',
                  },
              },
          }
        : {
              // Конфигурация для сборки демо-приложения
              outDir: 'dist-demo',
          },
});
