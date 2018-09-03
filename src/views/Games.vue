<template>
    <div class="container">
        <h1>Games</h1>
        <p>Here's a few pretty short games I've made, mostly during my free time in college. They suck, but I have a strange fondness for them.</p>
        <div class="games-container">
            <router-link :to="{name: 'dungeon'}">
                <card
                    :thumbnail="require('@/assets/games/dungeon/git2.png')"
                    title="Dungeon">
                    Zelda-inspired dungeon with items
                </card>
            </router-link>
            <router-link :to="{name: 'cafde'}">
                <card
                    :thumbnail="require('@/assets/games/cafde/screen3.png')"
                    title="Cafde's Quest for Satisfaction">
                    Telekinetically move a coffee mug to dodge sugar cubes
                </card>
            </router-link>
            <router-link :to="{name: 'sonichs'}">
                <card
                    :thumbnail="require('@/assets/games/sonichs/screen6.png')"
                    title="Sonic High School">
                    Visual interpretation of the infamous titular fan-fiction
                </card>
            </router-link>
            <router-link :to="{name: 'cafdehd'}">
                <card
                    :thumbnail="require('@/assets/games/cafdehd/screen3.png')"
                    title="Cafde's Quest for Satisfaction 1.5 HD REMIX">
                    Rebuild of Cafde: 1.5 You Will (Not) Be Satisfied
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
