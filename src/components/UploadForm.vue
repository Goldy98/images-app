<template>
    <div>
        <div class="ui massive active centered dropper" id="upload">
            <h1 class="ui centered inline text">Upload Form</h1>
            <div id="dropper">
                <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*"/>
                <span>Drag files here !</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "UploadForm",
        methods: mapActions(['uploadImages'])
    }
</script>

<style>
    #upload {
        margin-top: 20vh;
    }
    #dropper {
        margin-top: 5%;
        height: 30vh;
        width: 70vw;
        border: 2px dashed black;
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    #dropper:hover {
        background-color: #eeeeee;
    }

    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }

    h1 {
        text-align: center;
    }
</style>