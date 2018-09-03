<template>
    <div>
        <div class="gallery">
            <img v-for="image in images" :src="image" @click="selectedImage = image">
        </div>
        <div v-show="selectedImage" class="image-mask" @click="selectedImage = null">
            <div class="image-container">
                <img :src="selectedImage" @click.stop>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['images'],
        data() {
            return {
                selectedImage: null
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    .gallery {
        background-color: #000;
        border: 1px solid $primary;
        padding: 16px 8px;
        display: flex;
        align-items: center;

        > img {
            max-width: 120px;
            max-height: 120px;
            margin: 0 8px;
            cursor: zoom-in;
        }
    }

    .image-mask {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);

        .image-container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>
