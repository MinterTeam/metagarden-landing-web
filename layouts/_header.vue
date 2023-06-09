<script>
import Language from '~/components/base/Language.vue';

export default {
    components: {
        Language,
    },
};
</script>

<template>
    <div>
        <nav class="navbar">
            <div class="navbar-level-1">
                <div class="navbar-left">
                    <div class="navbar-logo">
                        <a :href="$td('/', 'metagarden-chain.menu-evm-url')"><img src="/img/metagarden-chain/meganet-logo.svg" width="29" height="32" alt="Metagarden Chain"></a>
                    </div>
                    <div class="navbar-top-menu">
                        <a href="http://t.me/metagardenbot?start=start" class="menu-link-a" target="_blank">{{ $td('Play Games', 'metagarden-chain.menu-play')}}</a>
                        <a :href="$td('/gamerid', 'metagarden-chain.menu-gamerid-url')" class="menu-link-a">{{ $td('GamerID', 'metagarden-chain.menu-gamerid')}}</a>
                        <a :href="$td('/platform', 'metagarden-chain.menu-platform-url')" class="menu-link-a">{{ $td('Gaming Platform', 'metagarden-chain.menu-platform')}}</a>
                        <a :href="$td('/influencer', 'metagarden-chain.menu-influencer-url')" class="menu-link-a">{{ $td('For Influencers', 'metagarden-chain.menu-influencer')}}</a>
                    </div>
                </div>
                <div class="navbar-right">
                    <div class="navbar-social">
                        <a :href="$td('https://discord.gg/CvyR3h3BQV', 'metagarden-chain.social-discord')" target="_blank"><img src="/img/metagarden-chain/icon-discord.svg" alt="Metagarden Chain Discord"></a>
                        <a :href="$td('https://www.youtube.com/@metagarden-chain', 'metagarden-chain.social-youtube')" target="_blank"><img src="/img/metagarden-chain/icon-youtube.svg" alt="Metagarden Chain Youtube"></a>
                        <a :href="$td('https://twitter.com/metagardengames', 'metagarden-chain.social-twitter')" target="_blank"><img src="/img/metagarden-chain/icon-twitter.svg" alt="Metagarden Chain Twitter"></a>
                        <a :href="$td('https://t.me/metagarden', 'metagarden-chain.social-telegram')" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="Metagarden Chain Telegram"></a>
                    </div>
                    <Language/>
                </div>
            </div>
            <div class="navbar-level-2">
                <div class="container">
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
                            <a :href="$td('/wallet', 'metagarden-chain.menu-wallet-url')" class="menu-link-a">{{ $td('Wallet', 'metagarden-chain.menu-wallet')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank" class="menu-link-a">{{ $td('Testnet', 'metagarden-chain.menu-testnet')}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobil-menu">
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
                <Language/>
            </div>
        </nav>
    </div>
</template>
