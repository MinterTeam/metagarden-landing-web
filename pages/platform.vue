<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import Language from '~/components/base/Language.vue';

export default {
    layout: 'metagarden-chain',
    components: {
        Language,
    },
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
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link">
                            <a :href="$td('https://launchpad.metagarden.io/', 'metagarden-chain.menu-launchpad-url')" target="_blank" class="menu-link-a"><img src="/img/metagarden-chain/launchpad.svg" class="menu-icon" alt="Metagarden Chain Launchpad" width="16" height="16"/>{{ $td('Launchpad', 'metagarden-chain.menu-launchpad')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/', 'metagarden-chain.menu-evm-url')" class="menu-link-a">{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/early-access', 'metagarden-chain.menu-early-access-url')" class="menu-link-a">{{ $td('Early Access', 'metagarden-chain.menu-early-access')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')" class="menu-link-a">{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</a>
                        </div>
                        <div class="menu-link menu-link-active">
                            <a :href="$td('/platform', 'metagarden-chain.menu-platform-url')" class="menu-link-a">{{ $td('Gaming Platform', 'metagarden-chain.menu-platform')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank" class="menu-link-a">{{ $td('Testnet', 'metagarden-chain.menu-testnet')}}</a>
                        </div>
                        <div class="hamburger-menu">
                            <input id="menu__toggle" type="checkbox" />
                            <label class="menu__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <div class="menu__box">
                                <div class="sub-menu-item">
                                    <a :href="$td('https://launchpad.metagarden.io/', 'metagarden-chain.menu-launchpad-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Launchpad', 'metagarden-chain.menu-launchpad')}}</h4>
                                            <p>{{ $td('The Metagarden Chain launchpad.', 'metagarden-chain.menu-launchpad-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/', 'metagarden-chain.menu-evm-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</h4>
                                            <p>{{ $td('Fast blocks, high throughput, cheap smart contract deployment, cheap NFT minting, cheap transactions, API and SDK for game developers and many more features.', 'metagarden-chain.menu-evm-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/early-access', 'metagarden-chain.menu-early-access-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Early Access', 'metagarden-chain.menu-early-access')}}</h4>
                                            <p>{{ $td('Become Metagarden Chain Early adopter.', 'metagarden-chain.menu-early-access-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</h4>
                                            <p>{{ $td('METAGARDEN is the gas token that enables the work of the gaming EVM blockchain (Metagarden Сhain) and a utility token of the Metagarden platform, a play-to-earn platform with mini-games. The METAGARDEN token plays a key role in the functioning of the blockchain and its gaming platform.', 'metagarden-chain.menu-tokenomics-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</h4>
                                            <p>{{ $td('The GamerID will be released in the form of an NFT at the Metagarden Chain Mainnet launch, and the following privileges will be tied to your GamerID: the ability to receive free game tokens, various game bonuses, and income boosts on the platform.', 'metagarden-chain.menu-gamerid-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/platform', 'metagarden-chain.menu-platform-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Gaming Platform', 'metagarden-chain.menu-platform')}}</h4>
                                            <p>{{ $td('Powered by the fastest EVM blockchain, the Metagarden Gaming Platform offers developers the easiest way to seamlessly integrate crypto, NFTs and smart contracts into their games.', 'metagarden-chain.menu-platform-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Testnet', 'metagarden-chain.menu-testnet')}}</h4>
                                            <p>{{ $td('Meganet – the Metagarden Chain testnet.', 'metagarden-chain.menu-testnet-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Language/>
                </div>
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="321" height="58"/></div>
                        <h1>{{ $td('Metagarden gaming platform', 'metagarden-chain.platform-title')}}</h1>
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
                </div>
            </div>
        </header>
        <section class="games">
            <div class="container">
                <h2>{{ $td('We are on track to launch over 100 mini-games from various game developers by the end of 2023', 'metagarden-chain.platform-games-title')}}</h2>
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
