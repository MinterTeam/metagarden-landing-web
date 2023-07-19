<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Metagarden Gaming Platform — The Metagarden Chain', 'metagarden-chain.title-platform'));
        const description = this.$td('Powered by the fastest EVM blockchain, the Metagarden Gaming Platform offers developers the easiest way to seamlessly integrate crypto, NFTs and smart contracts into their games.', 'metagarden-chain.menu-platform-description');

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
    <div class="metagarden-chain-platform">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <h1>{{ $td('Gaming platform', 'metagarden-chain.platform-title')}}</h1>
                        <template v-if="$i18n.locale === 'en'">
                            <p class="subtitle-h1"><b>The future has arrived!</b> Almost any internet user can now become a game developer without having any programming skills, just by using ChatGPT-like technologies to create mini-games in a matter of days.</p>
                            <p class="subtitle-h1">Powered by the fastest and most cost-effective EVM blockchain, the Metagarden Gaming Platform offers game developers the easiest way to seamlessly integrate crypto, NFTs and smart contracts into their games. Developers will also be able to release their own game tokens or use popular ones, and easily integrate a simple custom wallet with crypto deposits and withdrawals for the players.</p>
                            <p class="subtitle-h1">What's important. Players won't have to deal with any blockchain mumbo jumbo like Meta Mask, gas for transactions, unlocks, permissions and other confusing stuff.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p class="subtitle-h1"><b>Будущее наступило!</b> Теперь каждый пользователь интернета может стать разработчиком игр, не имея навыков программирования. Для создания мини-игр достаточно будет просто использовать подобные ChatGPT технологии.</p>
                            <p class="subtitle-h1">Платформа Metagarden, работающая на самом быстром и экономически эффективном игровом EVM-блокчейне, предлагает новому поколению game-разработчиков самый простой способ интеграции криптовалют, NFT и смарт-контрактов в свои игры.</p>
                            <p class="subtitle-h1">Разработчики также смогут выпускать собственные игровые токены или использовать популярные, легко интегрировать простой пользовательский кошелек с депозитом и выводом средств для своих игроков.</p>
                            <p class="subtitle-h1">Особенно важно! Игрокам не придется иметь дело с какими-либо блокчейн-штучками, такими как Metamask, газ для транзакций, аппрувы, разрешения и другие запутанные вещи.</p>
                        </template>
                        <div class="buttons-block buttons-block-left">
                            <a href="https://t.me/metagardenbot" class="btn" target="_blank">{{ $td('Play games', 'metagarden-chain.play-button')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/platform.avif 1x, /img/metagarden-chain/platform@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/platform.webp 1x, /img/metagarden-chain/platform@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/platform.png" srcset="/img/metagarden-chain/platform@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="games">
            <div class="container">
                <h2>{{ $td('We are on track to launch over 100 crypto games for Telegram in 2023-2024', 'metagarden-chain.platform-games-title')}}</h2>
                <div class="games-grid">
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-miner.avif 1x, /img/metagarden-chain/game-miner@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-miner.webp 1x, /img/metagarden-chain/game-miner@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-miner.jpg" srcset="/img/metagarden-chain/game-miner@2x.jpg 2x" alt="Metagarden game Lucky Miner" class="games-image" role="presentation"/>
                        </picture>
                        <p>Lucky Miner</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-magic-box.avif 1x, /img/metagarden-chain/game-magic-box@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-magic-box.webp 1x, /img/metagarden-chain/game-magic-box@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-magic-box.jpg" srcset="/img/metagarden-chain/game-magic-box@2x.jpg 2x" alt="Metagarden game Wonder" class="games-image" role="presentation"/>
                        </picture>
                        <p>Wonder </p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-snatch.avif 1x, /img/metagarden-chain/game-snatch@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-snatch.webp 1x, /img/metagarden-chain/game-snatch@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-snatch.png" srcset="/img/metagarden-chain/game-snatch@2x.png 2x" alt="Metagarden game Snatch" class="games-image" role="presentation"/>
                        </picture>
                        <p>Snatch</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-perfect-city.avif 1x, /img/metagarden-chain/game-perfect-city@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-perfect-city.webp 1x, /img/metagarden-chain/game-perfect-city@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-perfect-city.jpg" srcset="/img/metagarden-chain/game-perfect-city@2x.jpg 2x" alt="Metagarden game Perfect City NFT" class="games-image" role="presentation"/>
                        </picture>
                        <p>Perfect City NFT</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-carrots-mafia.avif 1x, /img/metagarden-chain/game-carrots-mafia@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-carrots-mafia.webp 1x, /img/metagarden-chain/game-carrots-mafia@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-carrots-mafia.jpg" srcset="/img/metagarden-chain/game-carrots-mafia@2x.jpg 2x" alt="Metagarden game Carrots Mafia" class="games-image" role="presentation"/>
                        </picture>
                        <div class="card__badge card__badge--coming-soon" bis_skin_checked="1">{{ $td('Coming soon', 'metagarden-chain.coming-soon')}}</div>
                        <p>Carrots Mafia</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-chess.avif 1x, /img/metagarden-chain/game-chess@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-chess.webp 1x, /img/metagarden-chain/game-chess@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-chess.jpg" srcset="/img/metagarden-chain/game-chess@2x.jpg 2x" alt="Metagarden game Chess" class="games-image" role="presentation"/>
                        </picture>
                        <div class="card__badge card__badge--coming-soon" bis_skin_checked="1">{{ $td('Coming soon', 'metagarden-chain.coming-soon')}}</div>
                        <p>Chess</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-squid.avif 1x, /img/metagarden-chain/game-squid@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-squid.webp 1x, /img/metagarden-chain/game-squid@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-squid.png" srcset="/img/metagarden-chain/game-squid@2x.png 2x" alt="Metagarden game Squid Game 456" class="games-image" role="presentation"/>
                        </picture>
                        <div class="card__badge card__badge--coming-soon" bis_skin_checked="1">{{ $td('Coming soon', 'metagarden-chain.coming-soon')}}</div>
                        <p>Squid Game 456</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-poker.avif 1x, /img/metagarden-chain/game-poker@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-poker.webp 1x, /img/metagarden-chain/game-poker@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-poker.png" srcset="/img/metagarden-chain/game-poker@2x.png 2x" alt="Metagarden game Poker (DAO)" class="games-image" role="presentation"/>
                        </picture>
                        <div class="card__badge card__badge--coming-soon" bis_skin_checked="1">{{ $td('Coming soon', 'metagarden-chain.coming-soon')}}</div>
                        <p>Poker (DAO)</p>
                    </div>
                    <div class="games-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/game-hackito.avif 1x, /img/metagarden-chain/game-hackito@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/game-hackito.webp 1x, /img/metagarden-chain/game-hackito@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/game-hackito.png" srcset="/img/metagarden-chain/game-hackito@2x.png 2x" alt="Metagarden game Hackito" class="games-image" role="presentation"/>
                        </picture>
                        <div class="card__badge card__badge--coming-soon" bis_skin_checked="1">{{ $td('Coming soon', 'metagarden-chain.coming-soon')}}</div>
                        <p>Hackito</p>
                    </div>
                </div>
            </div>
        </section>
        <!--<section class="use">
            <div class="container">
                <h2>Platform Features</h2>
                <div class="use-block">
                    <div class="use-items">
                        <div class="use-item">
                            <h4 class="use-item-h4">123</h4>
                            <p>123</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">123</h4>
                            <p>123</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">123</h4>
                            <p>123</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
    </div>
</template>
