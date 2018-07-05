<template>
    <div id="navbar">
        <router-link to="/">
            <span @mouseenter="logo = animatedLogo" @mouseleave="logo = staticLogo">
                <img id="logo" :src="logo">
                <span id="brand">&lt;kaztalek&gt;</span>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                staticLogo: null,
                animatedLogo: null,
                logo: null
            }
        },
        created() {
            this.staticLogo = require('@/assets/logo.png');
            this.animatedLogo = require('@/assets/logo_animated.gif');
            this.logo = this.staticLogo;
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/_variables.scss";

    #navbar {
        display: flex;
        font-family: 'Roboto Mono', monospace;
        background-color: $nav;
        border-bottom: 1px solid $secondary;
        padding: 16px;
    }

    #logo {
        position: absolute;
        left: 8px;
        top: 8px;
    }

    #brand {
        margin-left: 40px;
    }
</style>
