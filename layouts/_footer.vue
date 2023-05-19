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
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://discord.gg/CvyR3h3BQV" target="_blank"><img src="/img/metagarden-chain/icon-discord.svg" alt="discord eng"></a>
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/metagarden-chain/icon-twitter.svg" alt="twitter eng"></a>
                            <a href="https://t.me/metagarden" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="telegram eng"></a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://discord.gg/CvyR3h3BQV" target="_blank"><img src="/img/metagarden-chain/icon-discord.svg" alt="discord ru"></a>
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/metagarden-chain/icon-twitter.svg" alt="twitter ru"></a>
                            <a href="https://t.me/metagardenru" target="_blank"><img src="/img/metagarden-chain/icon-telegram.svg" alt="telegram ru"></a>
                        </template>
                    </div>
                </div>
                <p>© 2023 GROM R&D LIMITED, COMPANY NUMBER 12444209, 27 OLD GLOUCESTER STREET, LONDON, UNITED KINGDOM, WC1N 3AX. </p>
            </div>
        </footer>
    </div>
</template>
