<template>
    <div id="sidebar" :class="{open}" v-on-clickaway="closeSidebar">
        <div id="sidebar-inner">
            <router-link to="/abc">A Button Challenge</router-link>
            <router-link to="/games">Games</router-link>
            <hr>
            <a :href="`${api}/WOP`">WOP</a>
            <a :href="`${api}/get-down`">Get Down</a>
        </div>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';

    export default {
        mixins: [clickaway],
        props: ['open'],
        data() {
            return {
                api: process.env.VUE_APP_API_URL
            }
        },
        methods: {
            closeSidebar(e) {
                if (e.target.id !== 'sidebar-toggle') {
                    this.$emit('close');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    #sidebar {
        position: fixed;
        top: $nav-height;
        left: 0;
        width: $sidebar-width;
        height: 100%;
        background-color: $bg-secondary;
        border-right: 1px solid $primary;
        z-index: 9;
        transition: 0.25s;

        @media (max-width: $sidebar-width + $max-width + 32px) {
            left: -$sidebar-width - 1px;

            &.open {
                left: 0;
            }
        }
    }

    #sidebar-inner {
        padding: 16px;

        > a {
            display: block;
        }
    }
</style>
