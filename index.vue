<template>
    <div>Hello {{ WORLD }}! <att /></div>
</template>

<script>
import a from './a.vue';
import b from './b.js';

export default {
    data() {
        return {
            WORLD: b
        };
    },
    components: {
        Att: a
    }
};
</script>


<style lang="less">
    @color: blue;

    div {
        color: @color;
    }
</style>

<style scoped>
    div {
        font-size: 32px;
    }
</style>
