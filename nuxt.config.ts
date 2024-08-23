import { pwa } from './config/pwa'
import { appDescription } from './constants/index'


export default defineNuxtConfig({
    /*
      配置移动端和PC端均可访问
    */
    devServer: {
        host: process.env.mode === "start" ? "localhost" : "0.0.0.0",
        port: process.env.mode === "start" ? 3000 : 3333
    },

    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@vite-pwa/nuxt',
        // '@nuxt/eslint',
        '@vant/nuxt',
        "@nuxt/icon",
        // "@nuxt/ui",
        '@element-plus/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
    ],
    piniaPersistedstate: {
        storage: 'localStorage',
    },
    experimental: {
        // when using generate, payload js assets included in sw precache manifest
        // but missing on offline, disabling extraction it until fixed
        payloadExtraction: false,
        renderJsonPayloads: true,
        typedPages: true,
    },

    css: [
        '@unocss/reset/tailwind.css',
        '/assets/css/main.css',
        '/assets/css/font.css',
    ],

    colorMode: {
        classSuffix: '',
    },

    nitro: {
        esbuild: {
            options: {
                target: 'esnext',
            },
        },
        prerender: {
            crawlLinks: false,
            routes: ['/'],
            ignore: ['/hi'],
        },
    },

    app: {
        head: {
            viewport: 'width=device-width,initial-scale=1',
            link: [
                { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
                { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
                { rel: "stylesheet", href: "//at.alicdn.com/t/c/font_4641437_ey4y6usjhkg.css" },
                { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
                // { rel: "text/javascript", href: "https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=xNceWXpU5pTmlF8IE21JknGmWURGLcdY" },
            ],
            meta: [
                { name: "charset", content: "UTF-8" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: appDescription },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
                { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#fff' },
                { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
                { name: 'viewport', content: 'initial-scale=1.0, user-scalable=no' }
            ],
            style: [
                `
                  html {
                    font-size: 20px;
                    background:#f1f1f1
                  }

                  @media (max-width: 1700px) {
                    html {
                      font-size: 16px;
                    }
                  }
                  `
            ],
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    },

    pwa,

    devtools: {
        enabled: false,
    },
    ssr: false,
    features: {
        // For UnoCSS
        inlineStyles: false,
    },
    plugins: [
        {
            src: '~/plugins/md5-global.js',
            mode: 'client'
        }
    ],
    // eslint: {
    //     config: {
    //         standalone: false,
    //     },
    // },

    // components: {
    //     dirs: [
    //         '~/components/public',
    //         '~/components/home',
    //         '~/components',
    //     ]
    // },

    compatibilityDate: '2024-08-02',
})
