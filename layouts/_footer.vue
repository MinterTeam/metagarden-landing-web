<script>
export default {

};
</script>

<template>
    <div>
        <section class="follow">
            <div class="container">
                <h2>{{ $td('Follow us', 'index.follow-title')}}</h2>
                <div class="socials">
                    <a href="https://twitter.com/HoneeApp" target="_blank">
                        <img src="/img/landing/twitter.svg" width="64" height="64" loading="lazy" alt="Twitter">
                    </a>
                    <a href="https://t.me/HoneeApp" target="_blank">
                        <img src="/img/landing/telegram.svg" width="64" height="64" loading="lazy" alt="Telegram">
                    </a>
                    <a href="https://www.youtube.com/c/honeeapp" target="_blank">
                        <img src="/img/landing/youtube.svg" width="64" height="64" loading="lazy" alt="Youtube">
                    </a>
                    <!--<a href="https://www.facebook.com/honeeapp" target="_blank">
                        <img src="/img/landing/facebook.svg" width="64" height="64" loading="lazy" alt="Facebook">
                    </a>-->
                    <a href="https://medium.com/@honeeapp" target="_blank">
                        <img src="/img/landing/medium.svg" width="64" height="64" loading="lazy" alt="Medium">
                    </a>
                    <a href="https://github.com/MinterTeam/honee-app-web" target="_blank">
                        <img src="/img/landing/github.svg" width="64" height="64" loading="lazy" alt="Github">
                    </a>
                    <!--<a href="https://www.instagram.com/honee_app/" target="_blank">
                        <img src="/img/landing/instagram.svg" width="64" height="64" loading="lazy" alt="Instagram">
                    </a>-->
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="footer__disclaimer">
                    <h3>{{ $td('Disclaimer', 'index.footer-disclaimer-title')}}</h3>
                    <p>{{ $td('Operations with virtual assets pose intrinsic risks, including the risk of monetary loss. We strongly suggest you seek professional advice before engaging in any operations with virtual assets.', 'index.footer-disclaimer-p1')}}</p>
                    <p>{{ $td('We do not give any warranties, whether express or implied, as to the suitability or usability of the service, its software or any of its content. We will not be liable for any loss, whether such loss is direct, indirect, special or consequential, suffered by any party as a result of their use of the Honee service, its content and functionalities.', 'index.footer-disclaimer-p2')}}</p>
                    <p>{{ $td('Intra-blockchain fees you pay for transactions are not the payment for using the Honee service.', 'index.footer-disclaimer-p3')}}</p>
                    <p>{{ $td('Should you encounter any bugs, glitches, lack of functionality or other problems on the Honee service, please email us at', 'index.footer-disclaimer-p4')}} <a href="mailto:hello@honee.app" class="link--default-black">hello@honee.app</a>.</p>
                </div>
                <div class="footer__menu u-grid u-grid--medium u-grid--vertical-margin--medium">
                    <div class="u-cell u-cell--auto">
                        <h3 class="footer__caption">{{ $td('Useful Information', 'index.footer-menu-useful')}}</h3>
                        <div class="footer__links-grid u-grid u-grid--vertical-margin--small">
                            <div class="footer__links-cell u-cell u-cell--auto">
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-bitcoin-2022')">{{ $td('Buy Bitcoin', 'index.footer-link-box-buy-bitcoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-ethereum-2022')">{{ $td('Buy Ethereum', 'index.footer-link-box-buy-ethereum')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-usdt-2022')">{{ $td('Buy USDT', 'index.footer-link-box-buy-usdt')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-1inch-2022')">{{ $td('Buy 1INCH', 'index.footer-link-box-buy-1inch')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-mvi-metaverse-index-2022')">{{ $td('Buy MVI', 'index.footer-link-box-buy-mvi')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-toncoin-2022')">{{ $td('Buy TON', 'index.footer-link-box-buy-toncoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-shib-2022')">{{ $td('Buy SHIB', 'index.footer-link-box-buy-shib')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-uni-2022')">{{ $td('Buy UNI', 'index.footer-link-box-buy-uni')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-matic-2022')">{{ $td('Buy MATIC', 'index.footer-link-box-buy-matic')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-doge-2022')">{{ $td('Buy DOGE', 'index.footer-link-box-buy-doge')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-buy-cake-2022')">{{ $td('Buy CAKE', 'index.footer-link-box-buy-cake')}}</a>
                            </div>
                            <div class="footer__links-cell u-cell u-cell--auto">
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-bitcoin-2022')">{{ $td('Earn Bitcoin', 'index.footer-link-box-earn-bitcoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-ethereum-2022')">{{ $td('Earn Ethereum', 'index.footer-link-box-earn-ethereum')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-usdt-2022')">{{ $td('Earn USDT', 'index.footer-link-box-earn-usdt')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-1inch-2022')">{{ $td('Earn 1INCH', 'index.footer-link-box-earn-1inch')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-mvi-metaverse-index-2022')">{{ $td('Earn MVI', 'index.footer-link-box-earn-mvi')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-toncoin-2022')">{{ $td('Earn TON', 'index.footer-link-box-earn-toncoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-shib-2022')">{{ $td('Earn SHIB', 'index.footer-link-box-earn-shib')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-uni-2022')">{{ $td('Earn UNI', 'index.footer-link-box-earn-uni')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-matic-2022')">{{ $td('Earn MATIC', 'index.footer-link-box-earn-matic')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-doge-2022')">{{ $td('Earn DOGE', 'index.footer-link-box-earn-doge')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/how-to-earn-cake-2022')">{{ $td('Earn CAKE', 'index.footer-link-box-earn-cake')}}</a>
                            </div>
                            <div class="footer__links-cell u-cell u-cell--auto">
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-bitcoin-wallet-2022')">{{ $td('Bitcoin Wallet', 'index.footer-link-box-wallet-bitcoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-ethereum-wallet-2022')">{{ $td('Ethereum Wallet', 'index.footer-link-box-wallet-ethereum')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-usdt-wallet-2022')">{{ $td('USDT Wallet', 'index.footer-link-box-wallet-usdt')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-1inch-wallet-2022')">{{ $td('1INCH Wallet', 'index.footer-link-box-wallet-1inch')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-mvi-metaindex-wallet-2022')">{{ $td('MVI Wallet', 'index.footer-link-box-wallet-mvi')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-toncoin-wallet-2022')">{{ $td('TON Wallet', 'index.footer-link-box-wallet-toncoin')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-shib-wallet-2022')">{{ $td('SHIB Wallet', 'index.footer-link-box-wallet-shib')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-uni-wallet-2022')">{{ $td('UNI Wallet', 'index.footer-link-box-wallet-uni')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-matic-wallet-2022')">{{ $td('MATIC Wallet', 'index.footer-link-box-wallet-matic')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-doge-wallet-2022')">{{ $td('DOGE Wallet', 'index.footer-link-box-wallet-doge')}}</a>
                                <a class="link--default-black" :href="$i18nGetPreferredPath('/best-cake-wallet-2022')">{{ $td('CAKE Wallet', 'index.footer-link-box-wallet-cake')}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer__other u-cell u-cell--auto">
                        <h3 class="footer__caption">{{ $td('About Honee', 'index.footer-menu-about')}}</h3>
                        <div class="footer__links-cell">
                            <a class="link--default-black" href="/legal/terms.pdf" target="_blank">Terms</a>
                            <a class="link--default-black" href="/legal/privacy.pdf" target="_blank">Privacy</a>
                            <a class="link--default-black" href="mailto:hello@honee.app" target="_blank">Contact</a>
                        </div>
                        <h3 class="footer__caption">{{ $td('Other', 'index.footer-menu-other')}}</h3>
                        <div class="footer__links-cell">
                            <a class="link--default-black" :href="$i18nGetPreferredPath('/metagarden')">{{ $td('Metagarden', 'index.footer-link-metagarden')}}</a>
                            <a class="link--default-black" :href="$i18nGetPreferredPath('/portfolio-battle')">{{ $td('Portfolio Battle', 'index.footer-link-portfolio-battle')}}</a>
                            <a class="link--default-black" :href="$i18nGetPreferredPath('/referral-program')">{{ $td('Referral program', 'index.footer-link-ref')}}</a>
                            <a class="link--default-black" :href="$i18nGetPreferredPath('/copytrading')">{{ $td('Copy Trading', 'index.footer-link-copytrading')}}</a>
                            <a class="link--default-black" :href="$i18nGetPreferredPath('/how-earn-cryptocurrency-for-likes-retweets-on-twitter')">{{ $td('Crypto for likes', 'index.footer-link-likes')}}</a>
                        </div>
                    </div>
                    <div class="footer__contacts u-cell u-cell--auto">
                        <h3 class="footer__caption">{{ $td('Contacts', 'index.footer-menu-contacts')}}</h3>
                        GROM R&D LIMITED, COMPANY NUMBER 12444209, 27 OLD GLOUCESTER STREET, LONDON, UNITED KINGDOM, WC1N 3AX.<br>
                        <a href="mailto:hello@honee.app" class="link--default-black">hello@honee.app</a>
                    </div>
                </div>
                <nuxt-link class="footer__logo" :to="$i18nGetPreferredPath('/')"><img src="/img/logo-honee.svg" alt="" width="82" height="16"/></nuxt-link>
                <div class="footer__copyright">
                    Copyright © 2023 Grom R&D Limited.<br>
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    </div>
</template>
