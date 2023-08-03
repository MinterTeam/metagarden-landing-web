<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Are you a YouTuber or Social Media Influencer? — The Metagarden Chain', 'metagarden-chain.title-influencer'));
        const description = this.$td('Partner with the Metagarden platform in its early stages!', 'metagarden-chain.menu-influencer-description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
            ],
        };
    },
    data() {
        return {

        };
    },
};
</script>


<template>
    <div class="metagarden-chain-influencer">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Are you a YouTuber or Social Media Influencer?</h1>
                            <p class="subtitle-h1">Partner with the <b>Metagarden</b> platform in its early stages! Create content about us. If you are interested, please contact us.</p>
                            <div class="buttons-block">
                                <a href="https://t.me/diigity" class="btn" target="_blank">Contact Us</a>
                                <a href="/" class="btn btn-outline">About Metagarden</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Вы Ютьюбер, у вас своя аудитория?</h1>
                            <p class="subtitle-h1">Станьте партнером платформы <b>Metagarden</b> на ранних стадиях проекта! Создавайте контент о нас. Если заинтересованы, пишите.</p>
                            <div class="buttons-block">
                                <a href="https://t.me/diigity" class="btn" target="_blank">Написать нам</a>
                                <a href="/ru" class="btn btn-outline">Про Metagarden</a>
                            </div>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/influencer.avif 1x, /img/metagarden-chain/influencer@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/influencer.webp 1x, /img/metagarden-chain/influencer@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/influencer.png" srcset="/img/metagarden-chain/influencer@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
    </div>
</template>
