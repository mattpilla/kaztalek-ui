<template>
    <div>
        <div class="gallery">
            <img v-for="(image, index) in images" :src="image" @click="selectedImage = index">
        </div>
        <div v-show="selectedImage != null" class="image-mask" @click="selectedImage = null">
            <i class="fas fa-times"></i>
            <div class="image-container">
                <i class="fas fa-arrow-left" :class="{disabled: selectedImage === 0}" @click.stop="nextImage(-1)"></i>
                <img :src="images[selectedImage]" @click.stop>
                <i class="fas fa-arrow-right" :class="{disabled: selectedImage === images.length - 1}" @click.stop="nextImage(1)"></i>
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
        },
        methods: {
            nextImage(inc) {
                let image = this.selectedImage + inc;
                if (image >= 0 && image < this.images.length) {
                    this.selectedImage = image;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    .gallery {
        background-color: #000;
        border: 1px solid $primary;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        > img {
            max-width: 120px;
            max-height: 120px;
            margin: 8px;
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
        background-color: rgba(0, 0, 0, 0.75);
        user-select: none;

        > i {
            position: fixed;
            font-size: 24px;
            top: 16px;
            right: 16px;
            cursor: pointer;
        }

        .image-container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                max-width: 100%;
                max-height: 100%;
            }

            > i {
                cursor: pointer;
                padding: 25% 16px;

                &.disabled {
                    cursor: default;
                    color: $text-disabled;
                }
            }
        }
    }
</style>
