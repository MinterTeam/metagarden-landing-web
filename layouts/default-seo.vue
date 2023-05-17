<script>
import TheFooter from '~/layouts/_footer.vue';
import Language from '~/components/base/Language.vue';
// import Snackbar from '~/components/base/Snackbar.vue';

export default {
    components: {
        TheFooter,
        Language,
        // Snackbar,
    },
    head: {
        htmlAttrs: {
            class: 'default-layout',
        },
    },
};
</script>

<template>
    <div class="wrapper page-landing">
        <div class="u-container u-container--wide header__language-container">
            <Language/>
        </div>
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
                    <div class="article-promo">
                        <div class="article-promo-item">
                            <a href="/copytrading" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-2.avif 1x, /img/articles/promo/art-banner-2@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-2.webp 1x, /img/articles/promo/art-banner-2@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-2.png" srcset="/img/articles/promo/art-banner-2@2x.png 2x" alt="Earn up to 10% weekly by copying expert trades" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Earn up to 10% weekly by copying expert trades</div>
                            </a>
                        </div>
                        <div class="article-promo-item">
                            <a href="/how-earn-cryptocurrency-for-likes-retweets-on-twitter" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-1.avif 1x, /img/articles/promo/art-banner-1@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-1.webp 1x, /img/articles/promo/art-banner-1@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-1.png" srcset="/img/articles/promo/art-banner-1@2x.png 2x" alt="Get crypto for likes and retweets on Twitter" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Get crypto for likes and retweets on Twitter</div>
                            </a>
                        </div>
                        <div class="article-promo-item">
                            <a href="/referral-program" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-3.avif 1x, /img/articles/promo/art-banner-3@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-3.webp 1x, /img/articles/promo/art-banner-3@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-3.png" srcset="/img/articles/promo/art-banner-3@2x.png 2x" alt="Earn crypto with multilevel referral program" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Earn crypto with multilevel referral program</div>
                            </a>
                        </div>
                    </div>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <div class="article-promo">
                        <div class="article-promo-item">
                            <a href="/ru/copytrading" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-2.avif 1x, /img/articles/promo/art-banner-2@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-2.webp 1x, /img/articles/promo/art-banner-2@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-2.png" srcset="/img/articles/promo/art-banner-2@2x.png 2x" alt="Зарабатывай на портфелях экспертов до 10% в неделю" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Зарабатывай на портфелях экспертов до 10% в неделю</div>
                            </a>
                        </div>
                        <div class="article-promo-item">
                            <a href="/ru/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-1.avif 1x, /img/articles/promo/art-banner-1@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-1.webp 1x, /img/articles/promo/art-banner-1@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-1.png" srcset="/img/articles/promo/art-banner-1@2x.png 2x" alt="Получай крипту за лайки и твиты в Twitter" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Получай крипту за лайки и твиты</div>
                            </a>
                        </div>
                        <div class="article-promo-item">
                            <a href="/ru/referral-program" target="_blank">
                                <picture>
                                    <source srcset="/img/articles/promo/art-banner-3.avif 1x, /img/articles/promo/art-banner-3@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/articles/promo/art-banner-3.webp 1x, /img/articles/promo/art-banner-3@2x.webp 2x" type="image/webp">
                                    <img src="/img/articles/promo/art-banner-3.png" srcset="/img/articles/promo/art-banner-3@2x.png 2x" alt="Зарабатывай на реферальной программе" role="presentation"/>
                                </picture>
                                <div class="article-promo-item-title">Зарабатывай на реферальной программе</div>
                            </a>
                        </div>
                    </div>
                </template>
            </div>
        <nuxt/>

        <TheFooter/>
<!--        <Snackbar/>-->
    </div>
</template>
