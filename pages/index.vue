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
        const title = getTitle(this.$td('The leading platform of crypto games for Telegram', 'metagarden-chain.title-index'));
        const description = this.$td('In order to deliver the best decentralisation, speed and fees for our crypto games we use the power of 5 sovereign blockchains: Ethereum, BNB Smart Chain, Metagarden Chain, Minter and TON.', 'metagarden-chain.menu-index-description');

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
    <div class="metagarden-chain-index">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="256" height="40"/></div>
                        <h1>{{ $td('Probably, the most popular crypto games platform in Telegram', 'metagarden-chain.title-index')}}</h1>
                        <template v-if="$i18n.locale === 'en'">
                            <div class="quote">Over <span>1 million</span> successful transactions. <br>And we are just getting started...</div>
                            <p class="subtitle-h1">
                            In order to deliver the best decentralisation, speed and fees for our crypto games we use the power of 5 sovereign blockchains: <b>Ethereum</b>, <b>BNB Smart Chain</b>, <b>Metagarden Chain</b>, <b>Minter</b> and <b>TON</b>.
                            </p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <div class="quote">Более <span>1 миллиона</span> успешных транзакций. <br>И мы только начинаем...</div>
                            <p class="subtitle-h1">
                            Чтобы обеспечить наилучшую децентрализацию, скорость и комиссию для наших крипто-игр, мы используем мощь 5 суверенных блокчейнов: <b>Ethereum</b>, <b>BNB Smart Chain</b>, <b>Metagarden Chain</b>, <b>Minter</b> и <b>TON</b>.
                            </p>
                        </template>
                    </div>
                </div>
            </div>
        </header>
        <section class="index-games-section">
            <div class="container">
                <div class="index-games-block">
                    <div class="index-games-item">
                        <div class="index-games-item-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/index-heist.avif 1x, /img/metagarden-chain/index-heist@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/index-heist.webp 1x, /img/metagarden-chain/index-heist@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/index-heist.png" srcset="/img/metagarden-chain/index-heist@2x.png 2x" alt="" role="presentation"/>
                            </picture>
                        </div>
                        <div class="index-games-item-content">
                            <h3>Heist</h3>
                            <p>{{ $td('Pig hackers rob a piggy bank! Exciting multiplayer game where players can grab big money by committing the heist of the century. Intuitive interface, interesting gameplay, great hyper-casual crypto game when you have a spare moment.', 'metagarden-chain.index-games-heist-description')}}</p>
                            <a href="http://t.me/metagardenbot?start=heist" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.games-item-button')}}</a>
                        </div>
                    </div>
                    <div class="index-games-item index-games-item-reverse">
                        <div class="index-games-item-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/index-wonder.avif 1x, /img/metagarden-chain/index-wonder@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/index-wonder.webp 1x, /img/metagarden-chain/index-wonder@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/index-wonder.png" srcset="/img/metagarden-chain/index-wonder@2x.png 2x" alt="" role="presentation"/>
                            </picture>
                        </div>
                        <div class="index-games-item-content">
                            <h3>Wonder</h3>
                            <p>{{ $td('Win, collect, and sell unique NFTs found in various WanderBoxes!', 'metagarden-chain.index-games-wonder-description')}}</p>
                            <p>{{ $td('Various collections will be added to the game. Each NFT in the collection has its own number, name, unique description, and rarity: simple, rare, epic, legendary, and the coolest - mythical!', 'metagarden-chain.index-games-wonder-description-2')}}</p>
                            <a href="http://t.me/metagardenbot?start=wonder" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.games-item-button')}}</a>
                        </div>
                    </div>
                    <div class="index-games-item">
                        <div class="index-games-item-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/index-snatch.avif 1x, /img/metagarden-chain/index-snatch@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/index-snatch.webp 1x, /img/metagarden-chain/index-snatch@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/index-snatch.png" srcset="/img/metagarden-chain/index-snatch@2x.png 2x" alt="" role="presentation"/>
                            </picture>
                        </div>
                        <div class="index-games-item-content">
                            <h3>Snatch</h3>
                            <p>{{ $td('You are in a bunker with safe deposit boxes. Each box contains cash that you can steal. Crack the locks with the lockpicks. Steal what\'s inside. But be careful! There are other skilled snatchers in the bunker with you!', 'metagarden-chain.index-games-snatch-description')}}</p>
                            <a href="http://t.me/metagardenbot?start=snatch" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.games-item-button')}}</a>
                        </div>
                    </div>
                    <div class="index-games-item index-games-item-reverse">
                        <div class="index-games-item-img">
                            <picture>
                                <source srcset="/img/metagarden-chain/index-miner.avif 1x, /img/metagarden-chain/index-miner@2x.avif 2x" type="image/avif">
                                <source srcset="/img/metagarden-chain/index-miner.webp 1x, /img/metagarden-chain/index-miner@2x.webp 2x" type="image/webp">
                                <img src="/img/metagarden-chain/index-miner.png" srcset="/img/metagarden-chain/index-miner@2x.png 2x" alt="" role="presentation"/>
                            </picture>
                        </div>
                        <div class="index-games-item-content">
                            <h3>Lucky Miner</h3>
                            <p>{{ $td('Become a miner of METAGARDEN tokens. It\'s an exciting process in the form of a game. You\'ll be receiving daily rewards with many other bonuses.', 'metagarden-chain.index-games-miner-description')}}</p>
                            <a href="http://t.me/metagardenbot?start=luckyminer" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.games-item-button')}}</a>
                        </div>
                    </div>
                </div>
                <div class="index-games-100">{{ $td('We are on track to launch over 100 crypto games for Telegram in 2023-2024', 'metagarden-chain.index-games-100')}}</div>
            </div>
        </section>
        <section class="why-telegram-section">
            <div class="container">
                <div class="why-telegram">
                    <div class="why-telegram-img">
                        <img src="/img/metagarden-chain/why-telegram.png" alt="" srcset="/img/metagarden-chain/why-telegram@2x.png 2x">
                    </div>
                    <div class="why-telegram-content">
                        <h2>{{ $td('Why Telegram', 'metagarden-chain.why-telegram-title')}}</h2>
                        <template v-if="$i18n.locale === 'en'">
                            <ul>
                                <li>The best messenger</li>
                                <li>700M user base</li>
                                <li>Great virality tools</li>
                                <li>Ability to launch games in a single tap</li>
                                <li>Top security and privacy</li>
                            </ul>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <ul>
                                <li>Лучший мессенджер</li>
                                <li>700 миллионов пользователей</li>
                                <li>Отличные инструменты виральности</li>
                                <li>Возможность запуска игр одним касанием</li>
                                <li>Высочайшая безопасность и конфиденциальность</li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </section>
        <section class="why-we-section">
            <div class="container">
                <h2>{{ $td('Why We', 'metagarden-chain.why-we-title')}}</h2>
                <template v-if="$i18n.locale === 'en'">
                    <div class="why-we-items">
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-1.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">We are highly skilled blockchain and DeFi developers</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-2.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">We’ve built <b>2 sovereign blockchains</b> that work perfectly</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-3.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">We are finishing tests for the <a href="/evm-blockchain" class="simple-link">Metagarden Chain</a>, the fastest Layer 1 EVM-compatible blockchain designed for gaming</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-4.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">We are constantly developing new <b>crypto games</b> and <b>DeFi apps</b></div>
                        </div>
                    </div>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <div class="why-we-items">
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-1.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">Мы высококвалифицированные блокчейн- и DeFi-разработчики</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-2.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">Мы создали <b>2 суверенных блокчейна</b>, которые отлично работают</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-3.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">Мы заканчиваем тестирование <a href="/ru/evm-blockchain" class="simple-link">Metagarden Chain</a>, самого быстрого EVM-совместимого блокчейна первого уровня, предназначенного для игр</div>
                        </div>
                        <div class="why-we-item">
                            <div class="why-we-img">
                                <img src="/img/metagarden-chain/why-we-4.png" alt="" role="presentation"/>
                            </div>
                            <div class="why-we-text">Мы постоянно разрабатываем новые <b>крипто-игры</b> и <b>DeFi-приложения</b></div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
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
                            <a :href="$td('https://t.me/metagardenbot?start=games', 'metagarden-chain.video-section-button-url')" class="btn" target="_blank">{{ $td('Play', 'metagarden-chain.video-section-button')}}</a>
                            <span>{{ $td('Try α-versions of our games in Telegram', 'metagarden-chain.video-button-description')}}</span>
                        </div>
                        <a :href="$td('/platform', 'metagarden-chain.video-section-more-url')" class="simple-link" target="_blank">{{ $td('Read more about platform', 'metagarden-chain.video-section-more')}}</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h2>{{ $td('Our Team', 'metagarden-chain.team-title')}}</h2>
                <div class="team-block">
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-1.avif 1x, /img/metagarden-chain/team-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-1.webp 1x, /img/metagarden-chain/team-1@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-1.png" srcset="/img/metagarden-chain/team-1@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/daniil-lashin-158a0992" target="_blank" rel="nofollow">{{ $td('Daniil Lashin', 'metagarden-chain.team-1')}}</a></h3>
                            </div>
                            <p>{{ $td('Lead Blockchain Developer, Co-Founder. Responsible for the Metagarden Chain core. Daniil is a highly qualified blockchain developer with a total of 14 years of general development experience and 7 years of specialized experience in blockchain development.', 'metagarden-chain.team-1-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-2.avif 1x, /img/metagarden-chain/team-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-2.webp 1x, /img/metagarden-chain/team-2@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-2.png" srcset="/img/metagarden-chain/team-2@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/gordeev" target="_blank" rel="nofollow">{{ $td('Evgeny Gordeev', 'metagarden-chain.team-2')}}</a></h3>
                            </div>
                            <p>{{ $td('Product Manager, Co-Founder. Venture investor and Bitcoin evangelist since 2013, Evgeny is the pioneer creator of multiple projects in the fields of online advertising, mobile apps, Big Data, and currently blockchain.', 'metagarden-chain.team-2-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-4.avif 1x, /img/metagarden-chain/team-4@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-4.webp 1x, /img/metagarden-chain/team-4@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-4.png" srcset="/img/metagarden-chain/team-4@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/ariil" target="_blank" rel="nofollow">{{ $td('Ariil Davydov', 'metagarden-chain.team-4')}}</a></h3>
                            </div>
                            <p>{{ $td('Designer, Co-Founder. Having over 17 years of experience in UX and graphic design, he is behind the whole visual part of our projects, including branding, user interface, usability, and function.', 'metagarden-chain.team-4-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-5.avif 1x, /img/metagarden-chain/team-5@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-5.webp 1x, /img/metagarden-chain/team-5@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-5.png" srcset="/img/metagarden-chain/team-2@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/nikita-eybog-214912113" target="_blank" rel="nofollow">{{ $td('Nikita Eybog', 'metagarden-chain.team-5')}}</a></h3>
                            </div>
                            <p>{{ $td('Tech Lead, Front-End Developer. All things web3—crypto wallets, protocols, cross-chain solutions, web3 security. Highly qualified DeFi developer with a total of 7 years of general development experience and 4 years of specialized experience in DeFi development.', 'metagarden-chain.team-5-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-6.avif 1x, /img/metagarden-chain/team-6@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-6.webp 1x, /img/metagarden-chain/team-6@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-6.png" srcset="/img/metagarden-chain/team-2@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/daniil-dulin-45962949/" target="_blank" rel="nofollow">{{ $td('Daniil Dulin', 'metagarden-chain.team-6')}}</a></h3>
                            </div>
                            <p>{{ $td('Back-End Developers. Works on micro-services, explorer, cross-chain integrations and APIs. 18 years of development experience, including 5 years in blockchain and DeFi services.', 'metagarden-chain.team-6-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-7.avif 1x, /img/metagarden-chain/team-7@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-7.webp 1x, /img/metagarden-chain/team-7@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-7.png" srcset="/img/metagarden-chain/team-7@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/grkamil" target="_blank" rel="nofollow">{{ $td('Kamil Mukhametzyanov', 'metagarden-chain.team-7')}}</a></h3>
                            </div>
                            <p>{{ $td('Blockchain Developer. Works on cross-chain solutions, web3 protocols, Telegram bots, smart contracts. 10 years in backend, 6 in blockchain. Has a degree in Data Science and Machine Learning.', 'metagarden-chain.team-7-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-8.avif 1x, /img/metagarden-chain/team-8@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-8.webp 1x, /img/metagarden-chain/team-8@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-8.png" srcset="/img/metagarden-chain/team-8@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/vidineev" target="_blank" rel="nofollow">{{ $td('Nikita Vidineev', 'metagarden-chain.team-8')}}</a></h3>
                            </div>
                            <p>{{ $td('Project Manager. 15 years of experience in project management and digital marketing. Has worked for a variety of large companies and brands. Holds a degree in Global Economics.', 'metagarden-chain.team-8-d')}}</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <picture>
                            <source srcset="/img/metagarden-chain/team-9.avif 1x, /img/metagarden-chain/team-9@2x.avif 2x" type="image/avif">
                            <source srcset="/img/metagarden-chain/team-9.webp 1x, /img/metagarden-chain/team-9@2x.webp 2x" type="image/webp">
                            <img src="/img/metagarden-chain/team-9.png" srcset="/img/metagarden-chain/team-9@2x.png 2x" alt="" role="presentation"/>
                        </picture>
                        <div class="team-item-content">
                            <div class="team-item-content-title">
                                <img src="/img/metagarden-chain/icon-linkedin.svg" alt="">
                                <h3 class="team-item-name"><a href="https://www.linkedin.com/in/mishakorytov/" target="_blank" rel="nofollow">{{ $td('Mikhail Korytov', 'metagarden-chain.team-9')}}</a></h3>
                            </div>
                            <p>{{ $td('Marketing Specialist. With more than 12 years of experience in the digital marketing field, he is responsible for the marketing strategy, partnerships and advertising campaigns.', 'metagarden-chain.team-9-d')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="roadmap">
            <div class="container">
                <h2>{{ $td('Roadmap', 'metagarden-chain.roadmap-title')}}</h2>
                <div class="coming">
                    <template v-if="$i18n.locale === 'en'">
                        <h3>Expected in 2023-2024</h3>
                        <ul>
                            <li>To launch over 100 crypto games for Telegram</li>
                            <li>Metagarden Chain mainnet launch</li>
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
                            <li>Запуск более 100 крипто-игр для Telegram</li>
                            <li>Запуск основной сети Metagarden Chain</li>
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
                                        <h4>Cross-chain exchanges</h4>
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
