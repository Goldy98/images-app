<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item" id="logo">
            <b>
                ImagesAPP
                <span v-if="isLoggedIn">
                    |
                    <img class="ui avatar image" :src="avatar">
                    <span> {{`Logged as ${username}`}}</span>
                </span>
            </b>
        </router-link>

        <div class="right menu">
            <div class="horizontal" v-if="isLoggedIn">
                <router-link to="/" class="ui item">Gallery </router-link>
                <router-link to="/upload" class="ui item">Upload </router-link>
                <a class="ui item" @click="logOut">Logout </a>
            </div>

            <a v-else class="ui active item" @click="logIn">Login </a>
        </div>

    </div>
</template>

<script>
    import { mapActions,mapGetters } from 'vuex';

    export default {
        name: "AppHeader",
        computed: mapGetters(['isLoggedIn','username','avatar']),
        methods: mapActions(['logIn','logOut'])
    }
</script>

<style scoped>
    #logo {
        color: #62013C;
    }

    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>