<script>
// import TheFooter from '~/layouts/_footer.vue';
// import Language from '~/components/base/Language.vue';
// import Snackbar from '~/components/base/Snackbar.vue';

export default {
    components: {
        // TheFooter,
        // Language,
        // Snackbar,
    },
    head: {
        htmlAttrs: {
            class: 'default-layout',
        },
    },
};
</script>

<template>
    <div class="wrapper metagarden-games">
        <nuxt/>
    </div>
</template>
