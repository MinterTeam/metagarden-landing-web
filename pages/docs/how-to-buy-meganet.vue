<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-chain',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('How to buy MEGANET — Metagarden Chain pre-launch tokens', 'metagarden-chain.title-how-buy-meganet'));
        const description = this.$td('For every 1 MEGANET token, you will receive 2 MEGA coins (native Metagarden Chain coins) at the Mainnet launch.', 'metagarden-chain.menu-how-buy-meganet-description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
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
    <div class="metagarden-chain-docs">
        <header>
            <div class="container">
                <div class="docs">
                    <div class="docs-content">
                        <template v-if="$i18n.locale === 'en'">
                            <h1>How to buy MEGANET – the Metagarden Chain pre-launch token</h1>
                            <p class="subtitle-h1">MEGANET is a prelunch token of Metagarden Chain, the fastest Layer 1 EVM-compatible blockchain designed for gaming. For every 1 MEGANET token, you will receive 2 MEGA coins (native Metagarden Chain coins) at the Mainnet launch. There are several ways to buy MEGANET token, choose the most convenient for you.</p>
                            <div class="buy-price-block">
                                <h3 class="buy-price-h3">Current price:</h3>
                                <div class="buy-price-value">1 MEGANET = $0.32</div>
                                <small>Price may vary for different purchase methods</small>
                            </div>
                            <h2>Via the Launchpad</h2>
                            <p>
                                <ol>
                                    <li>Go to the <a href="https://launchpad.metagarden.io" target="_blank">Metagarden launchpad</a></li>
                                    <li>Sign up by creating a new address (or sign in with the sid-phrase if you already have an address)</li>
                                    <li>Go to the balance page</li>
                                </ol>
                            </p>
                            <h3><img src="/img/metagarden-chain/c-ethereum.png" width="24" height="24">Ethereum</h3>
                            <p>Send ETH or USDT (ERC-20) to the specified smart address. After the transfer, you will be automatically credited with MEGANET tokens.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>Ethereum network fee will be ≈ $100. However, we will compensate you with MEGANET tokens. To receive compensation, please contact support.</span>
                            </div>
                            <h3><img src="/img/metagarden-chain/c-bnb.png" width="24" height="24">BNB Smart Chain</h3>
                            <p>Send BNB or USDT (BEP-20) to the specified smart address. After the transfer, you will be automatically credited with MEGANET tokens.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>BNB Smart Chain network fee ≈ 3$.</span>
                            </div>
                            <p><b>Warning!</b> When transferring to the special smart addresses, the tab with the balance page should be open so that MEGANET tokens are automatically credited to your address.</p>
                            <p>If automatic crediting did not happen, a box will be available at the top of the page with a manual continuation of the exchange process:</p>
                            <img src="/img/metagarden-chain/dep-en.png" width="431" height="233" alt="" class="doc-img">
                            <p>Click the "Deposit" button and wait for MEGANET tokens to be credited.</p>
                            <div class="buttons-block"><a href="https://launchpad.metagarden.io/ru" class="btn" target="_blank">Go to Launchpad</a></div>
                            <h3><img src="/img/metagarden-chain/icon-social-telegram-circle.svg" width="24" height="24" alt="">CryptoBot (Telegram)</h3>
                            <p>
                                <ol>
                                    <li>Select an appropriate buying method in the launchpad or <a href="http://t.me/metagardenbot?start=meganet" target="_blank" rel="nofollw">go to the bot</a> manually</li>
                                    <li>Enter your Mx address, where MEGANET tokens will be credited</li>
                                    <li>Choose a payment token</li>
                                    <li>Specify the amount of MEGANET to purchase</li>
                                    <li>Click <b>Pay</b> and make a payment through CryptoBot</li>
                                    <li>After payment, MEGANET tokens will be instantly credited to your address</li>
                                </ol>
                            </p>
                            <div class="buttons-block"><a href="http://t.me/metagardenbot?start=meganet" class="btn" target="_blank">Go to Telegram</a></div>
                            <h2>Exchange in Minter</h2>
                            <p>If you have assets in the Minter network, you can exchange them for MEGANET tokens. You can do this both in the launchpad (the last block on the balance page) and in any wallets.</p>
                            <h3><img src="/img/metagarden-chain/icon-honee.svg" width="24" height="24" alt="">Honee</h3>
                            <p>
                                <ol>
                                    <li>Open a special <a href="https://my.honee.app/swap/MEGANET" target="_blank">exchange card</a></li>
                                    <li>Choose a payment token and amount</li>
                                    <li>Verify the correct exchange rate and the received MEGANET tokens</li>
                                    <li>Press <b>Buy</b> and confirm the transaction</li>
                                    <li>After payment, MEGANET tokens will be instantly credited to your address</li>
                                </ol>
                            </p>
                            <img src="/img/metagarden-chain/buy-honee-en.png" width="429" height="614" alt="" class="doc-img">
                            <div class="buttons-block"><a href="https://my.honee.app/swap/MEGANET" class="btn" target="_blank">Go to Honee</a></div>
                            <h3><img src="/img/metagarden-chain/icon-minter.svg" width="24" height="24" alt="">Minter Console</h3>
                            <p>
                                <ol>
                                    <li>Open Minter Console from the <a href="https://console.minter.network/swap" target="_blank">Swap tab</a></li>
                                    <li>Select the <b>Sell Coins</b> form</li>
                                    <li>Specify the selling token and its amount</li>
                                    <li>Make sure that the rate and the MEGANET tokens you receive are correct</li>
                                    <li>Press <b>Sell</b> and confirm the transaction</li>
                                    <li>After payment, MEGANET tokens will be credited to your address instantly</li>
                                </ol>
                            </p>
                            <img src="/img/metagarden-chain/buy-con-en.png" width="1133" height="543" alt="" class="doc-img">
                            <div class="buttons-block"><a href="https://console.minter.network/swap" class="btn" target="_blank">Go to Console</a></div>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h1>Как купить MEGANET, пре-лонч токены Metagarden Chain</h1>
                            <p class="subtitle-h1">MEGANET – это пре-лонч токен Metagarden Chain, быстрого игрового EVM-блокчейна первого уровня. За каждый токен MEGANET вы получите 2 монеты MEGA (нативные монеты Metagarden Chain) при запуске основной сети. Есть несколько способов купить токен MEGANET, выбирайте наиболее удобный для вас.</p>
                            <div class="buy-price-block">
                                <h3 class="buy-price-h3">Актуальная цена:</h3>
                                <div class="buy-price-value">1 MEGANET = $0.32</div>
                                <small>Для разных способов покупки цена может отличаться</small>
                            </div>
                            <h2>Через лаунчпад</h2>
                            <p>
                                <ol>
                                    <li>Зайдите на <a href="https://launchpad.metagarden.io/ru" target="_blank">лаунчпад Metagarden</a></li>
                                    <li>Зарегистрируйтесь, создав новый адрес (или войдите с помощью сид-фразы, если у вас уже есть адрес)</li>
                                    <li>Перейдите на страницу баланса</li>
                                </ol>
                            </p>
                            <h3><img src="/img/metagarden-chain/c-ethereum.png" width="24" height="24">Ethereum</h3>
                            <p>Отправьте ETH или USDT (ERC-20) на указанный в поле смарт-адрес. После перевода, вам автоматически зачислятся токены MEGANET.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>Комиссия в сети Ethereum ≈ $100. Однако, мы компенсируем ее в виде токенов MEGANET. Для получения компенсации обратитесь в службу поддержки.</span>
                            </div>
                            <h3><img src="/img/metagarden-chain/c-bnb.png" width="24" height="24">BNB Smart Chain</h3>
                            <p>Отправьте BNB или USDT (BEP-20) на указанный в поле смарт-адрес. После перевода, вам автоматически зачислятся токены MEGANET.</p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>Комиссия в сети BNB Smart Chain ≈ $3.</span>
                            </div>
                            <p><b>Внимание!</b> Во время перевода на специальные смарт-адреса, вкладка со страницей баланса должны быть открыта, чтобы токены MEGANET автоматически зачислились на ваш адрес.</p>
                            <p>Если автоматического зачисления не произошло, то в верхней части страницы будет доступно окошко с ручным продолжением процесса обмена:</p>
                            <img src="/img/metagarden-chain/dep-ru.png" width="431" height="233" alt="" class="doc-img">
                            <p>Нажмите кнопку “Зачислить” и ожидайте зачисления токенов MEGANET.</p>
                            <h3><img src="/img/metagarden-chain/icon-card.svg" width="24" height="24">Банковской картой</h3>
                            <p>
                                <ol>
                                    <li>Выберите соответствующий способ покупки, чтобы приобрести токены MEGANET с помощью карты</li>
                                    <li>Укажите количество токенов к покупке</li>
                                    <li>Переводите указанную сумму на выданные реквизиты</li>
                                    <li>Ожидайте зачисления MEGANET в течение нескольких минут</li>
                                </ol>
                            </p>
                            <div class="warning-block">
                                <img src="/img/metagarden-chain/icon-warning.svg" alt="">
                                <span>Важно! Переводите точно указанную сумму, иначе заказ не будет исполнен, а отправленные деньги будут потеряны.</span>
                            </div>
                            <div class="buttons-block"><a href="https://launchpad.metagarden.io/ru" class="btn" target="_blank">Перейти в лаунчпад</a></div>
                            <h3><img src="/img/metagarden-chain/icon-social-telegram-circle.svg" width="24" height="24" alt="">CryptoBot (Telegram)</h3>
                            <p>
                                <ol>
                                    <li>Выберите соответствующий способ покупки в лаунчпаде или <a href="http://t.me/metagardenbot?start=meganet" target="_blank" rel="nofollw">перейдите в бота</a> вручную</li>
                                    <li>Укажите ваш Mx-адрес, на который будут зачислены токены MEGANET</li>
                                    <li>Выберите токен оплаты</li>
                                    <li>Укажите количество MEGANET к покупке</li>
                                    <li>Нажмите кнопку <b>Оплатить</b> и проведите оплату через бота CryptoBot</li>
                                    <li>После оплаты токены MEGANET будут зачислены на ваш адрес мгновенно</li>
                                </ol>
                            </p>
                            <div class="buttons-block"><a href="http://t.me/metagardenbot?start=meganet" class="btn" target="_blank">Перейти в Telegram-бот</a></div>
                            <h2>Обмен в Minter</h2>
                            <p>Если у вас есть активы в сети Minter, вы можете обменять их на токены MEGANET. Сделать это можно как в лаунчпаде (последний блок на странице баланса), так и в любых кошельках.</p>
                            <h3><img src="/img/metagarden-chain/icon-honee.svg" width="24" height="24" alt="">Honee</h3>
                            <p>
                                <ol>
                                    <li>Откройте специальную <a href="https://my.honee.app/ru/swap/MEGANET" target="_blank">карточку обмена на MEGANET</a></li>
                                    <li>Выберите токен оплаты и количество</li>
                                    <li>Убедитесь в правильности курса и получаемых токенов MEGANET</li>
                                    <li>Нажмите <b>Купить</b> и подтвердите операцию</li>
                                    <li>После оплаты токены MEGANET будут зачислены на ваш адрес мгновенно</li>
                                </ol>
                            </p>
                            <img src="/img/metagarden-chain/buy-honee-ru.png" width="429" height="614" alt="" class="doc-img">
                            <div class="buttons-block"><a href="https://my.honee.app/ru/swap/MEGANET" class="btn" target="_blank">Перейти в Honee</a></div>
                            <h3><img src="/img/metagarden-chain/icon-minter.svg" width="24" height="24" alt="">Minter Console</h3>
                            <p>
                                <ol>
                                    <li>Откройте Minter Console на вкладке <a href="https://console.minter.network/ru/swap" target="_blank">Конвертация</a></li>
                                    <li>Выберите форму <b>Продажа монет</b></li>
                                    <li>Укажите токен продажи и его количество</li>
                                    <li>Убедитесь в правильности курса и получаемых токенов MEGANET</li>
                                    <li>Нажмите <b>Продать</b> и подтвердите операцию</li>
                                    <li>После оплаты токены MEGANET будут зачислены на ваш адрес мгновенно</li>
                                </ol>
                            </p>
                            <img src="/img/metagarden-chain/buy-con-ru.png" width="1133" height="543" alt="" class="doc-img">
                            <div class="buttons-block"><a href="https://console.minter.network/ru/swap" class="btn" target="_blank">Перейти в Console</a></div>
                        </template>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
