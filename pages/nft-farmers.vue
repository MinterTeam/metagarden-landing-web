<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Unique NFT Farmers', 'metagarden-chain.farmers-title'));
        const description = this.$td('Metagarden games earn commissions, farmer-bots collect them and send them to you.', 'metagarden-chain.farmers-description');

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
                class: 'promo-landing farmers',
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
                        <h1>{{ $td('Unique NFT Farmers', 'metagarden-chain.farmers-h1')}}</h1>
                        <p class="no-margin">{{ $td('Metagarden games earn commissions, farmer-bots collect them and send them to you.', 'metagarden-chain.farmers-subtitle')}}</p>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/nft-farmers.avif 1x, /img/metagarden-chain/nft-farmers@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/nft-farmers.webp 1x, /img/metagarden-chain/nft-farmers@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/nft-farmers.png" srcset="/img/metagarden-chain/nft-farmers@2x.png 2x" alt="Metagarden NFT Farmers" class="hello-image" role="presentation"/>
                    </picture>
                </div>
                <div class="strip">
                    <div class="strip-item">
                        <div class="strip-item-left">$100</div>
                        <div class="strip-item-right">
                            <template v-if="$i18n.locale === 'en'">Cost <br>per bot</template>
                            <template v-if="$i18n.locale === 'ru'">Стоимость <br>одного бота</template>
                        </div>
                    </div>
                    <div class="strip-item-arrow">→</div>
                    <div class="strip-item">
                        <div class="strip-item-left">$200</div>
                        <div class="strip-item-right">
                            <template v-if="$i18n.locale === 'en'">Earn every <br>one of them *</template>
                            <template v-if="$i18n.locale === 'ru'">Принесет <br>каждый из них *</template>
                        </div>
                    </div>
                </div>
                <div class="buttons-block">
                    <a :href="$td('https://t.me/metagardenbot?start=farmersru', 'metagarden-chain.farmers-buy-button-url')" class="btn btn-rounded btn-big" target="_blank">{{ $td('Buy NFT Farmer at Launchpad', 'metagarden-chain.farmers-buy-button')}}</a>
                </div>
                <p class="text-mini">{{ $td('* Production period of 6-18 months depending on the game selected.', 'metagarden-chain.farmers-period')}}</p>
            </div>
        </header>
        <section class="farmer-bots-section">
            <div class="container">
                <div class="strip-center">
                    <div class="strip">
                        <div class="strip-item">
                            <template v-if="$i18n.locale === 'en'">
                                <div class="strip-item-left">Total 111</div>
                                <div class="strip-item-right">NFT <br>bots</div>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <div class="strip-item-left">Всего 111</div>
                                <div class="strip-item-right">NFT <br>ботов</div>
                            </template>
                        </div>
                        <div class="strip-item">
                            <template v-if="$i18n.locale === 'en'">
                                <div class="strip-item-left">20</div>
                                <div class="strip-item-right">Unique <br>designs</div>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <div class="strip-item-left">20</div>
                                <div class="strip-item-right">Уникальных <br>дизайнов</div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="farmer-bots">
                    <picture>
                        <source srcset="/img/metagarden-chain/farmer-bots.avif 1x, /img/metagarden-chain/farmer-bots@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/farmer-bots.webp 1x, /img/metagarden-chain/farmer-bots@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/farmer-bots.png" srcset="/img/metagarden-chain/farmer-bots@2x.png 2x" alt="Metagarden NFT Farmers" class="" role="presentation"/>
                    </picture>
                </div>
                <div class="block-center">
                    <h2>{{ $td('Which one will you get?', 'metagarden-chain.farmers-which-one')}}</h2>
                    <div class="buttons-block justify-center">
                        <a :href="$td('https://t.me/metagardenbot?start=farmersru', 'metagarden-chain.farmers-buy-button-url')" class="btn btn-rounded btn-big" target="_blank">{{ $td('Buy NFT Farmer at Launchpad', 'metagarden-chain.farmers-buy-button')}}</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
