<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import Language from '~/components/base/Language.vue';
import BaseButtonCopyIcon from '~/components/base/BaseButtonCopyIcon.vue';

export default {
    layout: 'metagarden-chain',
    components: {
        BaseButtonCopyIcon,
        Language,
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
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link">
                            <a :href="$td('https://launchpad.metagarden.io/', 'metagarden-chain.menu-launchpad-url')" target="_blank" class="menu-link-a"><img src="/img/metagarden-chain/launchpad.svg" class="menu-icon" alt="Metagarden Chain Launchpad" width="16" height="16"/>{{ $td('Launchpad', 'metagarden-chain.menu-launchpad')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/', 'metagarden-chain.menu-evm-url')" class="menu-link-a">{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</a>
                        </div>
                        <div class="menu-link menu-link-active">
                            <a :href="$td('/buy-tokens', 'metagarden-chain.menu-early-access-url')" class="menu-link-a">{{ $td('Buy Tokens', 'metagarden-chain.menu-early-access')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/wallet', 'metagarden-chain.menu-wallet-url')" class="menu-link-a">{{ $td('Wallet', 'metagarden-chain.menu-wallet')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>
                        <!--<div class="menu-link">
                            <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')" class="menu-link-a">{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</a>
                        </div>-->
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
                                    <a :href="$td('/wallet', 'metagarden-chain.menu-wallet-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-wallet.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Wallet', 'metagarden-chain.menu-wallet')}}</h4>
                                            <p>{{ $td('To receive +100% bonus and airdrops, you must register your wallet and have at least 1 MEGANET token on your balance.', 'metagarden-chain.menu-wallet-description')}}</p>
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
                                            <p>{{ $td('MEGA is the gas token empowering the work of gaming blockchain (Metagarden Chain) and a utility token of Metagarden, the play-to-earn Platform with mini-games. It plays a key role in blockchain and platform functionality.', 'metagarden-chain.menu-tokenomics-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <!--<div class="sub-menu-item">
                                    <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/menu-id.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</h4>
                                            <p>{{ $td('The GamerID will be released in the form of an NFT at the Metagarden Chain Mainnet launch, and the following privileges will be tied to your GamerID: the ability to receive free game tokens, various game bonuses, and income boosts on the platform.', 'metagarden-chain.menu-gamerid-description')}}</p>
                                        </div>
                                    </a>
                                </div>-->
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
                            <h1>Buy tokens before Mainnet launch</h1>
                            <p class="subtitle-h1">We issued MEGA coins on <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> and <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> for those who want to buy the Metagarden Chain coins before the Mainet launch.</p>
                            <div class="buy-price-block">
                                <h3>Early stages price</h3>
                                <div class="buy-price-value">1 MEGA = $1</div>
                                <small>Minimum purchase of $100</small>
                            </div>
                            <p class="subtitle-h1">To buy MEGA coins simply send your ETH, BNB or USDT tokens to this address in either Ethereum or BNB Smart Chian︎:</p>
                            <div class="buy-address-block">
                                <div class="buy-address">0xfc25e5AB0CaA286bC1Ba1E3C1492e72f827D68A2</div>
                                <client-only>
                                    <BaseButtonCopyIcon copy-text="0xfc25e5AB0CaA286bC1Ba1E3C1492e72f827D68A2" :is-inline="true"/>
                                </client-only>
                            </div>
                            <p class="subtitle-h1">The MEGA coins will be send back to your address automatically.</p>
                            <div class="buttons-block">
                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x7c4e6727ab2218affa6a30250b1148922bb7745c&chain=bsc" class="btn btn-icon" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/icon-pancake.png" alt="">or Buy on PancakeSwap</a>
                                <a class="btn btn-outline btn-icon btn-disable"><img src="/img/metagarden-chain/icon-uniswap.png" alt="">Uniswap coming soon</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Купите токены до запуска мейннета</h1>
                            <p class="subtitle-h1">Мы выпустили токены MEGA в <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> и <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> для тех, кто хочет купить токены Metagarden Chain до запуска основной сети.</p>
                            <div class="buy-price-block">
                                <h3>Цена на ранних стадиях</h3>
                                <div class="buy-price-value">1 MEGA = $1</div>
                                <small>Минимальная покупка от $100</small>
                            </div>
                            <p class="subtitle-h1">Чтобы купить токены MEGA, просто отправьте свои монеты ETH, BNB или USDT на этот адрес в Ethereum или BNB Smart Chian︎:</p>
                            <div class="buy-address-block">
                                <div class="buy-address">0xfc25e5AB0CaA286bC1Ba1E3C1492e72f827D68A2</div>
                                <button type="button" ><img src="/img/metagarden-chain/icon-copy.svg" alt=""></button>
                            </div>
                            <p class="subtitle-h1">Токены MEGA будут отправлены на ваш адрес автоматически.</p>
                            <div class="buttons-block">
                                <a href="https://pancakeswap.finance/swap?outputCurrency=0x7c4e6727ab2218affa6a30250b1148922bb7745c&chain=bsc" class="btn btn-icon" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/icon-pancake.png" alt="">или купите на PancakeSwap</a>
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
