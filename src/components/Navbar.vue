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
                    <a id="github-link" href="https://github.com/mattpilla" target="_blank">
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
        position: relative;
        font-family: 'Roboto Mono', monospace;
        padding: 0 16px;
        height: 50px;
        max-width: $max-width;
        @include content-align;

        .nav-links {
            margin-left: auto;
            white-space: nowrap;

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

    @media (max-width: 380px) {
        #github-link {
            display: none;
        }
    }

    #sidebar-toggle {
        position: fixed;
        left: 16px;
        cursor: pointer;

        @media (min-width: $sidebar-width + $max-width + 32px + 1px) {
            display: none;
        }
    }

    $menu-width: 48px;
    $logo-left: 8px;
    $logo-width: 32px;

    #logo {
        position: absolute;
        left: $logo-left;
        top: 8px;
    }

    #brand {
        margin-left: $logo-left + $logo-width;
    }

    @media (max-width: $max-width + $menu-width + 16px) {
        #logo {
            left: $logo-left + $menu-width - 16px;
        }

        #brand {
            margin-left: $logo-left + $logo-width + $menu-width - 16px;
        }
    }
</style>
