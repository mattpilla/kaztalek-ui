<template>
    <div id="navbar-wrapper">
        <div id="navbar">
            <div id="navbar-inner">
                <i id="sidebar-toggle" class="fas fa-bars" @click="$emit('toggleSidebar')"></i>
                <router-link to="/">
                    <span @mouseenter="logo = animatedLogo" @mouseleave="logo = staticLogo">
                        <img id="logo" :src="logo">
                        <span id="brand">&lt;kaztalek&gt;</span>
                    </span>
                </router-link>
                <div class="nav-links">
                    <a href="https://twitter.com/kaztalek" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://youtube.com/kaztalek" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://twitch.tv/kaztalek" target="_blank">
                        <i class="fab fa-twitch"></i>
                    </a>
                    <a href="https://github.com/mattpilla" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
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

    #navbar-wrapper {
        height: $nav-height;
    }

    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        background-color: $bg-secondary;
        border-bottom: 1px solid $primary;
    }

    #navbar-inner {
        display: flex;
        align-items: center;
        margin: auto;
        position: relative;
        font-family: 'Roboto Mono', monospace;
        padding: 0 16px;
        height: 50px;
        max-width: $max-width;

        .nav-links {
            margin-left: auto;

            i {
                color: $text-light;
                margin-left: 16px;
                font-size: 24px;
                transition: 0.5s;

                &:hover {
                    color: $secondary;
                }
            }
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

    #sidebar-toggle {
        position: fixed;
        left: 16px;
        cursor: pointer;
    }
</style>
