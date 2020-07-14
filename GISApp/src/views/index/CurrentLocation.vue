<template>
    <dl class="location-list">
        <dt>
            <p class="panel-tit">当前位置</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe60c;</i>
            </button>
        </dt>

        <dd>
            <mt-loadmore>
                <div v-for="n in 20" :key="n" class="location-item">
                    <p class="name">嘉善县实验中学</p>

                    <address>
                        <i class="icon">&#xe63f;</i>
                        <span>福建省福州市健康之路</span>
                    </address>
                </div>
            </mt-loadmore>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'CurrentLocation',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .location-list {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            padding: 0;
        }
    }
    .location-item {
        @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: 0,$left: 0);
        padding: .2rem .3rem;
        transition: all .2s;

        &:active {
            background: #eee;
        }
        .name {
            color: #2e7ae6;
        }
        address {
            font-size: .2rem;

            .icon {
                @include iconfont;
                margin-right: .1rem;
                color: #666;
            }
        }
    }
    .mint-loadmore {
        min-height: 30vh;
        max-height: 60vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>
