<template>
    <div id="sidebar" :class="{open}">
        <div id="sidebar-inner">
            ok
        </div>
    </div>
</template>

<script>
    export default {
        props: ['open']
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    #sidebar {
        position: fixed;
        top: $nav-height;
        left: -$sidebar-width - 1px;
        width: $sidebar-width;
        height: 100%;
        background-color: $bg-secondary;
        border-right: 1px solid $primary;
        z-index: 9;
        transition: 0.25s;

        &.open {
            left: 0;
        }
    }

    #sidebar-inner {
        padding: 16px;
    }
</style>
