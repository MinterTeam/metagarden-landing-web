<script>
import TheFooter from '~/layouts/_footer.vue';

export default {
    components: {
        TheFooter,
    },
    head: {
        htmlAttrs: {
            class: 'metagarden-chain',
        },
    },
};
</script>

<template>
    <div class="wrapper metagarden-chain-layout">
        <nuxt/>

    <TheFooter/>
    </div>
</template>
