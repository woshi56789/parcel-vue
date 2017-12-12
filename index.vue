<template>
    <div>Hello {{ WORLD }}!</div>
</template>

<script>
export default {
    data() {
        return {
            WORLD: 'World'
        };
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
