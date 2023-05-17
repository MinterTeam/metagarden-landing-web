<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-token',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('METAGARDEN token | Platform Tokenomics', 'metagarden-token.title'));
        const description = this.$td('METAGARDEN is the utility token of Metagarden, the play-to-earn Platform with mini-games. It plays a key role in platform functionality.', 'metagarden-token.description');

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
    <div class="metagarden-landing metagarden-token-landing">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo">
                            <img src="/img/landing/metagarden/metagarden-logo.svg" alt="Metagarden" width="46" height="46"/>
                            <h1>{{ $td('METAGARDEN', 'metagarden-token.hello-title')}}</h1>
                        </div>
                        <p class="subtitle-h1">{{ $td('METAGARDEN is the utility token of Metagarden, the play-to-earn Platform with mini-games. It plays a key role in platform functionality.', 'metagarden-token.hello-description')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('https://honee.app/metagarden/mining-spots', 'metagarden-token.buy-spot-url')" class="btn btn-1" target="_blank">{{ $td('Mining METAGARDEN', 'metagarden-token.start-button')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/landing/metagarden/token.avif 1x, /img/landing/metagarden/token@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/metagarden/token.webp 1x, /img/landing/metagarden/token@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/metagarden/token.png" srcset="/img/landing/metagarden/token@2x.png 2x" alt="metagarden" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="use">
            <div class="container">
                <h2>{{ $td('Tokens Utility', 'metagarden-token.use-title')}}</h2>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/landing/metagarden/use-1.svg" alt="">
                    </div>
                    <template v-if="$i18n.locale === 'en'">
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
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Реварды</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Инфлюенсер ревард</h4>
                                <p>Выплата призов и наград за различные полезные действия на платформе, включая действия вне платформы нацеленные на продвижение проекта, а также реферальные вознаграждения.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Роялти</h4>
                                <p>Пользователи платформы, имеющие более 100 майнеров смогут получать рояли от всех выходящих игр в течение 2 лет.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Стейкинг токен</h4>
                                <p>За блокировку токенов METAGARDEN (стейкинг) игроки смогут получать дополнительные привилегии на платформе.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Ходл ревард</h4>
                                <p>Если игроки держат METAGARDEN на своем игровом балансе, они смогут получать вознаграждения на остаток (на балансе) по фиксированной ставке.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Фарминг токен</h4>
                                <p>Токен, необходимый для участия в программах предоставления ликвидности, запускаемых разработчиками игр.</p>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/landing/metagarden/use-2.svg" alt="">
                    </div>
                    <template v-if="$i18n.locale === 'en'">
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
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Функционал</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Унифицированный игровой токен</h4>
                                <p>Оплата игровых раундов, предста-вленных на платформе мини-игр, в том случае, если у игры нет своего токена.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Голосование за игры</h4>
                                <p>Именно майнеры METAGARDEN будут получать голосующие токены VOTES, которыми отбираются перспективные игры и дают право на аирдропы и скидкии до 99% до запуска.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Оплата за игровые-элементы</h4>
                                <p>Пользователи будут иметь возможность приобретать различные игровые элементы, такие как NFTs, бусты, лутбоксы, оформление в играх и прочее за токены METAGARDEN.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">ДАО гавернанс</h4>
                                <p>Токен, через который выпускаются голосующие токены VOTES необходимые для принятия решений о развитии и продвижении платформы.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Кросс-гейм репутация</h4>
                                <p>С помощью токена METAGARDEN мы сможем оценить вовлечённость игрока в платформу, получить доказательство его репутации на платформе, которая будет фиксироваться в блокчейне и транслироваться для всех игр платформы, а также будет видна и доказуема для всех пользователей этой информации.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Кросс-гейм ликвидность</h4>
                                <p>Благодаря токену METAGARDEN, токены мини-игр представленных на платформе могут обмениваться с максимальной ликвидностью. С помощью токена METAGARDEN можно играть в любые игры платформы, даже в которых действуют свои токены, так как обмен внутри платформы будет организован с максимальной простотой и выгодой.</p>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/landing/metagarden/use-3.svg" alt="">
                    </div>
                    <template v-if="$i18n.locale === 'en'">
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
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Экономика</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Комиссия в ДАО</h4>
                                <p>От 1% до 10% комиссии будет взиматься с игровых раундов, представленных на платформе мини-игр и направляться в Децентрализованную Автономную Организацию платформы на разработку и продвижение проекта.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Пулы ликвидности</h4>
                                <p>При запуске новых игр на платформе, их разработчики будут предоставлять ликвидность своим токенам через создание пула с METAGARDEN.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Залоговое обеспечение</h4>
                                <p>Игроки платформы смогут закладывать в обеспечение свои токены METAGARDEN для получения других активов и игровых элементов. Также, с помощью залога METAGARDEN будет возможность получать активы в других блокчейнах на выбор пользователя (USDT, BNB, ETH, BTC).</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Сжигание при лонче игры</h4>
                                <p>Фиксированное количество токенов METAGARDEN будет сжигаться при запуске каждой новой игры на платформе.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Выкуп и сжигание</h4>
                                <p>Токены METAGARDEN будут сжигаться после каждого игрового раунда для обеспечения дефляционной модели токеномики.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Страхование</h4>
                                <p>Игроки платформы будут иметь возможность застраховать с помощью METAGARDEN исход игровых раундов и, в случае поражения, получить компенсацию убытка.</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="circulation">
            <div class="container">
                <h2>{{ $td('Circulation and Price ', 'metagarden-token.circulation-title')}}</h2>
                <div class="pie">
                    <div class="pie-img">
                        <img src="/img/landing/metagarden/pie.svg" alt="">
                    </div>
                    <div class="pie-content">
                        <template v-if="$i18n.locale === 'en'">
                            <div class="pie-item pie-item-1"><span>Total number of tokens</span>128,000,000</div>
                            <div class="pie-item pie-item-2"><span>In circulation</span>0.8%</div>
                            <div class="pie-item pie-item-3"><span>Burned</span>0.8%</div>
                            <div class="pie-item pie-item-4"><span>Staked</span>0.45%</div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <div class="pie-item pie-item-1"><span>Общее количество токенов</span>128,000,000</div>
                            <div class="pie-item pie-item-2"><span>В обращении</span>0.8%</div>
                            <div class="pie-item pie-item-3"><span>Сожжено</span>0.8%</div>
                            <div class="pie-item pie-item-4"><span>Стейкинг</span>0.45%</div>
                        </template>
                    </div>
                </div>
                <div class="circulation-text">
                    <template v-if="$i18n.locale === 'en'">
                        <div class="circulation-text-block">
                            <p>The <strong>METAGARDEN</strong> token is represented on several blockchains:</p>
                            <div class="circulation-blockchain">
                                <img src="/img/landing/metagarden/icon-m.svg" alt="Minter">
                                <div class="circulation-blockchain-name">Minter</div>
                            </div>
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
                        </div>
                        <div class="circulation-text-block">
                            <p>Currently, there are about <strong>1,000,000</strong> tokens in free circulation on the market.</p>
                            <p>The starting price of the METAGARDEN token was <strong>$0.01</strong>, and for the first time it appeared in the decentralized liquidity pool on Minter DEX.</p>
                            <p><a href="https://chainik.io/token/METAGARDEN" target="_blank">Follow METAGARDEN trading on Minter</a></p>
                        </div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <div class="circulation-text-block">
                            <p>Токен <strong>METAGARDEN</strong> представлен в нескольких блокчейнах:</p>
                            <div class="circulation-blockchain">
                                <img src="/img/landing/metagarden/icon-m.svg" alt="Minter">
                                <div class="circulation-blockchain-name">Minter</div>
                            </div>
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
                        </div>
                        <div class="circulation-text-block">
                            <p>В настоящее время в свободном обращении на рынке насчитывается около <strong>1,000,000</strong> токенов.</p>
                            <p>Стартовая цена токена METAGARDEN составляла <strong>$0.01</strong>, и впервые он появился в децентрализованном пуле ликвидности на Minter DEX.</p>
                            <p><a href="https://chainik.io/token/METAGARDEN" target="_blank">Следите за торгами METAGARDEN в Minter</a></p>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <h2>{{ $td('Gamified Token Mining', 'metagarden-token.mining-title')}}</h2>
                <div class="simple-content-block">
                    <div class="simple-content-text">
                        <template v-if="$i18n.locale === 'en'">
                            <p>METAGARDEN tokens get distributed through gamified mining, perhaps one of the most innovative ways to distribute crypto tokens.</p>
                            <p>To become a Miner, any user can purchase a virtual Miner for a fixed price. This gives the user the right to issue a quota of METAGARDEN tokens for free circulation within 5.5 years (2000 days).</p>
                            <p>For your convenience, the mined METAGARDEN tokens will be automatically converted into <strong>USDT</strong> stablecoin.</p>
                            <p class="pie-item pie-item-1"><span>Current miner price</span>$80</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p>Токены METAGARDEN поступают в свободное обращение через геймифицированный майнинг, пожалуй, один из самых инновационных способов выпуска токенов в обращение среди крипто-проектов.</p>
                            <p>Для того, чтобы стать майнером, любой пользователь может приобрести за фиксированную цену майнер, дающий право на квотированный выпуск токенов METAGARDEN в свободное обращение в течение 5.5 лет (2000 дней).</p>
                            <p>Для удобства, получаемые токены METAGARDEN автоматически конвертируются в стейблкоин <strong>USDT</strong>.</p>
                            <p class="pie-item pie-item-1"><span>Текущая цена майнера</span>$80</p>
                        </template>
                    </div>
                    <div class="simple-content-img">
                        <picture>
                            <source srcset="/img/landing/metagarden/mining-token.avif 1x, /img/landing/metagarden/mining-token@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/metagarden/mining-token.webp 1x, /img/landing/metagarden/mining-token@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/metagarden/mining-token.png" srcset="/img/landing/metagarden/mining-token@2x.png 2x" alt="metagarden mining" role="presentation" width="306px" height="250px"/>
                        </picture>
                    </div>
                </div>
                <h2>{{ $td('Privileges of the Miner', 'metagarden-token.mining-privilege-title')}}</h2>
                <div class="mining-privilege-items">
                    <template v-if="$i18n.locale === 'en'">
                        <div class="mining-privilege-item">
                            <p>Free tokens of games released on the platform (project airdrops)</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Mining of VOTES tokens on a daily basis, which allow users to vote for new games on the platform and to receive bonuses from these projects</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Up to 99% discount on the purchase of new game tokens</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Daily free in-game items to sell or trade</p>
                        </div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <div class="mining-privilege-item">
                            <p>Бесплатные токены выходящих на платформе игр (аирдропы проектов)</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Ежедневный майнинг токенов VOTES, которые позволяют голосовать на платформе за новые игры и получать бонусы от этих проектов</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Скидки на покупку токенов новых игр до 99%</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Ежедневные бесплатные игровые элементы, которые можно продать или обменять</p>
                        </div>
                    </template>
                </div>
                <a :href="$td('https://go.honee.app/metagarden', 'metagarden-token.buy-spot-url')" class="btn btn-1" target="_blank">{{ $td('Buy miner', 'metagarden-token.mining-privilege-button')}}</a>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <h2>{{ $td('Pricing for Miners', 'metagarden-token.price-title')}}</h2>
                <template v-if="$i18n.locale === 'en'">
                    <p>The pricing of the Miners uses a quadratic model, where <strong>each successive</strong> level of the Miner selling <strong>price is twice</strong> as expensive and has <strong>twice as many tokens</strong> in supply. The supply volume of tokens can be reduced at any of the levels, but should not exceed the specified values.</p>
                    <div class="pricing">
                        <h3>PRICE AND VOLUME OF METAGARDEN TOKENS on sale at the specified price</h3>
                        <div class="pricing-items">
                            <div class="pricing-item">
                                <span>$0.04</span>
                                4 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.08</span>
                                8 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.16</span>
                                16 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.32</span>
                                32 000 000
                            </div>
                        </div>
                    </div>
                    <div class="important-text">
                        <p>For example, at the first level of the quadratic model, miners are offered for <strong>$40</strong> (which secures the right to issue 1000 tokens in 2000 days). At this level, there is a quota of <strong>4000</strong> slots.</p>
                        <p>At the second level of the quadratic model, miners cost <strong>$80</strong> per unit (1000 tokens) and the total number of miners at that level is <strong>8000</strong>, etc.</p>
                    </div>
                    <p>This model does not concentrate a large volume of METAGARDEN tokens in the hands of one group of users. The tokens are mined at a low price.</p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <p>В ценообразовании для майнеров используется квадратичная модель, при которой <strong>каждый следующий</strong> уровень цены продажи майнеров <strong>вдвое дороже</strong> и имеет <strong>вдвое больший объем</strong> предложения токенов. Объем предложения токенов может быть уменьшен на любом из уровней, но не должен превышать указанные значения.</p>
                    <div class="pricing">
                        <h3>Цена И объем токенов METAGARDEN в продаже по указанной цене</h3>
                        <div class="pricing-items">
                            <div class="pricing-item">
                                <span>$0.04</span>
                                4 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.08</span>
                                8 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.16</span>
                                16 000 000
                            </div>
                            <img src="/img/landing/metagarden/right-arrow.svg" alt="">
                            <div class="pricing-item">
                                <span>$0.32</span>
                                32 000 000
                            </div>
                        </div>
                    </div>
                    <div class="important-text">
                        <p>Для примера, на первом уровне квадратичной модели майнеры предлагаются за <strong>$40</strong> (закрепляют право на выпуск 1000 токенов за 5 лет) и имеют квоту на данном уровне в <strong>4000</strong> слотов.</p>
                        <p>На втором уровне квадратичной модели майнеры будут стоить уже <strong>$80</strong> за одну единицу (1000 токенов) и общее количество майнеров на уровне не должно превышать <strong>8000</strong> и так далее.</p>
                    </div>
                    <p>Такая модель позволяет не сосредотачиваться в руках любой группы пользователей большому объему токенов METAGARDEN, добытых при низкой цене токена.</p>
                </template>
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
