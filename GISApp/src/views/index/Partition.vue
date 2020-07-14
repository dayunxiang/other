<template>
    <dl class="partition">
        <dt>
            <p class="panel-tit">陶庒</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe60c;</i>
            </button>
        </dt>

        <dd>
            <div class="row">
                <span class="attr">供水量：</span>
                <span class="value">4.4亿m³</span>
            </div>

            <div class="row">
                <span class="attr">用水用户数：</span>
                <span class="value">32万户</span>
            </div>

            <div class="row">
                <span class="attr">售水量：</span>
                <span class="value">4.4亿m³</span>
            </div>

            <div class="row">
                <span class="attr">最小夜间流量：</span>
                <span class="value">4.4亿m³/h</span>
            </div>

            <div class="row">
                <span class="attr">产销差率：</span>
                <span class="value">18.55%</span>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'Partition',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .partition {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        .panel-sub-tit {
            margin-right: .3rem;
            font-size: .2rem;
            color: #999;
        }
        dd {
            display: flex;
            flex-wrap: wrap;
            padding: 0;
        }
        .row {
            flex-basis: 50%;
            padding: .1rem .2rem;

            .attr {
                color: #666;
            }
        }
    }
</style>
