<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import LiteYoutube from '@/components/LiteYoutube.vue';

export default {
    components: {
        LiteYoutube,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Crypto Wallet That Helps You Earn', 'index.title'));
        const description = this.$td('Honee is the simplest crypto wallet that helps you earn through user-friendly, one-click money-making cards.', 'index.description');

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
    computed: {
        appUrl() {
            const localeSuffix = this.$i18n.locale === 'en' ? '' : this.$i18n.locale;
            return `https://my.honee.app/${localeSuffix}`;
        },
    },
};
</script>


<template>
    <div>
        <header>
            <!--<nav class="lang"><a href="#"><img src="/img/landing/en.svg" alt="" /></a></nav>-->
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/logo-honee.svg" alt="" width="122" height="24"/></div>
                        <h1>{{ $td('Crypto wallet that helps you earn', 'index.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('Honee is focused on helping people to earn crypto. Join today!', 'index.hello-description')}}</p>
                        <a class="btn" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Start Earning', 'index.hello-button')}}</a>
<!--                        <IndexSubscribeForm class="u-mb-15"/>-->
<!--                        <h3>{{ $td('Alpha Coming Sep 28, 2021', 'index.hello-coming')}}</h3>-->
                    </div>
                    <picture>
                        <source srcset="/img/landing/phone-mobile.avif 1x, /img/landing/phone-mobile@2x.avif 2x" type="image/avif" media="(max-width: 420px)">
                        <source srcset="/img/landing/phone-mobile.webp 1x, /img/landing/phone-mobile@2x.webp 2x" type="image/webp" media="(max-width: 420px)">
                        <source srcset="/img/landing/phone.avif 1x, /img/landing/phone@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/phone.webp 1x, /img/landing/phone@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/phone.png" srcset="/img/landing/phone@2x.png 2x" alt="" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="video">
            <div class="container">
                <h2>{{ $td('What’s Honee?', 'index.video-title')}}</h2>
                <p class="subtitle-h2">{{ $td('Hit the play button to learn more', 'index.video-description')}}</p>
                <!--
                <div class="video-youtube">
                    <iframe :src="$td('https://www.youtube.com/embed/fVRlrTYCtvg', 'index.video-url') + '?rel=0'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                </div>
                -->
                <LiteYoutube
                    class="video-youtube"
                    :video-id="$td('fVRlrTYCtvg', 'index.video-id')"
                />
            </div>
        </section>
        <section class="features">
            <div class="container">
                <h2>{{ $td('Сrypto wallet as it’s meant to be', 'index.features-title')}}</h2>
                <i18n tag="p" class="subtitle-h2" path="index.features-description">
                    <b><i>{{ $td('the', 'index.features-description-highlight')}}</i></b>
                </i18n>
                <p class="subtitle-h2"></p>
                <div class="features-items">
                    <div class="features-item">
                        <img src="/img/landing/f1.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Great to Earn With', 'index.features-item1-title')}}</h3>
                        <p>{{ $td('Crypto and decentralized finance are complicated, but we did all the hard work for you. Enjoy our one-click solutions applying the best earning tools to your balance.', 'index.features-item1-description')}}</p>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/f2.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Simple to Use', 'index.features-item2-title')}}</h3>
                        <p>{{ $td('Aside from helping you earn, our second-biggest goal is to provide a smooth user experience. Honee is simple and user-friendly at every step of the way.', 'index.features-item2-description')}}</p>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/f3.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Best to Trade At', 'index.features-item3-title')}}</h3>
                        <p>{{ $td('Buy, sell, and swap your Bitcoin, Ether, USDT, and other popular cryptos instantly & at the lowest fees in the industry.', 'index.features-item3-description')}}</p>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/f4.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Private & Secure', 'index.features-item4-title')}}</h3>
                        <p>{{ $td('You are the only person who can access your wallet. We don\'t store your seed phrase.', 'index.features-item4-description')}}</p>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/f5.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Fully Decentralized', 'index.features-item5-title')}}</h3>
                        <p>{{ $td('It means that only you own your money, not an exchange or a wallet. No one can stop or limit your actions.', 'index.features-item5-description')}}</p>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/f6.svg" alt="" width="64" height="64">
                        <h3>{{ $td('Rewarding', 'index.features-item6-title')}}</h3>
                        <p>{{ $td('Honee has rich programs to reward users for different actions. It’s the best way to win crypto or get it for free.', 'index.features-item6-description')}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="steps">
            <div class="container">
                <h2>{{ $td('Two simple steps to get started', 'index.steps-title')}}</h2>
                <p class="subtitle-h2">{{ $td('Takes a few minutes, tops', 'index.steps-description')}}</p>
                <div class="steps-items">
                    <div class="steps-item">
                        <div class="steps-icon">
                            <img src="/img/landing/step1.svg" alt="" width="64" height="64">
                            <span class="badge">1</span>
                        </div>
                        <h3>{{ $td('Create a new wallet', 'index.steps-step1')}}</h3>
                    </div>
                    <img src="/img/landing/arrow-right.svg" class="arrow" alt="">
                    <div class="steps-item">
                        <div class="steps-icon">
                            <img src="/img/landing/step2.svg" alt="" width="64" height="64">
                            <span class="badge">2</span>
                        </div>
                        <h3>{{ $td('Top it up', 'index.steps-step2')}}</h3>
                    </div>
                </div>
                <a class="btn btn-2 u-mt-40" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Get Started', 'index.steps-button')}}</a>
            </div>
        </section>
        <section class="bee">
            <div class="container">
                <div class="bee-block">
                    <div class="bee-logo">
                        <img src="/img/landing/bee-logo.svg" alt="BEE token">
                    </div>
                    <div class="bee-content">
                        <h2>{{ $td('BEE Token', 'index.bee-title')}}</h2>
                        <p>{{ $td('Honee wallet token, or BEE, is a simple BEP-20 utility token that provides a wide range of benefits and incentives to Honee wallet users.', 'index.bee-p1')}}</p>
                        <p>{{ $td('BEE token holders unlock a variety of benefits when using Honee wallet, including rewards for actions, boosted yield for earning options in the app, access to premium features, and discounts on the use of DeFi services.', 'index.bee-p2')}} 
                            <template v-if="$i18n.locale === 'en'">
                                Learn more about the <a href="/bee" target="_blank">BEE token and its utility</a>.
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                Узнайте больше о <a href="/ru/bee" target="_blank">BEE и его использовании</a>.
                            </template>
                        </p>
                        <div class="bee-buttons">
                            <a href="https://pancakeswap.finance/swap?outputCurrency=0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" class="btn btn-3" target="_blank" rel="nofollow"><img src="/img/landing/bee-pancake.svg" alt="Buy BEE on Pancake"> {{ $td('Buy on PancakeSwap', 'index.bee-pancake')}}</a>
                            <a :href="$td('https://medium.com/@honeeapp/bee-staking-2-yield-up-to-20-in-apr-40a967eee243', 'index.bee-stake-url')" class="btn btn-4" target="_blank"><img src="/img/honee.svg" alt="Stake BEE and earn"> {{ $td('Stake BEE', 'index.bee-stake')}}</a>
                            <a :href="$td('https://honee.app/farming-pancakeswap-bnb-bee', 'index.bee-farming-url')" class="btn btn-4" target="_blank"><img src="/img/bsc-icon.svg" alt="" class="pool-pair-icon"> <img src="/img/honee.svg" alt="" class="pool-pair-icon pool-pair-icon2"> {{ $td('Farming', 'index.bee-farming')}}</a>
                            <!--<div class="bee-buttons-links">
                                <a href="https://www.dextools.io/app/bsc/pair-explorer/0xfba050305315d34ac7b0ccedf3c624766ce3f10c" target="_blank" rel="nofollow"><img src="/img/landing/bee-dextools.png" alt="BEE on Dextools" srcset="/img/landing/bee-dextools@2x.png 2x"> DexTools</a>
                                <a href="https://bscscan.com/token/0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" target="_blank" rel="nofollow"><img src="/img/landing/bee-bsc.png" alt="BEE on bscscan" srcset="/img/landing/bee-bsc@2x.png 2x">BSC</a>
                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
