// TODO: added radix ui external dependencies

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: {
            '@src': path.resolve('', 'src'),
        },
    },
    build: {
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
    },
});
