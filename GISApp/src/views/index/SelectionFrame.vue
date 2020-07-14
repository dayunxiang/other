<template>
    <dl class="selection-frame">
        <dt>
            <p class="panel-tit">选框</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe60c;</i>
            </button>
        </dt>

        <dd>
            <mt-loadmore class="loadmore">
                <div class="row">
                    <div class="selection-item full">
                        <span class="attr">管点号：</span>
                        <span class="value">Jk1234566</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">名称：</span>
                        <span class="value">给水管点</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">地面高程：</span>
                        <span class="value">15m</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">特征：</span>
                        <span class="value">神通</span>
                    </div>
                </div>

                <div class="row">
                    <div class="selection-item">
                        <span class="attr">管点号：</span>
                        <span class="value">Jk1234566</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">名称：</span>
                        <span class="value">给水管点</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">地面高程：</span>
                        <span class="value">15m</span>
                    </div>

                    <div class="selection-item">
                        <span class="attr">特征：</span>
                        <span class="value">神通</span>
                    </div>
                </div>
            </mt-loadmore>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'SelectionFrame',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .selection-frame {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            padding: 0;
        }
    }
    .loadmore {
        min-height: 30vh;
        max-height: 60vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;

        .row {
            @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: .2rem,$left: .2rem);
            display: flex;
            flex-wrap: wrap;
            padding: .1rem;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            .selection-item {
                flex-basis: 50%;
                padding: .1rem .1rem;

                &.full {
                    flex-basis: 100%;
                }
                .attr {
                    min-width: 5em;
                    text-align: right;
                    color: #666;
                }
                .value {
                    color: #333;
                }
            }
        }
    }
</style>
