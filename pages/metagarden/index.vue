<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import Language from '~/components/base/Language.vue';
import LiteYoutube from '@/components/LiteYoutube.vue';

export default {
    layout: 'metagarden',
    components: {
        Language,
        LiteYoutube,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Metagarden — Play-to-Earn Platform with Crypto', 'metagarden.title'));
        const description = this.$td('A play-to-earn platform with mini games. Become the platform miner to earn crypto.', 'metagarden.description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
                { hid: 'og-image', name: 'og:image', content: '/img/landing/metagarden/metagarden-share.png' },
            ],
            link: [
                { hid: 'favicon', rel: 'icon', href: '/img/landing/metagarden/metagarden-icon.png' },
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
    <div class="metagarden-landing">
        <header>
            <div class="container">
                <div class="top-bar">
                    <div class="menu">
                        <div class="menu-link">
                            <span class="menu-link-a">{{ $td('Technologies', 'metagarden.menu-technologies')}}</span>
                            <div class="sub-menu">
                                <div class="sub-menu-item">
                                    <a :href="$td('https://minter.network/bip', 'metagarden.technologies-minter-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/wallet-minter.svg" alt="Minter Network">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Minter Network', 'metagarden.technologies-minter')}}</h4>
                                            <p>{{ $td('Layer 1 blockchain that enables the Metagarden platform to perform fully decentralised operations with digital assets. Low fees fixed in US dollars, fast transactions, unchain limit orders.', 'metagarden.technologies-minter-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://www.minter.network/hub', 'metagarden.technologies-hub-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/hub-logo.svg" alt="Minter HUB">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Minter HUB', 'metagarden.technologies-hub')}}</h4>
                                            <p>{{ $td('Minter Hub is a bridge to global crypto liquidity, a standalone blockchain with unique cross-chain smart contract technology. The Metagarden platform relies on it for cross-chain operations.', 'metagarden.technologies-hub-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://honee.app/', 'metagarden.technologies-honee-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/honee.svg" alt="Honee Wallet">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Honee Wallet', 'metagarden.technologies-honee')}}</h4>
                                            <p>{{ $td('The simplest crypto wallet. Metagarden is using it as a white label wallet solution.', 'metagarden.technologies-honee-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/metagarden/token', 'metagarden.menu-tokenomics-url')" target="_blank" class="menu-link-a">{{ $td('Tokenomics', 'metagarden.menu-tokenomics')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/metagarden/mining-spots', 'metagarden.menu-spots-url')" target="_blank" class="menu-link-a">{{ $td('Mining', 'metagarden.menu-spots')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('https://t.me/metagarden', 'metagarden.menu-community-url')" target="_blank" class="menu-link-a">{{ $td('Community', 'metagarden.menu-community')}}</a>
                        </div>
                        <div class="menu-link">
                            <a :href="$td('/metagarden/influencer', 'metagarden.menu-influencer-url')" target="_blank" class="menu-link-a">{{ $td('For Influencers', 'metagarden.menu-influencer')}}</a>
                        </div>
                        <Language/>
                        <div class="hamburger-menu">
                            <input id="menu__toggle" type="checkbox" />
                            <label class="menu__btn" for="menu__toggle">
                                <span></span>
                            </label>
                            <div class="menu__box">
                                <h4>{{ $td('Technologies', 'metagarden.menu-technologies')}}</h4>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://minter.network/bip', 'metagarden.technologies-minter-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/wallet-minter.svg" alt="Minter DEX">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Minter Network', 'metagarden.technologies-minter')}}</h4>
                                            <p>{{ $td('Layer 1 blockchain that enables the Metagarden platform to perform fully decentralised operations with digital assets. Low fees fixed in US dollars, fast transactions, unchain limit orders.', 'metagarden.technologies-minter-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://www.minter.network/hub', 'metagarden.technologies-hub-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/hub-logo.svg" alt="Minter HUB">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Minter HUB', 'metagarden.technologies-hub')}}</h4>
                                            <p>{{ $td('Minter Hub is a bridge to global crypto liquidity, a standalone blockchain with unique cross-chain smart contract technology. The Metagarden platform relies on it for cross-chain operations.', 'metagarden.technologies-hub-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://honee.app/', 'metagarden.technologies-honee-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/honee.svg" alt="Honee Wallet">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Honee Wallet', 'metagarden.technologies-honee')}}</h4>
                                            <p>{{ $td('The simplest crypto wallet. Metagarden is using it as a white label wallet solution.', 'metagarden.technologies-hub-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <hr>
                                <div class="sub-menu-item">
                                    <a :href="$td('/metagarden/token', 'metagarden.menu-tokenomics-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/token.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Tokenomics', 'metagarden.menu-tokenomics')}}</h4>
                                            <p>{{ $td('METAGARDEN is the utility token of Metagarden, the play-to-earn Platform with mini-games.', 'metagarden.menu-tokenomics-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/metagarden/mining-spots', 'metagarden.menu-spots-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/spot.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Mining', 'metagarden.menu-spots')}}</h4>
                                            <p>{{ $td('The mining of the Metagarden platform tokens is an exciting process in the form of a game.', 'metagarden.menu-spots-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('https://t.me/metagarden', 'metagarden.menu-community-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/community.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('Community', 'metagarden.menu-community')}}</h4>
                                            <p>{{ $td('Our channel in Telegram.', 'metagarden.menu-community-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="sub-menu-item">
                                    <a :href="$td('/metagarden/influencer', 'metagarden.menu-influencer-url')" target="_blank">
                                        <div class="sub-menu-item-image">
                                            <img src="/img/landing/metagarden/influencer.svg" alt="">
                                        </div>
                                        <div class="sub-menu-item-content">
                                            <h4>{{ $td('For Influencers', 'metagarden.menu-influencer')}}</h4>
                                            <p>{{ $td('Partner with the Metagarden platform in its early stages!', 'metagarden.menu-influencer-description')}}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/landing/metagarden/metagarden-logo.svg" alt="Metagarden" width="72" height="72"/></div>
                        <h1>{{ $td('Welcome to Metagarden', 'metagarden.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('A play-to-earn platform with mini games and crypto prizes!', 'metagarden.hello-description')}}</p>
                        <a :href="$td('https://go.honee.app/metagarden', 'metagarden.start-button-url')" class="btn btn-1" target="_blank">{{ $td('Play Games & Earn Crypto', 'metagarden.start-button')}}</a>
                    </div>
                    <picture>
                        <source srcset="/img/landing/metagarden/metagarden-hello.avif 1x, /img/landing/metagarden/metagarden-hello@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/metagarden/metagarden-hello.webp 1x, /img/landing/metagarden/metagarden-hello@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/metagarden/metagarden-hello.png" srcset="/img/landing/metagarden/metagarden-hello@2x.png 2x" alt="metagarden" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="for">
            <div class="container">
                <h2>{{ $td('There’s a place for everyone', 'metagarden.for-title')}}</h2>
                <div class="for-items">
                    <div class="for-item">
                        <div class="for-img">
                            <picture>
                                <source srcset="/img/landing/metagarden/for-1.avif 1x, /img/landing/metagarden/for-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/for-1.webp 1x, /img/landing/metagarden/for-1@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/for-1.png" srcset="/img/landing/metagarden/for-1@2x.png 2x" alt="metagarden For Players" role="presentation"/>
                            </picture>
                        </div>
                        <template v-if="$i18n.locale === 'en'">
                            <h3>For Players</h3>
                            <p>Play games solo or against friends, earn crypto and use it in other games or withdraw straight to your bank card!</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Для игроков</h3>
                            <p>Играйте в одиночном режиме или против друзей, зарабатывайте реальные деньги и используйте их в других играх или выводите прямо на банковскую карту!</p>
                        </template>
                    </div>
                    <div class="for-item">
                        <div class="for-img">
                            <picture>
                                <source srcset="/img/landing/metagarden/for-2.avif 1x, /img/landing/metagarden/for-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/for-2.webp 1x, /img/landing/metagarden/for-2@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/for-2.png" srcset="/img/landing/metagarden/for-2@2x.png 2x" alt="metagarden For Developers" role="presentation"/>
                            </picture>
                        </div>
                        <template v-if="$i18n.locale === 'en'">
                            <h3>For Developers</h3>
                            <p>Want to add your games to the platform? We’ll provide everything you need — gateways, wallets & blockchain accounting systems.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Для разработчиков</h3>
                            <p>Хотите добавить свои игры на платформу? Мы предоставим все необходимое — шлюзы, кошельки и системы учета на основе блокчейна.</p>
                        </template>
                    </div>
                    <div class="for-item">
                        <div class="for-img">
                            <picture>
                                <source srcset="/img/landing/metagarden/for-3.avif 1x, /img/landing/metagarden/for-3@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/for-3.webp 1x, /img/landing/metagarden/for-3@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/for-3.png" srcset="/img/landing/metagarden/for-3@2x.png 2x" alt="metagarden For Miners" role="presentation"/>
                            </picture>
                        </div>
                        <template v-if="$i18n.locale === 'en'">
                            <h3>For Miners</h3>
                            <p>Buy a virtual miner to earn guaranteed daily profit. Increase your profit even more by decorating miner with boost items!</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Для майнеров</h3>
                            <p>Купите виртуальный майнер, чтобы получать гарантированную ежедневную прибыль. Увеличьте свою прибыль еще больше, усилив свой майнер бустами!</p>
                        </template>
                    </div>
                </div>
            </div>
        </section>
        <section class="video">
            <div class="container">
                <h2>{{ $td('What’s Metagarden?', 'metagarden.video-title')}}</h2>
                <LiteYoutube
                    class="video-youtube"
                    :video-id="$td('c7SfCyBDklw', 'metagarden.video-id')"
                />
            </div>
        </section>
        <section class="games">
            <div class="container">
                <div class="games-block">
                    <div class="games-about">
                        <h2>{{ $td('Metagarden Games', 'metagarden.games-title')}}</h2>
                        <p>{{ $td('Choose a game from our library that suits you best — from simple arcades to challenging puzzles. Single player, co-op or multiplayer. Test your skills and earn crypto!', 'metagarden.games-description')}}</p>
                        <a class="btn btn-disable" target="_blank">{{ $td('Coming Soon', 'metagarden.games-button')}}</a>
                    </div>
                    <div class="games-list">
                        <a target="_blank" class="games-item">
                            <picture>
                                <source srcset="/img/landing/metagarden/g1.avif 1x, /img/landing/metagarden/g1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/g1.webp 1x, /img/landing/metagarden/g1@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/g1.jpg" srcset="/img/landing/metagarden/g1@2x.jpg 2x" alt="metagarden Carrots Mafia" role="presentation"/>
                            </picture>
                            <div class="games-item-text">
                                <template v-if="$i18n.locale === 'en'">
                                    <span>strategy</span>
                                    <div class="game-name">Carrots Mafia</div>
                                </template>
                                <template v-if="$i18n.locale === 'ru'">
                                    <span>стратегия</span>
                                    <div class="game-name">Carrots Mafia</div>
                                </template>
                            </div>
                        </a>
                        <a target="_blank" class="games-item">
                            <picture>
                                <source srcset="/img/landing/metagarden/g2.avif 1x, /img/landing/metagarden/g2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/g2.webp 1x, /img/landing/metagarden/g2@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/g2.png" srcset="/img/landing/metagarden/g2@2x.png 2x" alt="metagarden Magic Lootbox" role="presentation"/>
                            </picture>
                            <div class="games-item-text">
                                <template v-if="$i18n.locale === 'en'">
                                    <span>lottery</span>
                                    <div class="game-name">Magic Box</div>
                                </template>
                                <template v-if="$i18n.locale === 'ru'">
                                    <span>лотерея</span>
                                    <div class="game-name">Magic Box</div>
                                </template>
                            </div>
                        </a>
                        <a target="_blank" class="games-item">
                            <picture>
                                <source srcset="/img/landing/metagarden/g4.avif 1x, /img/landing/metagarden/g4@2x.avif 2x" type="image/avif">
                                <source srcset="/img/landing/metagarden/g4.webp 1x, /img/landing/metagarden/g4@2x.webp 2x" type="image/webp">
                                <img src="/img/landing/metagarden/g4.png" srcset="/img/landing/metagarden/g4@2x.png 2x" alt="metagarden Chess" role="presentation"/>
                            </picture>
                            <div class="games-item-text">
                                <template v-if="$i18n.locale === 'en'">
                                    <span>board game</span>
                                    <div class="game-name">Chess</div>
                                </template>
                                <template v-if="$i18n.locale === 'ru'">
                                    <span>настольная</span>
                                    <div class="game-name">Шахматы</div>
                                </template>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <div class="simple-content-block">
                    <div class="simple-content-text">
                        <template v-if="$i18n.locale === 'en'">
                            <h2>Join Our Ecosystem</h2>
                            <p>We offer developers the easiest way to seamlessly integrate crypto into their games. Release a new token or use one of the popular ones, get a simple custom wallet, crypto deposits and withdrawals.</p>
                            <p><strong>What’s important.</strong> Players won't have to deal with blockchain mumbo jumbo like MetaMask, gas for transactions, unlocking, approvals, and other confusing things.</p>
                            <p><i>The SDK and API tools are in development.</i></p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h2>Присоединяйтесь к нашей экосистеме</h2>
                            <p>Мы предлагаем разработчикам самый простой способ интегрировать криптовалюту в свои игры. Выпустите новый токен или используйте один из популярных, получите простой игровой кошелек для ваших пользователей с вводом и выводом криптовалюты.</p>
                            <p><strong>Важно!</strong> Игрокам не придется взаимодействовать с незнакомыми DeFi-атрибутами, такими как MetaMask, разные блокчейн-сети, множественные аппрувы, газ для транзакций и прочие сложности.</p>
                            <p><i>SDK и инструменты API находятся в разработке.</i></p>
                        </template>
                    </div>
                    <div class="simple-content-img">
                        <picture>
                            <source srcset="/img/landing/metagarden/join.avif 1x, /img/landing/metagarden/join@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/metagarden/join.webp 1x, /img/landing/metagarden/join@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/metagarden/join.png" srcset="/img/landing/metagarden/join@2x.png 2x" alt="metagarden" role="presentation" width="259px" height="287px"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <div class="simple-content-block block-reverse">
                    <div class="simple-content-text">
                        <template v-if="$i18n.locale === 'en'">
                            <h2>METAGARDEN Base Token</h2>
                            <p>The token plays a major role on the platform, it will be used as:
                                <ul>
                                    <li>Base game token if the game does not have its own</li>
                                    <li>In-game payment to purchase skins, NFTs, boosts, etc.</li>
                                    <li>Reward for various actions and achievements</li>
                                    <li>Cross-game token</li>
                                    <li>Voting for promising games in development and qualify for airdrops and discounts of up to 99% before launch</li>
                                    <li>DAO — from 1 to 10% (commission from all game rounds gathered for platform development)</li>
                                    <li>Staking (lock tokens in exchange for privileges, lootboxes, etc.)</li>
                                </ul>
                            </p>
                            <div class="buttons-block">
                                <a href="/metagarden/token" class="btn btn-outline" target="_blank">Find out more in Tokenomics</a>
                            </div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h2>Базовый токен METAGARDEN</h2>
                            <p>Токен играет важную роль в функционировании платформы, его можно использовать как:
                                <ul>
                                    <li>Базовый игровой токен, если у игры нет собственного токена</li>
                                    <li>Внутриигровые платежи для покупки скинов, NFT, бустов и т.д.</li>
                                    <li>Награда за различные действия и достижения</li>
                                    <li>Межигровой токен</li>
                                    <li>Голосуйте за перспективные игры, находящиеся в разработке, и получайте право на аирдропы и скидки до 99% до запуска</li>
                                    <li>DAO — от 1% до 10% (комиссия от всех игровых раундов на развитие платформы)</li>
                                    <li>Стейкинг (блокировка токенов в обмен на привилегии, лутбоксы и т.д.)</li>
                                </ul>
                            </p>
                            <div class="buttons-block">
                                <a href="/ru/metagarden/token" class="btn btn-outline" target="_blank">Подробнее в токеномике</a>
                            </div>
                        </template>
                    </div>
                    <div class="simple-content-img">
                        <picture>
                            <source srcset="/img/landing/metagarden/token.avif 1x, /img/landing/metagarden/token@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/metagarden/token.webp 1x, /img/landing/metagarden/token@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/metagarden/token.png" srcset="/img/landing/metagarden/token@2x.png 2x" alt="metagarden" role="presentation" width="340px" height="309px"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <div class="simple-content-block">
                    <div class="simple-content-text">
                        <template v-if="$i18n.locale === 'en'">
                            <h2>Token Mining</h2>
                            <p>Token mining is a game where the player buys miners that produce daily rewards in platforms’s base token METAGARDEN as well as VOTES token.</p>
                            <div class="buttons-block">
                                <a href="https://go.honee.app/metagarden" class="btn btn-1" target="_blank">Buy miners</a>
                            </div>
                            <h3>Miner’s Privileges</h3>
                            <ul>
                                <li>Daily rewards in USD</li>
                                <li>Additional Prizes</li>
                                <li>Sweepstakes, Lootboxes, Spinwheels</li>
                                <li>Daily free in-game items that can be shared on social media, exchanged or sold</li>
                                <li>Free tokens for new platform’s games</li>
                                <li>Discounts on new game tokens</li>
                                <li>Affiliate rewards</li>
                                <li>and many more...</li>
                            </ul>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h2>Майнинг токена</h2>
                            <p>Добыча токенов — это игра, в которой игрок покупает майнеры. Они приносят ежедневные вознаграждения в базовом токене платформы METAGARDEN, а также в токене VOTES.</p>
                            <div class="buttons-block">
                                <a href="https://go.honee.app/ru/metagarden" class="btn btn-1" target="_blank">Купить майнер</a>
                            </div>
                            <h3>Привилегии майнеров</h3>
                            <ul>
                                <li>Ежедневные вознаграждения в USD</li>
                                <li>Дополнительные призы</li>
                                <li>Розыгрыши, лутбоксы, спинвилы</li>
                                <li>Ежедневные бесплатные внутриигровые объекты, которыми можно поделиться в социальных сетях, обменять или продать</li>
                                <li>Бесплатные токены новых игр на платформе</li>
                                <li>Скидки на токены новых игр</li>
                                <li>Партнерские вознаграждения</li>
                                <li>и многое другое...</li>
                            </ul>
                        </template>
                    </div>
                    <div class="simple-content-img">
                        <picture>
                            <source srcset="/img/landing/metagarden/mining.avif 1x, /img/landing/metagarden/mining@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/metagarden/mining.webp 1x, /img/landing/metagarden/mining@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/metagarden/mining.png" srcset="/img/landing/metagarden/mining@2x.png 2x" alt="metagarden" role="presentation" width="259px" height="287px"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="metagarden-footer">
                    <div class="metagarden-footer-left">
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://t.me/HoneeSupportBot" target="_blank">Support</a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://t.me/HoneeSupportBot" target="_blank">Поддержка</a>
                        </template>
                    </div>
                    <div class="metagarden-footer-right">
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/landing/metagarden/icon-twitter.svg" alt="twitter eng"></a>
                            <a href="https://t.me/metagarden" target="_blank"><img src="/img/landing/metagarden/icon-telegram.svg" alt="telegram eng"></a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/landing/metagarden/icon-twitter.svg" alt="twitter ru"></a>
                            <a href="https://t.me/metagardenru" target="_blank"><img src="/img/landing/metagarden/icon-telegram.svg" alt="telegram ru"></a>
                        </template>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
