<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Tokenomics — Metagarden Chain', 'metagarden-chain.title-tokenomics'));
        const description = this.$td('MEGA is the gas token that enables the work of the gaming EVM blockchain (Metagarden Сhain) and a utility token of the Metagarden platform, a play-to-earn platform with mini-games. The METAGARDEN token plays a key role in the functioning of the blockchain and its gaming platform.', 'metagarden-chain.menu-tokenomics-description');

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
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/metagarden-chain/metagarden-chain-logo.svg" alt="Metagarden Chain" width="321" height="58"/></div>
                        <h1>{{ $td('Tokenomics', 'metagarden-chain.hello-title-tokenomics')}}</h1>
                        <p class="subtitle-h1">{{ $td('MEGA is the gas token that enables the work of the gaming EVM blockchain (Metagarden Сhain) and a utility token of the Metagarden platform, a play-to-earn platform with mini-games. The MEGA plays a key role in the functioning of the blockchain and its gaming platform.', 'metagarden-chain.hello-description-tokenomics')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('/buy-tokens', 'metagarden-chain.become-button-url')" class="btn">{{ $td('Buy Tokens', 'metagarden-chain.become-button')}}</a>
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
                <h2>{{ $td('Utility for EVM Blockchain', 'metagarden-chain.utility-title')}}</h2>
                <div class="use-block">
                    <div class="use-img">
                        <img src="/img/metagarden-chain/use-1.svg" alt="">
                    </div>
                    <template v-if="$i18n.locale === 'en'">
                        <h3>Functioning</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Blockchain transaction fees</h4>
                                <p>All blockchain transactions will be paid in MEGA.</p>
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
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <h3>Функционирование</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Комиссии за транзакции</h4>
                                <p>Все транзакции в блокчейне будут оплачиваться в токенах MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Делегирование</h4>
                                <p>В блокчейне с делегированным доказательством доли (DPoS) держатели токенов делегируют свои токены валидаторам, которые отвечают за проверку транзакций и создание новых блоков.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Голосование</h4>
                                <p>Для обновления блокчейна валидаторы используют право голоса, которое представляет собой подсчет токенов, делегированных им участниками блокчейна.</p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="use">
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
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
                                <p>Players can gain additional privileges on the Platform for staking MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Hodl Reward</h4>
                                <p>When players have MEGA on their game balance, they can receive rewards on the balance at a fixed rate.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Farming Token</h4>
                                <p>MEGA is a token that is required to participate in the liquidity programmes set up by the game developers.</p>
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
                                <p>If the game does not have its own token, MEGA is used to pay for the game rounds presented on the mini-game Platform.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Hit Launching (voting for games)</h4>
                                <p>It is the MEGA miners who receive voting VOTES tokens. These tokens select the most promising games and entitle them to airdrops and discounts of up to 99% before launch.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Payment for Game Elements</h4>
                                <p>Users will be able to purchase various game elements, such as NFTs, boosts, loot boxes, in-game art, and more for MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">The DAO Governance</h4>
                                <p>Through the MEGA and its mining process, governance tokens VOTES are issued. VOTES tokens are used to make decisions about the development and promotion of the platform.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Cross-Game Reputation</h4>
                                <p>Using the MEGA, we'll be able to assess the player's involvement on the Platform, get proof of their reputation on the Platform, which will be recorded on the blockchain and broadcast for all games on the Platform, and also visible and provable to all users of this information.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Cross-Game Liquidity</h4>
                                <p>Through the MEGA, the tokens of the mini-games presented on the Platform can be exchanged with a maximum of liquidity. With the MEGA, users can play any game on the Platform, even those in which other tokens are used. The exchange within the Platform is organised with maximum simplicity and profit.</p>
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
                                <p>When new games are launched on the Platform, their developers will provide liquidity to their tokens by creating a pool with MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Collateral</h4>
                                <p>Platform players will be able to pledge their MEGA as collateral for other assets and game elements. It will also be possible to use the MEGA pledge to obtain assets in other blockchains of the user's choice (USDT, BNB, ETH, BTC).</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Launch Fee</h4>
                                <p>At the launch of each new game on the Platform, a fixed number of MEGA will be burned.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Buyback and Burn</h4>
                                <p>MEGA are burned after each game round. This ensures a deflationary tokenomics model.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Insurance</h4>
                                <p>Platform players can use MEGA to insure the outcome of rounds and receive compensation if defeated.</p>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <h2>Применение для Play-to-Earn платформы</h2>
                    <div class="use-block">
                        <div class="use-img">
                            <img src="/img/metagarden-chain/use-2.svg" alt="">
                        </div>
                        <h3>Награды</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Инфлюенсер ревард</h4>
                                <p>Выплата призов и наград за различные полезные действия на платформе, включая действия вне платформы нацеленные на продвижение проекта, а также реферальные вознаграждения.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Роялти</h4>
                                <p>Пользователи платформы, имеющие более 100 майнеров смогут получать роялти от всех выходящих игр в течение 2 лет.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Стейкинг токен</h4>
                                <p>За блокировку токенов MEGA (стейкинг) игроки смогут получать дополнительные привилегии на платформе.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Ходл ревард</h4>
                                <p>Если игроки держат токены MEGA на своем игровом балансе, они смогут получать вознаграждения на остаток (на балансе) по фиксированной ставке.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Фарминг токен</h4>
                                <p>Токен, необходимый для участия в программах предоставления ликвидности, запускаемых разработчиками игр.</p>
                            </div>
                        </div>
                    </div>
                    <div class="use-block">
                        <div class="use-img">
                            <img src="/img/metagarden-chain/use-3.svg" alt="">
                        </div>
                        <h3>Функционал</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Унифицированный игровой токен</h4>
                                <p>Оплата игровых раундов, представленных на платформе мини-игр, в том случае, если у игры нет своего токена.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Голосование за игры</h4>
                                <p>Именно майнеры токенов MEGA будут получать голосующие токены VOTES, которыми отбираются перспективные игры и дают право на аирдропы и скидки до 99% до запуска.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Оплата за игровые-элементы</h4>
                                <p>Пользователи будут иметь возможность приобретать различные игровые элементы, такие как NFTs, бусты, лутбоксы, оформление в играх и прочее за MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">ДАО гавернанс</h4>
                                <p>Токен, через который выпускаются голосующие токены VOTES необходимые для принятия решений о развитии и продвижении платформы.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Кросс-гейм репутация</h4>
                                <p>С помощью MEGA мы сможем оценить вовлечённость игрока в платформу, получить доказательство его репутации на платформе, которая будет фиксироваться в блокчейне и транслироваться для всех игр платформы, а также будет видна и доказуема для всех пользователей этой информации.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Кросс-гейм ликвидность</h4>
                                <p>Благодаря токену MEGA, токены мини-игр представленных на платформе могут обмениваться с максимальной ликвидностью. С помощью MEGA можно играть в любые игры платформы, даже в которых действуют свои токены, так как обмен внутри платформы будет организован с максимальной простотой и выгодой.</p>
                            </div>
                        </div>
                    </div>
                    <div class="use-block">
                        <div class="use-img">
                            <img src="/img/metagarden-chain/use-4.svg" alt="">
                        </div>
                        <h3>Экономика</h3>
                        <div class="use-items">
                            <div class="use-item">
                                <h4 class="use-item-h4">Комиссия в ДАО</h4>
                                <p>От 1% до 10% комиссии будет взиматься с игровых раундов, представленных на платформе мини-игр и направляться в Децентрализованную Автономную Организацию платформы на разработку и продвижение проекта.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Пулы ликвидности</h4>
                                <p>При запуске новых игр на платформе, их разработчики будут предоставлять ликвидность своим токенам через создание пула с MEGA.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Залоговое обеспечение</h4>
                                <p>Игроки платформы смогут закладывать в обеспечение свои токены MEGA для получения других активов и игровых элементов. Также, с помощью залога MEGA будет возможность получать активы в других блокчейнах на выбор пользователя (USDT, BNB, ETH, BTC).</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Сжигание при лонче игры</h4>
                                <p>Фиксированное количество токенов MEGA будет сжигаться при запуске каждой новой игры на платформе.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Выкуп и сжигание</h4>
                                <p>MEGA будут сжигаться после каждого игрового раунда для обеспечения дефляционной модели токеномики.</p>
                            </div>
                            <div class="use-item">
                                <h4 class="use-item-h4">Страхование</h4>
                                <p>Игроки платформы будут иметь возможность застраховать с помощью MEGA исход игровых раундов и, в случае поражения, получить компенсацию убытка.</p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
        <section class="circulation">
            <div class="container">
                <h2>{{ $td('Circulation', 'metagarden-chain.сirculation-title')}}</h2>
                <div class="pie">
                    <div class="pie-img">
                        <img src="/img/metagarden-chain/circ.svg" alt="">
                    </div>
                    <template v-if="$i18n.locale === 'en'">
                        <div class="pie-content">
                            <div class="pie-item pie-item-1"><span>Total number of tokens</span>1,000,000,000</div>
                            <div class="pie-item pie-item-2"><span>Early Access Campaign</span>1%</div>
                        </div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <div class="pie-content">
                            <div class="pie-item pie-item-1"><span>Общее количество токенов</span>1,000,000,000</div>
                            <div class="pie-item pie-item-2"><span>Кампания раннего доступа</span>1%</div>
                        </div>
                    </template>
                </div>
                <div class="circulation-text">
                    <div class="circulation-text-block">
                        <p>{{ $td('The MEGA token is represented on several blockchains:', 'metagarden-chain.сirculation-blockchain')}}</p>
                        <div class="circulation-blockchain">
                            <img src="/img/landing/metagarden/icon-e.svg" alt="Ethereum">
                            <div>
                                <div class="circulation-blockchain-name">Ethereum</div>
                                <div class="circulation-blockchain-address"><a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank">0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c</a></div>
                            </div>
                        </div>
                        <div class="circulation-blockchain">
                            <img src="/img/landing/metagarden/icon-b.svg" alt="BNB Smart Chain">
                            <div>
                                <div class="circulation-blockchain-name">BNB Smart Chain</div>
                                <div class="circulation-blockchain-address"><a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank">0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="circulation-text-block">
                        <template v-if="$i18n.locale === 'en'">
                            <p>We issued MEGA coins on <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> and <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> for those who want to buy the Metagarden Chain coins before the Mainet launch.</p>
                            <p>The starting price of the MEGA token was $1.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p>Мы выпустили токены MEGA в <a href="https://etherscan.io/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">Ethereum↗</a> и <a href="https://bscscan.com/token/0x7c4e6727Ab2218AFfa6A30250b1148922bB7745c" target="_blank" rel="nofollow">BNB Smart Chain↗</a> для тех, кто хочет купить токены Metagarden Chain до запуска основной сети.</p>
                            <p>Стартовая цена токена MEGA составляла $1.</p>
                        </template>
                        <a :href="$td('/buy-tokens', 'metagarden-chain.become-button-url')" class="btn">{{ $td('Buy tokens', 'metagarden-chain.become-button')}}</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="vision">
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
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
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <h2>Как мы видим распределение</h2>
                    <p>Как команда разработчиков, мы твердо верим, что игровой EVM-блокчейн и play-to-earn платформа, которую мы создаем, имеет сильное предложение и перспективную рыночную стоимость, поскольку мы наблюдаем за развитием WEB3. Мы решили удержать 99% токенов, чтобы запрограммировать надежное развитие проекта. Мы рассматриваем три основные области, которые помогут нам достичь успеха проекта, и наши токены планируется использовать в этих областях.</p>
                    <div class="vision-ico">
                        <div class="vision-ico-item">
                            <img src="/img/metagarden-chain/v-1.svg" alt="">
                            <b>Исследование <br>и разработка</b>
                        </div>
                        <div class="vision-ico-item">
                            <img src="/img/metagarden-chain/v-2.svg" alt="">
                            <b>Маркетинг</b>
                        </div>
                        <div class="vision-ico-item">
                            <img src="/img/metagarden-chain/v-3.svg" alt="">
                            <b>Партнерские отношения</b>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>
