<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default',
    directives: {
        trackClick,
    },
    head() {
        const title = 'HEIST – крипто-игра в Telegram';
        const description = 'Свиньи-хакеры грабят свинью-копилку!';

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
                { hid: 'og-image', name: 'og:image', content: '/img/metagarden-chain/metagarden-chain-share.jpg' },
            ],
            link: [
                { hid: 'favicon', rel: 'icon', href: '/img/metagarden-chain/metagarden-chain-logo-32.png' },
            ],
            htmlAttrs: {
                class: 'games-heist',
            },
        };
    },
    data() {
        return {

        };
    },
};
</script>


<template>
    <div>
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <div class="games-logo">
                            <img src="/img/metagarden-chain/heist-logo.svg" alt="HEIST">
                        </div>
                        <h1>Свиньи-хакеры грабят свинью-копилку!</h1>
                        <p class="subtitle-h1">Попробуй интересную Телеграм-игру.</p>
                        <div class="buttons-block">
                            <a href="https://t.me/metagardenbot?start=heist" class="btn btn-rounded btn-icon btn-telegram" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="">Запустить в Telegram</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/hello-heist.avif 1x, /img/metagarden-chain/hello-heist@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/hello-heist.webp 1x, /img/metagarden-chain/hello-heist@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/hello-heist.png" srcset="/img/metagarden-chain/hello-heist@2x.png 2x" alt="HEIST game" class="hello-image img-nomob" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <picture>
            <source srcset="/img/metagarden-chain/hello-heist-mob.avif 1x, /img/metagarden-chain/hello-heist-mob@2x.avif 2x" type="image/avif">
            <source srcset="/img/metagarden-chain/hello-heist-mob.webp 1x, /img/metagarden-chain/hello-heist-mob@2x.webp 2x" type="image/webp">
            <img src="/img/metagarden-chain/hello-heist-mob.png" srcset="/img/metagarden-chain/hello-heist-mob@2x.png 2x" alt="HEIST game" class="img-mob" role="presentation"/>
        </picture>
    </div>
</template>
