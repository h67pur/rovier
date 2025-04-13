import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
        cors: {
            origin: [
                'http://localhost',
                'http://localhost:5173'
            ],
            credentials: true
        },
        hmr: {
            host: 'localhost',
            protocol: 'ws'
        }
    }
});
