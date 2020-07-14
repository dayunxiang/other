<template>
    <dl class="monitor">
        <dt>
            <p class="panel-tit">压力计</p>
            <p class="panel-sub-tit">2010-06-16 14:36</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe60c;</i>
            </button>
        </dt>

        <dd>
            <div class="row">
                <span class="attr">编号：</span>
                <span class="value">BJ-FM-12345678</span>
            </div>

            <div class="row">
                <span class="attr">位置：</span>
                <span class="value">西塘红旗桥下</span>
            </div>

            <div class="row">
                <span class="attr">压力：</span>
                <span class="value">5.94MPa</span>
            </div>

            <div class="row">
                <span class="attr">状态：</span>
                <span class="value">
                    <i class="state normal warning dangerous">通讯超时</i>
                    <button class="btn-link">查看详情</button>
                </span>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'Monitor',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .monitor {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        .panel-sub-tit {
            margin-right: .3rem;
            font-size: .2rem;
            color: #999;
        }
        .row {
            padding: .1rem .2rem;

            .attr {
                color: #666;
            }
            .state {

                margin-right: .3rem;

                &:before {
                    margin-right: .05rem;
                    content: "●";

                }
                &.normal {
                    font-weight: bold;
                    color: #2d8cf0;
                }
                &.warning {
                    font-weight: bold;
                    color: #f90;
                }
                &.dangerous {
                    font-weight: bold;
                    color: #ed4014;
                }
            }
            .btn-link {
                padding: .08rem .2rem;
                color: #fff;
                font-size: .2rem;
                border: none;
                border-radius: .08rem;
                background: #2e7ae6;
                transition: all .3s;

                &:active {
                    opacity: .7;
                }
            }
        }
    }
</style>
