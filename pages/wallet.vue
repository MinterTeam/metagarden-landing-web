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
        const title = getTitle(this.$td('Get +100% bonus and Games Airdrops — Metagarden Chain', 'metagarden-chain.title-wallet'));
        const description = this.$td('In order to receive +100% bonus and to be eligible for airdrops, you must have at least 1 MEGANET token in your wallet.', 'metagarden-chain.menu-wallet-description');

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
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link">
                            <a :href="$td('https://launchpad.metagarden.io/', 'metagarden-chain.menu-launchpad-url')" target="_blank" class="menu-link-a"><img src="/img/metagarden-chain/launchpad.svg" class="menu-icon" alt="Metagarden Chain Launchpad" width="16" height="16"/>{{ $td('Launchpad', 'metagarden-chain.menu-launchpad')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/', 'metagarden-chain.menu-evm-url')" class="menu-link-a">{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/buy-tokens', 'metagarden-chain.menu-early-access-url')" class="menu-link-a">{{ $td('Buy Tokens', 'metagarden-chain.menu-early-access')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')" class="menu-link-a">{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/platform', 'metagarden-chain.menu-platform-url')" class="menu-link-a">{{ $td('Gaming Platform', 'metagarden-chain.menu-platform')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/influencer', 'metagarden-chain.menu-influencer-url')" class="menu-link-a">{{ $td('For Influencers', 'metagarden-chain.menu-influencer')}}</a>
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
                                            <img src="/img/metagarden-chain/menu-launchpad.svg" alt="">
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
                                            <img src="/img/metagarden-chain/menu-blockchain.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</h4>
                                            <p>{{ $td('5 second blocks with immediate finality, high throughput, low-cost transactions, cross-chain compatibility with top EVMs, API and SDK for game developers.', 'metagarden-chain.menu-evm-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/buy-tokens', 'metagarden-chain.menu-early-access-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-buy.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Buy Tokens', 'metagarden-chain.menu-early-access')}}</h4>
                                            <p>{{ $td('Become Metagarden Chain Early adopter.', 'metagarden-chain.menu-early-access-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-tokenomics.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</h4>
                                            <p>{{ $td('METAGARDEN is the gas token empowering the work of gaming blockchain (Metagarden Chain) and a utility token of Metagarden, the play-to-earn Platform with mini-games. It plays a key role in blockchain and platform functionality.', 'metagarden-chain.menu-tokenomics-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-id.svg" alt="">
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
                                            <img src="/img/metagarden-chain/menu-games.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Gaming Platform', 'metagarden-chain.menu-platform')}}</h4>
                                            <p>{{ $td('Powered by the fastest EVM blockchain, the Metagarden Gaming Platform offers developers the easiest way to seamlessly integrate crypto, NFTs and smart contracts into their games.', 'metagarden-chain.menu-platform-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/influencer', 'metagarden-chain.menu-influencer-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-infl.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('For Influencers', 'metagarden-chain.menu-influencer')}}</h4>
                                            <p>{{ $td('Partner with the Metagarden platform in its early stages!', 'metagarden-chain.menu-influencer-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-test.svg" alt="">
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
                        <template v-if="$i18n.locale === 'en'">
                            <h1>Register wallet, <br>get +100% bonus and Games Airdrops</h1>
                            <p class="subtitle-h1">In order to receive +100% bonus and to be eligible for airdrops, you must have at least 1 MEGANET token in your wallet. MEGANET are pre-launch tokens can be bought in the wallet after registration.</p>
                            <p class="subtitle-h1">For every 1 MEGANET token, you will receive 2 MEGA coins (native Metagarden Chain coins) at the mainnet launch.</p>
                            <div class="buttons-block">
                                <a href="https://launchpad.metagarden.io" class="btn" target="_blank">Register wallet</a>
                                <a href="/" class="btn btn-outline">About project</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Зарегистрируйте кошелек, <br>получите бонус +100%</h1>
                            <p class="subtitle-h1">Чтобы получить +100% бонус и иметь право на аирдропы, в вашем кошельке должен быть хотя бы 1 токен MEGANET. MEGANET — это прелонч токены, которые можно купить в кошельке после регистрации.</p>
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
