<template>
    <div class="banner" :style="`background-image: url(${background})`">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        props: ['title', 'background']
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    .banner {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 15vh;
        min-height: 100px;
        background-position: right center;
        background-size: cover;
        position: relative;
        border-bottom: 1px solid $primary;

        > h1 {
            @include text-shadow;
            line-height: 1;
            color: $primary;
            padding: 16px;
            width: 100%;
            max-width: $max-width;
            @include content-align;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
</style>
