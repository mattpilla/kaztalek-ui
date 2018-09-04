<template>
    <div class="card">
        <img v-if="thumbnail" class="thumbnail" :src="thumbnail">
        <div class="card-content">
            <span class="title">{{title}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['thumbnail', 'title']
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/variables";

    .card {
        display: flex;
        color: $text-light;
        background-color: $bg-secondary;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid $primary;

        .thumbnail {
            $thumbnail-size: 120px;
            width: $thumbnail-size;
            height: $thumbnail-size;
            border-radius: 2px;
            margin-right: 16px;
        }

        .card-content {
            display: flex;
            flex-direction: column;

            .title {
                font-weight: bold;
                color: $secondary;
                margin-bottom: 8px;
            }
        }
    }
</style>
