<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import BaseButtonCopyIcon from '~/components/base/BaseButtonCopyIcon.vue';

export default {
    layout: 'metagarden-chain',
    components: {
        BaseButtonCopyIcon,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Buy tokens — Metagarden Chain', 'metagarden-chain.title-early-access'));
        const description = this.$td('5 second final blocks, high throughput, low cost transactions, API and SDK for game developers.', 'metagarden-chain.menu-early-access-description');

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
    <div class="metagarden-chain-early-access">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Buy tokens before Mainnet launch</h1>
                            <p class="subtitle-h1">We issued MEGA tokens on <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> and <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> for those who want to buy the Metagarden Chain tokens before the Mainet launch.</p>
                            <div class="buy-price-block">
                                <h3 class="buy-price-h3">Early stages price</h3>
                                <div class="buy-price-value">1 MEGA = $1</div>
                                <small>Minimum purchase of $30</small>
                            </div>
                            <p class="subtitle-h1">To buy MEGA tokens simply send* your ETH or BNB tokens to this address in either Ethereum or BNB Smart Chian︎:</p>
                            <div class="buy-address-block">
                                <div class="buy-address">0x065aEcd156136F002076ECC3f42EAca132E36444</div>
                                <client-only>
                                    <BaseButtonCopyIcon copy-text="0x065aEcd156136F002076ECC3f42EAca132E36444" :is-inline="true"/>
                                </client-only>
                            </div>
                            <p class="subtitle-h1">The MEGA tokens will be send back to your address automatically.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>* Do not send tokens from <b>exchange wallets</b>, your tokens will be lost. <br>Send only from wallets <b>you have a seed phrase</b> to.</span>
                            </div>
                            <div class="buttons-block">
                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x7c4e6727ab2218affa6a30250b1148922bb7745c&chain=bsc&inputCurrency=0x55d398326f99059fF775485246999027B3197955" class="btn btn-icon" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/icon-pancake.png" alt="">or Buy on PancakeSwap</a>
                                <a class="btn btn-outline btn-icon btn-disable"><img src="/img/metagarden-chain/icon-uniswap.png" alt="">Uniswap coming soon</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Купите токены до запуска мейннета</h1>
                            <p class="subtitle-h1">Мы выпустили токены MEGA в <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> и <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> для тех, кто хочет купить токены Metagarden Chain до запуска основной сети.</p>
                            <div class="buy-price-block">
                                <h3 class="buy-price-h3">Цена на ранних стадиях</h3>
                                <div class="buy-price-value">1 MEGA = $1</div>
                                <small>Минимальная покупка от $30</small>
                            </div>
                            <p class="subtitle-h1">Чтобы купить токены MEGA, просто отправьте* свои монеты ETH или BNB на этот адрес в Ethereum или BNB Smart Chian︎:</p>
                            <div class="buy-address-block">
                                <div class="buy-address">0x065aEcd156136F002076ECC3f42EAca132E36444</div>
                                <client-only>
                                    <BaseButtonCopyIcon copy-text="0x065aEcd156136F002076ECC3f42EAca132E36444" :is-inline="true"/>
                                </client-only>
                            </div>
                            <p class="subtitle-h1">Токены MEGA будут отправлены на ваш адрес автоматически.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>* Не отправляйте токены с <b>кошельков биржи</b>, ваши токены будут потеряны. <br>Отправляйте только с кошельков, от которых <b>у вас есть seed-фраза</b>.</span>
                            </div>
                            <div class="buttons-block">
                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x7c4e6727ab2218affa6a30250b1148922bb7745c&chain=bsc&inputCurrency=0x55d398326f99059fF775485246999027B3197955" class="btn btn-icon" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/icon-pancake.png" alt="">или купите на PancakeSwap</a>
                                <a class="btn btn-outline btn-icon btn-disable"><img src="/img/metagarden-chain/icon-uniswap.png" alt="">Uniswap скоро...</a>
                            </div>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/early-access.avif 1x, /img/metagarden-chain/early-access@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/early-access.webp 1x, /img/metagarden-chain/early-access@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/early-access.png" srcset="/img/metagarden-chain/early-access@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
    </div>
</template>
