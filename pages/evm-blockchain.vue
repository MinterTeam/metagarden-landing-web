<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';
import LiteYoutube from '@/components/LiteYoutube.vue';

export default {
    layout: 'metagarden-chain',
    components: {
        LiteYoutube,
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Metagarden Chain — Ultimate EVM-compatible Blockchain for Gaming', 'metagarden-chain.title'));
        const description = this.$td('5 second blocks with immediate finality, high throughput, low-cost transactions, cross-chain compatibility with top EVMs, API and SDK for game developers.', 'metagarden-chain.menu-evm-description');

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
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="321" height="58"/></div>
                        <h1>{{ $td('Ultimate Gaming EVM Blockchain', 'metagarden-chain.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('The Metagarden Chain is the fastest Layer 1 EVM-compatible blockchain designed for gaming. 5-second blocks with immediate finality, high throughput, low-cost transactions, ultra-fast cross-chain bridge with top EVMs, API and SDK for game developers.', 'metagarden-chain.hello-description')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('/buy-tokens', 'metagarden-chain.become-button-url')" class="btn">{{ $td('Buy tokens', 'metagarden-chain.become-button')}}</a>
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
        <section class="video-section">
            <div class="container">
                <div class="video-section-block">
                    <div class="video-section-video">
                        <LiteYoutube
                            class="video-youtube"
                            :video-id="$td('xC97gHtKO6w', 'metagarden-chain.video-id')"
                        />
                    </div>
                    <div class="video-section-text">
                        <h2>{{ $td('Gaming Platform', 'metagarden-chain.video-section-title')}}</h2>
                        <p>{{ $td('Try out the first play-to-earn Metagarden platform games. By the end of 2023, we plan to launch more than 100 mini-games from different developers. The games presented are in alpha status and can be played from a single Telegram bot, so you can easily switch between them without leaving your favorite messenger.', 'metagarden-chain.video-section-description')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('http://t.me/metagardenbot?start=start', 'metagarden-chain.video-section-button-url')" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.video-section-button')}}</a>
                            <span>{{ $td('Try α-versions of our games in Telegram', 'metagarden-chain.video-button-description')}}</span>
                        </div>
                        <a :href="$td('/platform', 'metagarden-chain.video-section-more-url')" class="simple-link" target="_blank">{{ $td('Read more about platform', 'metagarden-chain.video-section-more')}}</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="features">
            <div class="container">
                <h2>{{ $td('Blockchain features', 'metagarden-chain.features-title')}}</h2>
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
                                    <th>Block finality</th>
                                    <th>Smart contract deployment cost</th>
                                    <th>NFT minting cost</th>
                                    <th>Transfer cost</th>
                                    <th>Tx Speed</th>
                                </template>
                                <template v-if="$i18n.locale === 'ru'">
                                    <th>EVM-блокчейн</th>
                                    <th>Финальность блока</th>
                                    <th>Создание смарт-контракта</th>
                                    <th>Минтинг NFT</th>
                                    <th>Отправка</th>
                                    <th>Tx скорость</th>
                                </template>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="tr-active">
                                <td class="flextd"><a href="https://scan.testnet.metagarden.io/" target="_blank"><img src="/img/metagarden-chain/c-metagarden.png" width="24" height="24" /> Metagarden</a></td>
                                <td>5 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                                <td>$0.002</td>
                                <td>$0.0002</td>
                                <td>$0.0002</td>
                                <td>5 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://etherscan.io/" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/c-ethereum.png" width="24" height="24" /> Ethereum</a></td>
                                <td>15 {{ $td('min', 'metagarden-chain.min')}}</td>
                                <td>{{ $td('from', 'metagarden-chain.from')}} $150</td>
                                <td>{{ $td('from', 'metagarden-chain.from')}} $8</td>
                                <td>{{ $td('from', 'metagarden-chain.from')}} $5</td>
                                <td>30 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://bscscan.com/" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/c-bnb.png" width="24" height="24" /> BNB Smart Chain</a></td>
                                <td>12 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                                <td>{{ $td('from', 'metagarden-chain.from')}} $7</td>
                                <td>$0.06</td>
                                <td>$0.03</td>
                                <td>3 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://polygonscan.com/" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/c-polygon.png" width="24" height="24" /> Polygon</a></td>
                                <td>30 {{ $td('min', 'metagarden-chain.min')}}</td>
                                <td>$0.1 – $1.5</td>
                                <td>{{ $td('from', 'metagarden-chain.from')}} $0.05</td>
                                <td>$0.005</td>
                                <td>2 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://arbiscan.io/" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/c-arbitrum.png" width="24" height="24" /> Arbitrum</a></td>
                                <td>1-3 {{ $td('min', 'metagarden-chain.min')}}</td>
                                <td>$1 – $8</td>
                                <td>$0.2</td>
                                <td>$0.13</td>
                                <td>0.25 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                            <tr>
                                <td class="flextd"><a href="https://optimistic.etherscan.io/" target="_blank" rel="nofollow"><img src="/img/metagarden-chain/c-optimism.png" width="24" height="24" /> Optimism</a></td>
                                <td>30 – 60 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                                <td>$1 - $30</td>
                                <td>$0.26</td>
                                <td>$0.26</td>
                                <td>0.36 {{ $td('sec', 'metagarden-chain.sec')}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
                    <video class="megachain-blocks-video" width="100%" height="100%" autoplay loop muted playsinline>
                        <source src="/video/megachain-blocks.mp4" type="video/mp4">
                    </video>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <video class="megachain-blocks-video" width="100%" height="100%" autoplay loop muted playsinline>
                        <source src="/video/megachain-blocks-ru.mp4" type="video/mp4">
                    </video>
                </template>
            </div>
        </section>
        <section class="roadmap">
            <div class="container">
                <h2>{{ $td('Roadmap', 'metagarden-chain.roadmap-title')}}</h2>
                <div class="coming">
                    <template v-if="$i18n.locale === 'en'">
                        <h3>Expected in 2023-2024</h3>
                        <ul>
                            <li>To launch over 100 hyper-casual crypto games for Telegram</li>
                            <li>Mainnet launch</li>
                            <li>Smart Contract Builder</li>
                            <li>Cross-game tools</li>
                            <li>Rapid launch of game projects</li>
                            <li>API & SDK for developers</li>
                            <li>Game platform launch</li>
                            <li>Non-castodial wallet launch</li>
                        </ul>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Ожидается в 2023-2024</h3>
                        <ul>
                            <li>Запуск более 100 гипер-казуальных крипто-игр для Telegram</li>
                            <li>Запуск основной сети</li>
                            <li>Конструктор смарт-контрактов</li>
                            <li>Кросс-игровые инструменты</li>
                            <li>Быстрый запуск игровых проектов</li>
                            <li>API и SDK для разработчиков</li>
                            <li>Полноценный запуск игровой платформы</li>
                            <li>Запуск некастодиального кошелька</li>
                        </ul>
                    </template>
                </div>
                <div class="completed" id="completed">
                    <template v-if="$i18n.locale === 'en'">
                        <h3>Implemented in 2022</h3>
                        <div class="completed_timeline">
                            <div class="completed_outer">
                                <div class="completed_card" id="timeline_1">
                                    <div class="completed_info">
                                        <h4>Smart wallets</h4>
                                        <p>This is a user's personal address in EVM networks, making it easier to work with DeFi services. Its main function is to facilitate interaction with different blockchains.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_2">
                                    <div class="completed_info">
                                        <h4>Cross-chain Transfers</h4>
                                        <p>Decentralized transfer of tokens between blockchains. Oracles lock coins in one network and issue "mirrored" versions in another.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_3">
                                    <div class="completed_info">
                                        <h4>Cross-chain exchanges.</h4>
                                        <p>The ability to decentrally exchange a token in one network for another token in another network. For example, BNB (BEP-20) to USDT (ERC-20).</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_4">
                                    <div class="completed_info">
                                        <h4>NFT</h4>
                                        <p>A simple low-cost issuance of NFTs.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_5">
                                    <div class="completed_info">
                                        <h4>Smart contracts</h4>
                                        <p>Fast and cheap deployment of smart contracts of any complexity.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_6">
                                    <div class="completed_info">
                                        <h4>Gasless deposits</h4>
                                        <p>Ability to make transfers without having to pay fees in the network's native coin (such as ETH or BNB).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Реализовано в 2022</h3>
                        <div class="completed_timeline">
                            <div class="completed_outer">
                                <div class="completed_card" id="timeline_1">
                                    <div class="completed_info">
                                        <h4>Смарт-кошельки</h4>
                                        <p>Это персональный адрес пользователя в EVM-сетях, упрощающий работу с DeFi-сервисами. Его основная функция – облегчить взаимодействие с разными блокчейнами.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_2">
                                    <div class="completed_info">
                                        <h4>Кросс-чейн переводы</h4>
                                        <p>Децентрализованный перевод токенов между блокчейнами. Оракулы блокируют монеты в одной сети и выпускают "зеркалированные" версии в другой.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_3">
                                    <div class="completed_info">
                                        <h4>Кросс-чейн обмены</h4>
                                        <p>Возможность децентрализованно обменять токен в одной сети на другой токен в другой сети. Например, BNB (BEP-20) на USDT (ERC-20).</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_4">
                                    <div class="completed_info">
                                        <h4>NFT</h4>
                                        <p>Простой недорогой выпуск NFT.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_5">
                                    <div class="completed_info">
                                        <h4>Смарт-контракты</h4>
                                        <p>Быстрое и дешевое развертывание смарт-контрактов любой сложности.</p>
                                    </div>
                                </div>
                                <div class="completed_card" id="timeline_6">
                                    <div class="completed_info">
                                        <h4>Безгазовые депозиты</h4>
                                        <p>Возможность совершать переводы без необходимости оплачивать комиссию в нативной монете сети (например, ETH или BNB).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>
</template>
