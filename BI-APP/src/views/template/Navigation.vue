<template>
    <div class="component-content">
        <van-notice-bar left-icon="volume-o">
            这个导航页面
        </van-notice-bar>

        <van-cell title="首页" is-link to="/index"/>
        <van-cell title="搜索" is-link to="/search"/>
        <van-cell title="分析" is-link to="/fenxi"/>
        <van-cell title="指标" is-link to="/zhibiao"/>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                //
            };
        },
        methods: {
            //
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
</style>
