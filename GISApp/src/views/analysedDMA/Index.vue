<template>
    <div class="analysed-wrap">
        <dl class="panel-item">
            <dt>
                <p class="panel-tit">供水量曲线</p>
            </dt>

            <dd>
                <div class="echart-wrap"></div>
            </dd>
        </dl>

        <dl class="panel-item">
            <dt>
                <p class="panel-tit">产销差及完成率</p>
            </dt>

            <dd>
                <div class="echart-wrap"></div>
            </dd>
        </dl>

        <dl class="panel-item">
            <dt>
                <p class="panel-tit">月检查漏出量</p>
            </dt>

            <dd>
                <div class="echart-wrap"></div>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "AnalysedDMA"
    }
</script>

<style lang="scss" scoped>
    .analysed-wrap {
        position: relative;
        padding-bottom: .6rem;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .panel-item {
        @include panelItem;

        .echart-wrap {
            height: 5rem;
        }
    }
</style>
