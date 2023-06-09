<script>
import TheHeader from '~/layouts/_header.vue';
import TheFooter from '~/layouts/_footer.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
    head() {
        return {
            htmlAttrs: {
                class: 'metagarden-chain',
                'data-lang': this.$i18n.locale,
            },
        };
    },
};
</script>

<template>
    <div class="wrapper metagarden-chain-layout">
        <TheHeader/>
        <nuxt/>

    <TheFooter/>
    </div>
</template>
