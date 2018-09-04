<template>
    <div id="fullscreen-bg">
        <div id="not-found" :style="`background-image: url(${require('@/assets/404.jpg')})`">
            <div>
                <h1>404</h1>
                <router-link to="/">Home</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "~@/styles/variables";

    #fullscreen-bg {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #000;
    }

    #not-found {
        position: fixed;
        top: $nav-height;
        bottom: 0;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        > div {
            @include text-shadow;
            text-align: center;
            margin-top: 24px;
        }
    }
</style>
