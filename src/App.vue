<template>
    <div id="app">
        <navbar @toggleSidebar="sidebarOpen = !sidebarOpen"></navbar>
        <sidebar :open="sidebarOpen"></sidebar>
        <div v-if="ie" class="container">
            <p>Instead of wasting time with browser compatibility, I decided to show this message if you're using Internet Explorer. The site doesn't work in IE. Please use another browser, not so that you can use this site, but for your own sanity.</p>
            <p>If you do see this message, you can message me on Twitter and let me know though. I can make the site <i>"usable"</i> with just a bit of effort, probably, if somebody out there truly wants this.</p>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar';
    import Sidebar from '@/components/Sidebar';

    export default {
        components: {
            Navbar,
            Sidebar
        },
        data() {
            return {
                ie: false,
                sidebarOpen: true
            }
        },
        created() {
            let ua = window.navigator.userAgent;
            if (ua.includes('MSIE ') || ua.includes('Trident/')) {
                this.ie = true;
            }
        }
    }
</script>

<style src="@/styles/main.scss" lang="scss"></style>
