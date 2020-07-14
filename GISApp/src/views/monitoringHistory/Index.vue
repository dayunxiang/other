<template>
    <div class="monitoring-history">
        <dl class="monitoring-item">
            <dt>
                <div class="title-wrap">
                    <p class="title">压力趋势</p>
                    <p class="sub-title">累积流量: 2345.234立方米</p>
                </div>

                <button class="btn-edit">&#xe608;</button>
            </dt>

            <dd>
                <!-- 表(还没写，好困，我先睡个美容觉，tips: 表和图互斥哦) -->
                <table class="table">
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th>压力(MPa)</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="n in 10" :key="n">
                            <td>06:34</td>
                            <td>2.74</td>
                        </tr>
                    </tbody>
                </table>

                <!-- 图 -->
                <!-- <div class="filter-item">
                    <button>昨天</button>
                    <button class="curr">上月</button>
                    <button>上周</button>
                    <button>今日</button>
                    <button>本周</button>
                    <button>本月</button>
                </div>

                <div class="echart-wrap"></div> -->
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'MonitoringHistory',
    };
</script>

<style lang="scss" scoped>
    .monitoring-history {
        position: relative;
        user-select: none;
    }
    .table {
        width: 100%;

        thead {
            background-color: #f8f8f9;

            th {
                padding: .1rem;
                text-align: center;
                border: 1px solid #e8eaec;
            }
        }
        tbody {
            tr {
                &:nth-child(3n) {
                    background: #f3f3f3;
                }
            }
           td {
                padding: .1rem;
                text-align: center;
                border: 1px solid #e8eaec;
            }
        }
    }
    .monitoring-item {
        dt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .2rem .3rem;

            .title {
                font-size: .4rem;
                font-weight: bold;
                color: #2e7ae6;
            }
            .sub-title {
                color: #999;
            }
            .btn-edit {
                @include iconfont;
                border: none;
                font-size: .4rem;
                color: #2e7ae6;
                background: transparent;
            }
        }
        dd {
            padding: .2rem;
            text-align: center;
        }
    }
    .filter-item {
        margin: auto;
        display: inline-flex;
        align-items: center;
        border: 1px solid #2e7ae6;
        border-radius: .08rem;

        button {
            padding: .05rem .2rem;
            border: none;
            font-size: .2rem;
            background: transparent;
            transition: all .3s;

            &:active {
                opacity: .9;
            }
            &.curr {
                color: #fff;
                background: #2e7ae6;
            }
        }
    }
    .echart-wrap {
        height: 6rem;
    }
</style>
