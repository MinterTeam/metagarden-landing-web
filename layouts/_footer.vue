<script>
export default {

};
</script>

<template>
    <div>
        <footer>
            <div class="container">
                <div class="metagarden-footer">
                    <div class="metagarden-footer-left">
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://t.me/metagardengroup" target="_blank">Support</a>
                            <a href="mailto:hello@metagarden.io" target="_blank">Contact</a>
                            <a href="https://www.figma.com/file/MDuFThHSYniCPLdle5Yn1i/Metagarden-Chain-Media-Kit?type=design&node-id=0-1&t=v0pDC9eoTFMTK8Ri-0" target="_blank">Media Kit</a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://t.me/metagardengroup" target="_blank">Поддержка</a>
                            <a href="mailto:hello@metagarden.io" target="_blank">Контакты</a>
                            <a href="https://www.figma.com/file/MDuFThHSYniCPLdle5Yn1i/Metagarden-Chain-Media-Kit?type=design&node-id=0-1&t=v0pDC9eoTFMTK8Ri-0" target="_blank">Media Kit</a>
                        </template>
                    </div>
                    <div class="metagarden-footer-right">
                        <a :href="$td('https://discord.gg/CvyR3h3BQV', 'metagarden-chain.social-discord')" target="_blank"><img src="/img/metagarden-chain/icon-discord.svg" alt="Metagarden Chain Discord"></a>
                        <a :href="$td('https://www.youtube.com/@metagardenchain', 'metagarden-chain.social-youtube')" target="_blank"><img src="/img/metagarden-chain/icon-youtube.svg" alt="Metagarden Chain Youtube"></a>
                        <a :href="$td('https://twitter.com/metagardengames', 'metagarden-chain.social-twitter')" target="_blank"><img src="/img/metagarden-chain/icon-twitter.svg" alt="Metagarden Chain Twitter"></a>
                        <a :href="$td('https://t.me/metagarden', 'metagarden-chain.social-telegram')" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="Metagarden Chain Telegram"></a>
                    </div>
                </div>
                <p>© 2023 Minter Development Foundation. All Rights Reserved. 75 Broadway, Suite 202, San Francisco, CA, 94111.<br>For correspondence: 548 Market St #32852, San Francisco, CA 94104-5401. <b>hello@metagarden.io</b></p>
            </div>
        </footer>
    </div>
</template>
