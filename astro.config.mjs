// @ts-check
import { defineConfig } from 'astro/config';
import VitePWA from '@vite-pwa/astro';


// https://astro.build/config
export default defineConfig({
    integrations: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Invitación de Dafne',
                short_name: 'Dafne',
                description: 'Invitación interactiva de cumpleaños',
                start_url: '/',
                display: 'standalone',
                background_color: '#1e1b4b',
                theme_color: '#fb58f4',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
});
