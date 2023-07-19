<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('GamerID for Metagarden Gaming Platform — The Metagarden Chain', 'metagarden-chain.title-gamerid'));
        const description = this.$td('The GamerID will be released in the form of an NFT at the Metagarden Chain Mainnet launch, and the following privileges will be tied to your GamerID: the ability to receive free game tokens, various game bonuses, and income boosts on the platform.', 'metagarden-chain.menu-gamerid-description');

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
        };
    },
    data() {
        return {

        };
    },
};
</script>


<template>
    <div class="metagarden-chain-gamerid">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Limited offer. <br>Get GamerID with privileges</h1>
                            <p class="subtitle-h1">Hurry up and be one of the first to get your GamerID. The first players to register will receive privileges tied to their GamerID.</p>
                            <p class="subtitle-h1">The GamerID will be released in the form of an NFT at the Metagarden Chain Mainnet launch, and the following privileges will be tied to your GamerID: the ability to receive free game tokens, various game bonuses, and income boosts on the platform.</p>
                            <div class="buttons-block">
                                <!--<a href="https://launchpad.metagarden.io" class="btn" target="_blank">Get your GamerID</a>-->
                                <a class="btn btn-disable" target="_blank">Coming soon</a>
                                <a href="/platform" class="btn btn-outline">About gaming platform</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Ограниченное предложение. <br>Получите GamerID с привилегиями</h1>
                            <p class="subtitle-h1">Поторопитесь получить свой GamerID одним из первых. Первые зарегистрировавшиеся игроки получат привилегии, привязанные к их GamerID.</p>
                            <p class="subtitle-h1">GamerID будет выпущен в форме NFT во время запуска Metagarden Chain Mainnet, и к вашему GamerID будут привязаны следующие привилегии: возможность получать бесплатные игровые токены, различные игровые бонусы и повышение дохода на платформе.</p>
                            <div class="buttons-block">
                                <!--<a href="https://launchpad.metagarden.io/ru" class="btn" target="_blank">Получить свой GamerID</a>-->
                                <a class="btn btn-disable" target="_blank">Скоро</a>
                                <a href="/ru/platform" class="btn btn-outline">Об игровой платформе</a>
                            </div>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/gamerid.avif 1x, /img/metagarden-chain/gamerid@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/gamerid.webp 1x, /img/metagarden-chain/gamerid@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/gamerid.png" srcset="/img/metagarden-chain/gamerid@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
    </div>
</template>
