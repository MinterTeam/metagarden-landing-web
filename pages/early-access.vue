<script>
export default {
    layout: 'metagarden-chain',
    fetch({redirect, app}) {
        return redirect(app.i18nGetPreferredPath('/buy-tokens'));
    },
};
</script>

<template>
    <div class="u-section u-container u-container--small">
        Loading…
    </div>
</template>
