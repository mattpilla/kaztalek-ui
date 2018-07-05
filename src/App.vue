<template>
    <div id="app">
        <navbar></navbar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar';

    export default {
        components: {
            Navbar
        }
    }
</script>

<style src="@/styles/main.scss" lang="scss"></style>
