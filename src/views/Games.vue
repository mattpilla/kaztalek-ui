<template>
    <div class="container">
        <h1>Games</h1>
        <div class="games-container">
            <router-link :to="{name: 'dungeon'}">
                <card
                    :thumbnail="require('@/assets/games/dungeon/git2.png')"
                    title="Dungeon">
                    stats idk
                </card>
            </router-link>
            <router-link :to="{name: 'cafde'}">
                <card
                    :thumbnail="require('@/assets/games/cafde/screen3.png')"
                    title="Cafde's Quest for Satisfaction">
                    good game
                </card>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card';

    export default {
        components: {
            Card
        }
    }
</script>

<style scoped lang="scss">
    .games-container {
        display: flex;
        flex-wrap: wrap;

        > a {
            flex-grow: 1;
            min-width: 200px;
            max-width: 400px;
            margin: 0 16px 16px 0;
        }
    }
</style>
