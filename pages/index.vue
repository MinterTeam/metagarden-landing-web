<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
//import Language from '~/components/base/Language.vue';

export default {
    layout: 'metagarden-chain',
    components: {
//        Language,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Metagarden Chain — advanced level 1 EVM Blockchain for gaming', 'metagarden-chain.title'));
        const description = this.$td('5 second blocks with immediate finality, high throughput, low-cost transactions, cross-chain compatibility with top EVMs, API and SDK for game developers.', 'metagarden-chain.description');

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
    <div>
        <header>
            <div class="container">
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link menu-link-active">
                            <a :href="$td('/', 'metagarden-chain.menu-evm-url')" class="menu-link-a">{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/early-access', 'metagarden-chain.menu-early-access-url')" class="menu-link-a">{{ $td('Early Access Campaign', 'metagarden-chain.menu-early-access')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank" class="menu-link-a">{{ $td('Testnet', 'metagarden-chain.menu-testnet')}}</a>
                        </div>
                        <!--<div class="menu-link">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>-->
                        <div class="menu-link">
                            <a :href="$td('https://launchpad.metagarden.io/', 'metagarden-chain.menu-launchpad-url')" target="_blank" class="menu-link-a">{{ $td('Launchpad', 'metagarden-chain.menu-launchpad')}}</a>
                        </div>
                        
                        <div class="hamburger-menu">
                            <input id="menu__toggle" type="checkbox" />
                            <label class="menu__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <div class="menu__box">
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
                                            <h4>{{ $td('Early Access Campaign', 'metagarden-chain.menu-early-access')}}</h4>
                                            <p>{{ $td('Become Metagarden Chain Early adopter.', 'menu-early-access-description')}}</p>
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
                                            <p>{{ $td('Meganet – the Metaharden Chain testnet.', 'metagarden-chain.menu-testnet-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <!--<div class="sub-menu-item">
                                    <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/metagarden-chain/metagarden-chain-logo-small.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</h4>
                                            <p>{{ $td('METAGARDEN is the gas token empowering the work of gaming blockchain (Metagarden Chain) and a utility token of Metagarden, the play-to-earn Platform with mini-games. It plays a key role in blockchain and platform functionality.', 'metagarden-chain.menu-tokenomics-description')}}</p>
                                        </div>
                                    </a>
                                </div>-->
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
                            </div>
                        </div>
                    </div>
                    <!--<Language/>-->
                </div>
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="321" height="58"/></div>
                        <h1>{{ $td('Ultimate Gaming EVM Blockchain', 'metagarden-chain.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('The Metagarden Chain is the fastest level-1 EVM blockchain designed for gaming. 5 second blocks with immediate finality, high throughput, low-cost transactions, cross-chain compatibility with top EVMs, API and SDK for game developers.', 'metagarden-chain.hello-description')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('/early-access', 'metagarden-chain.become-button-url')" class="btn">{{ $td('Become Early Adopter', 'metagarden-chain.become-button')}}</a>
                            <!--<a :href="$td('123', 'metagarden-chain.learn-button-url')" class="btn btn-outline" target="_blank">{{ $td('Learn More', 'metagarden-chain.learn-button')}}</a>-->
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/hello-img.avif 1x, /img/metagarden-chain/hello-img@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/hello-img.webp 1x, /img/metagarden-chain/hello-img@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/hello-img.png" srcset="/img/metagarden-chain/hello-img@2x.png 2x" alt="Metagarden Chain" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="features">
            <div class="container">
                <h2>{{ $td('Features', 'metagarden-chain.features-title')}}</h2>
                <div class="features-items">
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f1.avif 1x, /img/metagarden-chain/f1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f1.webp 1x, /img/metagarden-chain/f1@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f1.png" srcset="/img/metagarden-chain/f1@2x.png 2x" alt="Made for gamers" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Made for gamers', 'metagarden-chain.f1')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f2.avif 1x, /img/metagarden-chain/f2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f2.webp 1x, /img/metagarden-chain/f2@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f2.png" srcset="/img/metagarden-chain/f2@2x.png 2x" alt="Cross-chain compatibility with TOP blockchains " role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Cross-chain compatibility with Top blockchains', 'metagarden-chain.f2')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f3.avif 1x, /img/metagarden-chain/f3@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f3.webp 1x, /img/metagarden-chain/f3@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f3.png" srcset="/img/metagarden-chain/f3@2x.png 2x" alt="Low-cost smart contract deployment" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Low-cost smart contract deployment', 'metagarden-chain.f3')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f4.avif 1x, /img/metagarden-chain/f4@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f4.webp 1x, /img/metagarden-chain/f4@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f4.png" srcset="/img/metagarden-chain/f4@2x.png 2x" alt="Final blocks" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Final blocks', 'metagarden-chain.f4')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f5.avif 1x, /img/metagarden-chain/f5@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f5.webp 1x, /img/metagarden-chain/f5@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f5.png" srcset="/img/metagarden-chain/f5@2x.png 2x" alt="Fast block propagation" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Fast block propagation', 'metagarden-chain.f5')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f6.avif 1x, /img/metagarden-chain/f6@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f6.webp 1x, /img/metagarden-chain/f6@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f6.png" srcset="/img/metagarden-chain/f6@2x.png 2x" alt="Low-cost NFT minting" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Low-cost NFT minting', 'metagarden-chain.f6')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f7.avif 1x, /img/metagarden-chain/f7@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f7.webp 1x, /img/metagarden-chain/f7@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f7.png" srcset="/img/metagarden-chain/f7@2x.png 2x" alt="Low-cost transactions" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Low-cost transactions', 'metagarden-chain.f7')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f8.avif 1x, /img/metagarden-chain/f8@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f8.webp 1x, /img/metagarden-chain/f8@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f8.png" srcset="/img/metagarden-chain/f8@2x.png 2x" alt="High throughput capacity" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('High throughput capacity', 'metagarden-chain.f8')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f9.avif 1x, /img/metagarden-chain/f9@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f9.webp 1x, /img/metagarden-chain/f9@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f9.png" srcset="/img/metagarden-chain/f9@2x.png 2x" alt="API and SDK for game developers" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('API and SDK for game developers', 'metagarden-chain.f9')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f10.avif 1x, /img/metagarden-chain/f10@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f10.webp 1x, /img/metagarden-chain/f10@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f10.png" srcset="/img/metagarden-chain/f10@2x.png 2x" alt="Universal Smart Addresses" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Universal Smart Addresses', 'metagarden-chain.f10')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f11.avif 1x, /img/metagarden-chain/f11@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f11.webp 1x, /img/metagarden-chain/f11@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f11.png" srcset="/img/metagarden-chain/f11@2x.png 2x" alt="Delegated Proof of Stake" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Delegated Proof of Stake', 'metagarden-chain.f11')}}</h3>
                    </div>
                    <div class="features-item">
                        <div class="features-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/f12.avif 1x, /img/metagarden-chain/f12@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/f12.webp 1x, /img/metagarden-chain/f12@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/f12.png" srcset="/img/metagarden-chain/f12@2x.png 2x" alt="Embedded Cross-Chain DEX" role="presentation"/>
                            </picture>
                        </div>
                        <h3>{{ $td('Embedded Cross-Chain DEX', 'metagarden-chain.f12')}}</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="compare">
            <div class="container">
                <h2>{{ $td('Compare fees and speed', 'metagarden-chain.compare-title')}}</h2>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <template v-if="$i18n.locale === 'en'">
                                    <th>EVM Blockchain</th>
                                    <th>Tx Speed</th>
                                    <th>Smart contract deployment cost</th>
                                    <th>NFT minting cost</th>
                                    <th>Transfer cost</th>
                                    <th>Block finality</th>
                                </template>
                                <template v-if="$i18n.locale === 'ru'">
                                    <th>EVM-блокчейн</th>
                                    <th>Tx скорость</th>
                                    <th>Создание смарт-контракта</th>
                                    <th>Минтинг NFT</th>
                                    <th>Отправка</th>
                                    <th>Финальность блока</th>
                                </template>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="tr-active">
                                <td class="flextd"><a href="https://scan.testnet.metagarden.io/" target="_blank"><img src="/img/metagarden-chain/c-metagarden.png" width="24" height="24" /> Metagarden</a></td>
                                <td>5 sec</td>
                                <td>$0.002</td>
                                <td>$0.0002</td>
                                <td>$0.0002</td>
                                <td>5 sec</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://etherscan.io/" target="_blank"><img src="/img/metagarden-chain/c-ethereum.png" width="24" height="24" /> Ethereum</a></td>
                                <td>30 sec</td>
                                <td>from $150</td>
                                <td>from $8</td>
                                <td>from $5</td>
                                <td>15 min</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://bscscan.com/" target="_blank"><img src="/img/metagarden-chain/c-bnb.png" width="24" height="24" /> BNB Smart Chain</a></td>
                                <td>3 sec</td>
                                <td>from $7</td>
                                <td>$0.06</td>
                                <td>$0.03</td>
                                <td>3 sec</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://arbiscan.io/" target="_blank"><img src="/img/metagarden-chain/c-arbitrum.png" width="24" height="24" /> Arbitrum</a></td>
                                <td>0.25 sec</td>
                                <td>$1 – $8</td>
                                <td>$0.2</td>
                                <td>$0.13</td>
                                <td>1-3 min</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://optimistic.etherscan.io/" target="_blank"><img src="/img/metagarden-chain/c-optimism.png" width="24" height="24" /> Optimism</a></td>
                                <td>0.36 sec</td>
                                <td>$1 - $30</td>
                                <td>$0.26</td>
                                <td>$0.26</td>
                                <td>30 – 60 sec</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>
