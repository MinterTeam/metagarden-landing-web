// register env before other imports @see https://www.npmjs.com/package/dotenv#how-do-i-use-dotenv-with-import-
import 'dotenv/config';
import dotenv from 'dotenv';

const envConfig = dotenv.config();
const envConfigParsed = envConfig.error ? {} : envConfig.parsed;

import langEn from './lang/en.js';
import langRu from './lang/ru.js';
import {BASE_TITLE, BASE_DESCRIPTION, I18N_ROUTE_NAME_SEPARATOR, LANGUAGE_COOKIE_KEY} from "./assets/variables.js";


module.exports = {
    target: 'static',
    telemetry: false,
    /*
    ** Headers of the page
    */
    head: {
        title: BASE_TITLE,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: BASE_DESCRIPTION },
            { hid: 'og-title', name: 'og:title', content: BASE_TITLE },
            { hid: 'og-description', name: 'og:description', content: BASE_DESCRIPTION },
            { hid: 'og-image', name: 'og:image', content: '/social-share.png' },
        ],
        link: [
            { hid: 'favicon', rel: 'icon', href: '/favicon.png' },
            { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            // preload configures in bundleRenderer
            // { rel: 'preload', href: '/fonts/Inter-Bold.woff2', as: 'font', type: 'font/woff2' },
            // { rel: 'preload', href: '/fonts/Inter-Regular.woff2', as: 'font', type: 'font/woff2' },
        ],
    },
    css: [
        './static/css/style.min.css',
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#ff8a00' },
    router: {
        linkActiveClass: 'is-active-inner',
        linkExactActiveClass: 'is-active',
        middleware: [
            // 'history',
        ],
        extendRoutes(routes, resolve) {
            routes.forEach((route) => {
                // route is not processed by i18n yet
                if (route.name.indexOf('ru-') === 0 && !route.name.includes(I18N_ROUTE_NAME_SEPARATOR + 'ru')) {
                    // cast name to the same as default locale, so separate page in /ru folder will work as same page in root folder
                    route.name = route.name.substring(3);
                }
            });
        },
    },
    env: envConfigParsed,
    modules: [
        /*
        ['nuxt-i18n-preferred', {
            routesNameSeparator: I18N_ROUTE_NAME_SEPARATOR,
            languageCookieKey: LANGUAGE_COOKIE_KEY,
            detectBrowserLanguage: false,
        }],
        */
        'nuxt-i18n-default',
        ['@nuxtjs/i18n', {
            locales: [
                {
                    code: 'en',
                    iso: 'en',
                    name: 'English',
                },
                {
                    code: 'ru',
                    iso: 'ru',
                    name: 'Russian',
                },
            ],
            defaultLocale: 'en',
            routesNameSeparator: I18N_ROUTE_NAME_SEPARATOR,
            strategy: 'prefix_except_default',
            rootRedirect: null,
            vueI18n: {
                fallbackLocale: 'en',
                messages: {
                    ru: langRu,
                    en: langEn,
                },
            },
            seo: false,
            detectBrowserLanguage: false,
        }],
        // '@nuxt/content',
    ],
    plugins: [
        { src: '~/plugins/i18n-mock-preferred.js'},
        { src: '~/plugins/base-url-prefix.js'},
        // { src: '~/plugins/online.js', ssr: false },
        // { src: '~/plugins/custom-event-polyfill.js', ssr: false },
        { src: '~/plugins/persistedState.js', ssr: false },
        { src: '~/plugins/click-blur.js', ssr: false },
        { src: '~/plugins/referral.js', ssr: false },
        { src: '~/plugins/telegram-web-app.js', ssr: false },
        { src: '~/plugins/seo-gtm.js', ssr: false },
    ],
    content: {
        liveEdit: false,
        markdown: {
            remarkAutolinkHeadings: false,
        },
    },
    modern: process.env.NODE_ENV === 'development' ? false : 'client',
    features: {
        store: false,
        // layouts: false,
        // meta: false,
        // middleware: false,
        // transitions: false,
        deprecations: false,
        validate: false, // Component.options.validate
        asyncData: false,
        // fetch: false,
        clientOnline: false,
        // clientPrefetch: false,
        componentAliases: false, // NLink, NChild
        // componentClientOnly: false,
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                if (type === 'font' && /\.woff2$/.test(file)) {
                    return /fonts\/Inter-Bold/.test(file) || /fonts\/Inter-Regular/.test(file);
                }
                return false;
                // return ['script', 'style', 'font'].includes(type)
            },
        },
    },
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        optimizeCSS: false,
        postcss: false,
        optimization: {
            // minimize: false,
            splitChunks: {
                // name: true,
                cacheGroups: {
                    // extract all CSS to a single file
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        watch: [
            './api/',
            // `./lang/`, // this watcher dont-work yet
        ],
        // corejs: 2,
        extend(config, { isDev, isClient, isServer }) {
            if (!config.resolve) {
                config.resolve = {};
            }
            config.resolve.mainFields =  ['module', 'browser', 'main'];
        },
        // babel: {
        //     presets: [
        //         [
        //             '@nuxt/babel-preset-app',
        //             {
        //                 // targets: isServer ? { node: '10' } : { ie: '11' },
        //                 corejs: { version: 3 },
        //             },
        //         ],
        //     ],
        //     plugins: [
        //         // '@babel/plugin-proposal-optional-chaining',
        //     ],
        //     // prevent @babel/plugin-transform-runtime from inserting `import` statement into commonjs files (bc. it breaks webpack)
        //     sourceType: 'unambiguous',
        // },
        transpile: [
            /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
            '@material/',
            '/base-x/',
            'date-fns/esm',
            'vue-simple-suggest/dist/es7',
            'vue-simple-suggest/lib',
            'centrifuge/src',
            'autonumeric/src',
            'vue-autonumeric/src',
            'lodash-es',
            // 'nuxt-i18n/src',
            'v-file-input/src',
            'clipbrd/src',
            'pretty-num/src',
            'from-exponential/src',
            'minterjs-util',
            'minterjs-tx',
            'minterjs-wallet',
            'minter-js-sdk',
        ],
    },
};
