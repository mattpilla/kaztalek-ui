<template>
    <div id="navbar">
        <div id="navbar-inner">
            <router-link to="/">
                <span @mouseenter="logo = animatedLogo" @mouseleave="logo = staticLogo">
                    <img id="logo" :src="logo">
                    <span id="brand">&lt;kaztalek&gt;</span>
                </span>
            </router-link>
            <div class="nav-links">
                <router-link to="/games">Games</router-link>
            </div>
        </div>
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
    @import "~@/styles/variables";

    #navbar {
        background-color: $nav;
        border-bottom: 1px solid $secondary;
    }

    #navbar-inner {
        display: flex;
        margin: auto;
        position: relative;
        font-family: 'Roboto Mono', monospace;
        padding: 16px;
        max-width: $max-width;

        .nav-links {
            margin-left: auto;
        }
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
