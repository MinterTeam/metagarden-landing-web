<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
// import Language from '~/components/base/Language.vue';

export default {
    layout: 'metagarden-chain',
    components: {
//        Language,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Tokenomics — Metagarden Chain', 'metagarden-chain.title'));
        const description = this.$td('METAGARDEN is the gas token that enables the work of the gaming EVM blockchain (Metagarden Сhain) and a utility token of the Metagarden platform, a play-to-earn platform with mini-games. The METAGARDEN token plays a key role in the functioning of the blockchain and its gaming platform.', 'metagarden-chain.description');

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
    <div class="metagarden-chain-tokenomics">
        <header>
            <div class="container">
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link">
                            <a :href="$td('/', 'metagarden-chain.menu-evm-url')" class="menu-link-a">{{ $td('EVM Blockchain', 'metagarden-chain.menu-evm')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/early-access', 'metagarden-chain.menu-early-access-url')" class="menu-link-a">{{ $td('Early Access Campaign', 'metagarden-chain.menu-early-access')}}</a>
                        </div>
                        <div class="menu-link menu-link-active">
                            <a :href="$td('/tokenomics', 'metagarden-chain.menu-tokenomics-url')" class="menu-link-a">{{ $td('Tokenomics', 'metagarden-chain.menu-tokenomics')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('https://scan.testnet.metagarden.io/', 'metagarden-chain.menu-testnet-url')" target="_blank" class="menu-link-a">{{ $td('Testnet', 'metagarden-chain.menu-testnet')}}</a>
                        </div>
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
                        <h1>Tokenomics</h1>
                        <p class="subtitle-h1">METAGARDEN is the gas token that enables the work of the gaming EVM blockchain (Metagarden Сhain) and a utility token of the Metagarden platform, a play-to-earn platform with mini-games. The METAGARDEN token plays a key role in the functioning of the blockchain and its gaming platform.</p>
                        <div class="buttons-block">
                            <a href="/early-access" class="btn">Become Early Adopter</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/metagarden-chain/tokenomics.avif 1x, /img/metagarden-chain/tokenomics@2x.avif 2x" type="image/avif">
                        <source srcset="/img/metagarden-chain/tokenomics.webp 1x, /img/metagarden-chain/tokenomics@2x.webp 2x" type="image/webp">
                        <img src="/img/metagarden-chain/tokenomics.png" srcset="/img/metagarden-chain/tokenomics@2x.png 2x" alt="Metagarden Chain tokenomics" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="use">
            <div class="container">
                <h2>Utility for EVM Blockchain</h2>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/metagarden-chain/use-1.svg" alt="">
                    </div>
                    <h3>Functioning</h3>
                    <div class="use-items">
                        <div class="use-item">
                            <h4 class="use-item-h4">Blockchain transaction fees</h4>
                            <p>All blockchain transactions will be paid in METAGARDEN tokens.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Delegation</h4>
                            <p>In a Delegated Proof of Stake (DPoS) blockchain, token holders delegate their tokens to blockchain validators, who are responsible for validating transactions and creating new blocks.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Voting</h4>
                            <p>To update the blockchain, validators use voting power, which is the calculation of tokens delegated to them by blockchain participants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="use">
            <div class="container">
                <h2>Utility for Play-to-Earn Platform</h2>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/metagarden-chain/use-2.svg" alt="">
                    </div>
                    <h3>Rewards</h3>
                    <div class="use-items">
                        <div class="use-item">
                            <h4 class="use-item-h4">Influencer Reward</h4>
                            <p>The payment of prizes and rewards for various useful actions taken on the Platform, including actions taken off the Platform to promote the Project, as well as referral rewards.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Royalties</h4>
                            <p>Platform users with over 100 miners can receive royalties from all Platform games for 2 years.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Staking Token</h4>
                            <p>Players can gain additional privileges on the Platform for staking METAGARDEN tokens.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Hodl Reward</h4>
                            <p>When players have METAGARDEN on their game balance, they can receive rewards on the balance at a fixed rate.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Farming Token</h4>
                            <p>METAGARDEN is a token that is required to participate in the liquidity programmes set up by the game developers.</p>
                        </div>
                    </div>
                </div>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/metagarden-chain/use-3.svg" alt="">
                    </div>
                    <h3>Functions</h3>
                    <div class="use-items">
                        <div class="use-item">
                            <h4 class="use-item-h4">Unified Game Token</h4>
                            <p>If the game does not have its own token, METAGARDEN is used to pay for the game rounds presented on the mini-game Platform.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Hit Launching (voting for games)</h4>
                            <p>It is the METAGARDEN miners who receive voting VOTES tokens. These tokens select the most promising games and entitle them to airdrops and discounts of up to 99% before launch.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Payment for Game Elements</h4>
                            <p>Users will be able to purchase various game elements, such as NFTs, boosts, loot boxes, in-game art, and more for METAGARDEN tokens.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">The DAO Governance</h4>
                            <p>Through the METAGARDEN token and its mining process, governance tokens VOTES are issued. VOTES tokens are used to make decisions about the development and promotion of the platform.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Cross-Game Reputation</h4>
                            <p>Using the METAGARDEN token, we'll be able to assess the player's involvement on the Platform, get proof of their reputation on the Platform, which will be recorded on the blockchain and broadcast for all games on the Platform, and also visible and provable to all users of this information.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Cross-Game Liquidity</h4>
                            <p>Through the METAGARDEN token, the tokens of the mini-games presented on the Platform can be exchanged with a maximum of liquidity. With the METAGARDEN token, users can play any game on the Platform, even those in which other tokens are used. The exchange within the Platform is organised with maximum simplicity and profit.</p>
                        </div>
                    </div>
                </div>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/metagarden-chain/use-4.svg" alt="">
                    </div>
                    <h3>Economics</h3>
                    <div class="use-items">
                        <div class="use-item">
                            <h4 class="use-item-h4">DAO commission</h4>
                            <p>1% to 10% of the commission from all game rounds will be collected and sent to the Platform's Decentralised Autonomous Organisation for Project development and promotion.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Liquidity Pools</h4>
                            <p>When new games are launched on the Platform, their developers will provide liquidity to their tokens by creating a pool with METAGARDEN.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Collateral</h4>
                            <p>Platform players will be able to pledge their METAGARDEN tokens as collateral for other assets and game elements. It will also be possible to use the METAGARDEN pledge to obtain assets in other blockchains of the user's choice (USDT, BNB, ETH, BTC).</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Launch Fee</h4>
                            <p>At the launch of each new game on the Platform, a fixed number of METAGARDEN tokens will be burned.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Buyback and Burn</h4>
                            <p>METAGARDEN tokens are burned after each game round. This ensures a deflationary tokenomics model.</p>
                        </div>
                        <div class="use-item">
                            <h4 class="use-item-h4">Insurance</h4>
                            <p>Platform players can use METAGARDEN to insure the outcome of rounds and receive compensation if defeated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="circulation">
            <div class="container">
                <h2>Circulation</h2>
                <div class="pie">
                    <div class="pie-img">
                        <img src="/img/metagarden-chain/pie.svg" alt="">
                    </div>
                    <div class="pie-content">
                        <div class="pie-item pie-item-1"><span>Total number of tokens</span>128,000,000</div>
                        <div class="pie-item pie-item-2"><span>In circulation</span>0.4%</div>
                        <div class="pie-item pie-item-3"><span>Burned</span>0.8%</div>
                        <div class="pie-item pie-item-4"><span>Staked</span>0.45%</div>
                    </div>
                </div>
                <div class="circulation-text">
                    <div class="circulation-text-block">
                        <p>The <strong>METAGARDEN</strong> token is represented on several blockchains:</p>
                        <div class="circulation-blockchain">
                            <img src="/img/landing/metagarden/icon-e.svg" alt="Ethereum">
                            <div>
                                <div class="circulation-blockchain-name">Ethereum</div>
                                <div class="circulation-blockchain-address"><a href="https://etherscan.io/token/0xA5E63AE36Ce169e0EDc7dD0c99e19Ab8325a5F4c" target="_blank">0xA5E63AE36Ce169e0EDc7dD0c99e19Ab8325a5F4c</a></div>
                            </div>
                        </div>
                        <div class="circulation-blockchain">
                            <img src="/img/landing/metagarden/icon-b.svg" alt="BNB Smart Chain">
                            <div>
                                <div class="circulation-blockchain-name">BNB Smart Chain</div>
                                <div class="circulation-blockchain-address"><a href="https://bscscan.com/token/0xA5E63AE36Ce169e0EDc7dD0c99e19Ab8325a5F4c" target="_blank">0xA5E63AE36Ce169e0EDc7dD0c99e19Ab8325a5F4c</a></div>
                            </div>
                        </div>
                        <div class="circulation-blockchain">
                            <img src="/img/landing/metagarden/icon-m.svg" alt="Minter">
                            <div class="circulation-blockchain-name">Minter</div>
                        </div>
                    </div>
                    <div class="circulation-text-block">
                        <p>Currently, there are about 500,000 tokens in free circulation on the market. Over 99% of the total token supply is held by the project team.</p>
                        <a href="/early-access" class="btn">Become Early Adopter</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="vision">
            <div class="container">
                <h2>Allocation vision</h2>
                <p>As a development team, we strongly believe that the gaming EVM blockchain and play-to-earn platform we are building has a strong proposition and promising market value as we observe the development of web3 space. We have decided to withhold 99% of the token supply in order to program a robust development of the project. We are considering three main areas that will help us achieve success for the project and our tokens are planned to be used in these areas.</p>
                <div class="vision-ico">
                    <div class="vision-ico-item">
                        <img src="/img/metagarden-chain/v-1.svg" alt="">
                        <b>Research <br>and development</b>
                    </div>
                    <div class="vision-ico-item">
                        <img src="/img/metagarden-chain/v-2.svg" alt="">
                        <b>Marketing</b>
                    </div>
                    <div class="vision-ico-item">
                        <img src="/img/metagarden-chain/v-3.svg" alt="">
                        <b>Partnerships</b>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
