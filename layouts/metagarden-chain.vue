<script>
import TheFooter from '~/layouts/_footer.vue';

export default {
    components: {
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
        <nuxt/>

    <TheFooter/>
    </div>
</template>
