<template>
    <dl class="bao-zhang-yong-hu">
        <dt>
            <p class="panel-tit">保障用户</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe61a;</i>
            </button>
        </dt>

        <dd>
            <mt-loadmore>
                <div v-for="n in 20" :key="n" class="baozhang-item">
                    <i class="icon">&#xe6e3;</i>
                    <p class="name">嘉善县实验中学</p>
                </div>
            </mt-loadmore>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'BaoZhangYongHu',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .bao-zhang-yong-hu {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            padding: 0;
        }
    }
    .baozhang-item {
        @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: 0,$left: 0);
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        transition: all .2s;

        &:active {
            background: #eee;
        }
        .icon {
            @include iconfont;
            margin-right: .1rem;
            color: #999;
            font-size: .4rem;
        }
        .name {
            @include textEllipsis($type: 'singleRow', $maxLength: 100%);
        }
    }
    .mint-loadmore {
        min-height: 30vh;
        max-height: 60vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>
