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
        const description = this.$td('To receive +100% bonus and airdrops, you must register your wallet and have at least 1 MEGANET token on your balance.', 'metagarden-chain.menu-wallet-description');

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
    <div class="metagarden-chain-wallet">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="321" height="58"/></div>
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Register wallet, <br>Get +100% bonus & airdrops from games</h1>
                            <p class="subtitle-h1">To receive +100% bonus and airdrops, you must register your wallet and have at least 1 MEGANET token on your balance. MEGANET tokens are pre-launch tokens that can be bought after registration.</p>
                            <p class="subtitle-h1">For every 1 MEGANET token, you will receive 2 MEGA coins (native Metagarden Chain coins) at the Mainnet launch.</p>
                            <div class="buttons-block">
                                <a href="https://launchpad.metagarden.io" class="btn" target="_blank">Register wallet</a>
                                <a href="/" class="btn btn-outline">About project</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Зарегистрируйте кошелек, <br>получите бонус +100%</h1>
                            <p class="subtitle-h1">Чтобы получить +100% бонус и аирдропы, вы должны зарегистрировать свой кошелек и иметь на балансе минимум 1 токен MEGANET. Токены MEGANET — это прелонч токены, которые можно купить после регистрации.</p>
                            <p class="subtitle-h1">За каждый токен MEGANET вы получите 2 монеты MEGA (нативные монеты Metagarden Chain) при запуске основной сети.</p>
                            <div class="buttons-block">
                                <a href="https://launchpad.metagarden.io/ru" class="btn" target="_blank">Зарегистрировать кошелек</a>
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
