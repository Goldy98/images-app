<template>
    <div>

        <div class="ui massive active centered" id="imageLists" v-if="isLoggedIn">
            <h1 class="ui centered inline text">Here's your uploaded images list</h1>

            <div class="ui centered center image-container">
                <img class="imgUpload" v-for="image in allImages" :src="image.link" :key="image.id"/>
            </div>
        </div>

        <div v-else>
            <div class="ui massive active centered" id="loginToGetStarted">
                <h1 class="ui centered inline text">Login to get started</h1>
                <div class="loginImgContainer">
                    <img src="../assets/images/login.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions,mapGetters } from 'vuex';

    export default {
        name: "ImagesList",
        methods: mapActions(['fetchImages']),
        created() {
            this.fetchImages()
        },
        computed: mapGetters(['allImages','isLoggedIn'])
    }
</script>

<style>

    #loginToGetStarted {
        margin-top: 10vh;
    }

    #imageLists {
        margin-top: 5vh;
    }

    h1 {
        text-align: center;
        margin: 30px;
    }

    .image-container {
        column-count: 3;
        column-gap: 1%;
        row-gap: 1%;
    }

    .imgUpload {
        max-width: 100%;
        padding: 10px;
        border: solid 1px #eeeeee;
    }

    .loginImgContainer {
        text-align: center;
    }
</style>