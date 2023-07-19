<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Multilevel referral program', 'metagarden-chain.title-referral'));
        const description = this.$td('Invite your friends to Metagarden and get rewards for their token purchases.', 'metagarden-chain.menu-referral-description');

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
    <div class="metagarden-chain-referral">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <h1>{{ $td('Multilevel referral program', 'metagarden-chain.hello-title-referral')}}</h1>
                        <p class="subtitle-h1">{{ $td('Invite your friends to Metagarden and get rewards for their token purchases.', 'metagarden-chain.hello-description-referral')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('https://launchpad.metagarden.io', 'metagarden-chain.referral-button-url')" class="btn" target="_blank">{{ $td('Join now', 'metagarden-chain.referral-button')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/referral-program.avif 1x, /img/metagarden-chain/referral-program@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/referral-program.webp 1x, /img/metagarden-chain/referral-program@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/referral-program.png" srcset="/img/metagarden-chain/referral-program@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="levels">
            <div class="container">
                <h2>{{ $td('Referral reward levels:', 'metagarden-chain.referral-levels-title')}}</h2>
                <div class="levels-block">
                    <div class="levels-item">
                        <div class="levels-option">
                            {{ $td('Level', 'metagarden-chain.referral-levels-item')}} 1
                            <div class="levels-percent">25%</div>
                        </div>
                        <img src="/img/metagarden-chain/lvl-right.png" alt="">
                    </div>
                    <div class="levels-item">
                        <div class="levels-option">
                            {{ $td('Level', 'ref.levels-item')}} 2
                            <div class="levels-percent">12%</div>
                        </div>
                        <img src="/img/metagarden-chain/lvl-right.png" alt="">
                    </div>
                    <div class="levels-item">
                        <div class="levels-option">
                            {{ $td('Level', 'metagarden-chain.referral-levels-item')}} 3
                            <div class="levels-percent">8%</div>
                        </div>
                        <img src="/img/metagarden-chain/lvl-right.png" alt="">
                    </div>
                    <div class="levels-item">
                        <div class="levels-option">
                            {{ $td('Level', 'metagarden-chain.referral-levels-item')}} 4
                            <div class="levels-percent">4%</div>
                        </div>
                        <img src="/img/metagarden-chain/lvl-right.png" alt="">
                    </div>
                    <div class="levels-item">
                        <div class="levels-option">
                            {{ $td('Level', 'metagarden-chain.referral-levels-item')}} 5
                            <div class="levels-percent">1%</div>
                        </div>
                    </div>
                </div>
                 <template v-if="$i18n.locale === 'en'">
                    <p>The program is valid for the purchase of token LAUNCHER.</p>
                 </template>
                 <template v-if="$i18n.locale === 'ru'">
                    <p>Программа действует для покупки токена LAUNCHER.</p>
                 </template>
            </div>
        </section>
    </div>
</template>
