<template>
    <div>
        <banner
            title="Dungeon"
            :background="require('@/assets/games/dungeon/screen1.png')">
        </banner>
        <div class="container">
            <div class="d-flex align-items-center">
                <router-link to="/games"><i class="fas fa-arrow-left"></i>&nbsp;Games</router-link>
                <a :href="`${api}/files/games/Dungeon1.2.7z`" class="ml-auto">
                    <button class="btn btn-primary">Download</button>
                </a>
            </div>
            <div class="game-content">
                <img src="@/assets/games/dungeon/git2.png" class="preview-img">
                <p>As the name suggests, <strong>Dungeon</strong> is a game that revolves around escaping a small dungeon. Unlike what you may expect, there are no enemies here. Rather, you'll find the act of escaping to be a puzzling matter. There's 2 items hidden throughout the dungeon. Use them to help complete your quest! You may find yourself visiting each room more than once...</p>
                <p>Move around with the arrow keys, interact with objects with the <strong>Z</strong> key, use the stick with <strong>X</strong>, and use the magnet with <strong>C</strong>.</p>
                <p>This Zelda-inspired project was made in a month, and finished in December 2012. The game is short; a first playthrough may take around 20 to 30 minutes.</p>
            </div>
            <div class="game-extras">
                <div class="requirements">
                    <h2>Requirements</h2>
                    <table>
                        <tr>
                            <td>OS:</td>
                            <td>Windows</td>
                        </tr>
                        <tr>
                            <td>Dependencies:</td>
                            <td>Java</td>
                        </tr>
                        <tr>
                            <td>Space:</td>
                            <td>6MB</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2>Screenshots</h2>
                    <image-gallery :images="images"></image-gallery>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/Banner';
    import ImageGallery from '@/components/ImageGallery';

    export default {
        components: {
            Banner,
            ImageGallery
        },
        data() {
            return {
                api: process.env.VUE_APP_API_URL,
                images: [
                    require('@/assets/games/dungeon/screen2.png'),
                    require('@/assets/games/dungeon/screen3.png'),
                    require('@/assets/games/dungeon/screen4.png')
                ]
            }
        }
    }
</script>
