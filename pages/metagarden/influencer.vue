<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-influencer',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Are you a YouTuber or Social Media Influencer?', 'metagarden-influencer.title'));
        const description = this.$td('Partner with the Metagarden platform in its early stages! Create content about us. If you are interested, please contact us.', 'metagarden-influencer.description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
                { hid: 'og-image', name: 'og:image', content: '/img/landing/metagarden/metagarden-share.png' },
            ],
            link: [
                { hid: 'favicon', rel: 'icon', href: '/img/landing/metagarden/metagarden-icon.png' },
            ],
        };
    },
    data() {
        return {

        };
    },
    computed: {
        appUrl() {
            const localeSuffix = this.$i18n.locale === 'en' ? '' : this.$i18n.locale;
            return `https://my.honee.app/${localeSuffix}`;
        },
    },
};
</script>


<template>
    <div class="metagarden-landing metagarden-influencer-landing">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo">
                            <img src="/img/landing/metagarden/metagarden-logo.svg" alt="Metagarden" width="76" height="76"/>
                        </div>
                        <h1>{{ $td('Are you a YouTuber or Social Media Influencer?', 'metagarden-influencer.hello-title')}}</h1>
                        <template v-if="$i18n.locale === 'en'">
                            <p class="subtitle-h1">Partner with the <b>Metagarden</b> platform in its early stages! Create content about us. If you are interested, please contact us.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p class="subtitle-h1">Станьте партнером платформы <b>Metagarden</b> на ранних стадиях проекта! Создавайте контент о нас. Если заинтересованы, пишите.</p>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/landing/metagarden/hello-i.avif 1x, /img/landing/metagarden/hello-i@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/metagarden/hello-i.webp 1x, /img/landing/metagarden/hello-i2x.webp 2x" type="image/webp">
                        <img src="/img/landing/metagarden/hello-i.png" srcset="/img/landing/metagarden/hello-i@2x.png 2x" alt="metagarden" class="hello-image" role="presentation"/>
                    </picture>
                </div>
                <div class="buttons-block">
                    <a :href="$td('https://t.me/bcmflead', 'metagarden-influencer.contact-button-url')" class="btn btn-1" target="_blank">{{ $td('Contact Us', 'metagarden-influencer.contact-button')}}</a>
                    <a :href="$td('https://honee.app/metagarden', 'metagarden-influencer.learn-button-url')" class="btn btn-outline" target="_blank">{{ $td('About Metagarden', 'metagarden-influencer.learn-button')}}</a>
                </div>
            </div>
        </header>
    </div>
</template>
