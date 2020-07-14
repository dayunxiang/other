<template>
    <dl class="distance">
        <dt>
            <p class="panel-tit">总计：780米</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe60c;</i>
            </button>
        </dt>

        <dd>
            <button class="tool-item">
                <i class="icon">&#xe607;</i>
                <span>清除</span>
            </button>

            <button class="tool-item">
                <i class="icon">&#xe643;</i>
                <span>撤销</span>
            </button>

            <button class="tool-item">
                <i class="icon">&#xe613;</i>
                <span>加点</span>
            </button>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'Distance',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .distance {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            display: flex;
            align-items: center;
            padding: 0;

            .tool-item {
                @include thinLine($useBefore: true, $position: 'left', $backgroundColor: #eee,$top: .35rem, $bottom: .35rem,$left: 0);
                padding: .3rem .2rem;
                width: 0;
                flex-grow: 1;
                border: none;
                background: transparent;
                transition: all .2s;

                &:active {
                    background: #eee;
                }
                .icon {
                    @include iconfont;
                    margin-right: .1rem;
                    font-size: .4rem;
                }
                span {
                    color: #555;
                }
            }
        }
    }
</style>
