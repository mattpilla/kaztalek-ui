<template>
    <div>
        <banner
            title="Dungeon"
            :background="require('@/assets/games/dungeon/screen1.png')">
        </banner>
        <div class="container">
            <div class="d-flex">
                <router-link to="/games"><i class="fas fa-arrow-left"></i>&nbsp;Games</router-link>
                <a :href="`${api}/files/games/Dungeon1.2.7z`" class="ml-auto">
                    <button class="btn btn-primary">Download</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner';

    export default {
        components: {
            Banner
        },
        data() {
            return {
                api: process.env.VUE_APP_API_URL
            }
        }
    }
</script>
