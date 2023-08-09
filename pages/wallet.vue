<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Metagarden Wallet', 'metagarden-chain.title-wallet'));
        const description = this.$td('To receive bonuses and airdrops, you must register your wallet and have at least 1 LAUNCHER token on your balance.', 'metagarden-chain.menu-wallet-description');

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
    <div class="metagarden-chain-wallet">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Register wallet, <br>Get bonuses & airdrops from games</h1>
                            <p class="subtitle-h1">To receive bonuses and airdrops, you must register your wallet and have at least 1 LAUNCHER token on your balance. LAUNCHER  tokens are pre-launch tokens that can be bought after registration.</p>
                            <div class="buttons-block">
                                <a href="http://t.me/metagardenbot?start=launchpad" class="btn btn-icon btn-telegram" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="">Register via Telegram</a>
                                <a href="/" class="btn btn-outline">About project</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Зарегистрируйте кошелек, <br>получайте бонусы</h1>
                            <p class="subtitle-h1">Чтобы получать бонусы и аирдропы, вы должны зарегистрировать свой кошелек и иметь на балансе хотя бы 1 токен LAUNCHER. Токены LAUNCHER - это прелонч токены, которые можно купить после регистрации.</p>
                            <div class="buttons-block">
                                <a href="http://t.me/metagardenbot?start=launchpadru" class="btn btn-icon btn-telegram" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="">Зарегистрировать через Telegram</a>
                                <a href="/ru" class="btn btn-outline">О проекте</a>
                            </div>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/hello-wallet.avif 1x, /img/metagarden-chain/hello-wallet@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/hello-wallet.webp 1x, /img/metagarden-chain/hello-wallet@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/hello-wallet.png" srcset="/img/metagarden-chain/hello-wallet@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
    </div>
</template>
