<script>
import Language from '~/components/base/Language.vue';
// import Snackbar from '~/components/base/Snackbar.vue';

export default {
    components: {
        Language,
        // Snackbar,
    },
    head: {
        htmlAttrs: {
            class: 'metagarden-influencer-html',
        },
    },
};
</script>

<template>
    <div class="wrapper page-landing metagarden-influencer-layout">
        <div class="u-container u-container--wide header__language-container">
            <Language/>
        </div>

        <nuxt/>

<!--        <Snackbar/>-->
    </div>
</template>
