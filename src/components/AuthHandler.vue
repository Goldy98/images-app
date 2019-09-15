<template>
    <div class="ui massive active centered inline text loader" id="authLoader">Chargement...</div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "AuthHandler",
        methods: mapActions(['finalizeLogin','getAvatar']),
        created() {
            this.finalizeLogin(window.location.hash);
        }
    }
</script>

<style scoped>
    #authLoader {
        margin-top: 40vh;
    }
</style>