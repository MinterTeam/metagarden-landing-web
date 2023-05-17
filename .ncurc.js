module.exports = {
    format: [
        'group',
        'repo',
        'ownerChanged',
    ],
    reject: [
        // vue 3
        '@nuxt/content',
        'qrcode.vue',
        // nuxt 3 (webpack5)
        'less-loader',
        // es modules
        // 'beeper',
        // 'camelcase-keys',
        // 'del',
        // 'gulp-imagemin',
        // 'imagemin-mozjpeg',
        // 'imagemin-webp',
        // broken
        'nuxt-i18n-default',
    ],
};
