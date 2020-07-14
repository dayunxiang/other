<template>
    <div class="component-content">
        <div id="mainMap" class="map"></div>

        <div class="aside">
            <dl class="task-item">
                <dt>
                    <p class="task-tit">XJ-官网巡检-2020-02-11</p>

                    <button class="tool">
                        <i>&#xe603;</i>
                        <p>全部点位</p>
                    </button>
                </dt>

                <dd>
                    <div class="attr">检查点：</div>

                    <div class="content">
                        <progress value="22" max="100"></progress>

                        <div class="task-state">
                            <em>25</em> / <em>100</em>
                        </div>
                    </div>
                </dd>

                <dd>
                    <div class="attr">事件数：</div>

                    <div class="content">
                        <p class="event-num">共2个</p>

                        <i class="arrow">&#xe73b; </i>
                    </div>
                </dd>
            </dl>

            <div class="tools">
                <button>开始巡检</button>
                <button class="theme-warning">巡检结束</button>
            </div>
        </div>

        <!-- 当前位置 -->
        <mt-popup
            v-model="locationDialogVisible"
            position="bottom"
            :modal="false"
            class="location-popup"
        >
            <CurrentLocation @on-close="hideLocationDialog"></CurrentLocation>
        </mt-popup>

        <!-- 爆管抢修详情 -->
        <mt-popup
            v-model="baoGuanDialogVisible"
            position="bottom"
            :modal="false"
            class="bao-guan-popup"
        >
            <BaoGuan @on-close="hideBaoGuanDialog"></BaoGuan>
        </mt-popup>

        <!-- 保障用户 -->
        <mt-popup
            v-model="baoZhangYongHuDialogVisible"
            position="bottom"
            :modal="false"
            class="baozhangyonghu-popup"
        >
            <BaoZhangYongHu @on-close="hideBaoZhangYongHuDialog"></BaoZhangYongHu>
        </mt-popup>

        <!-- 阀门状态更新 -->
        <mt-popup
            v-model="faMenUpdataDialogVisible"
            position="bottom"
            :modal="false"
            class="baozhangyonghu-popup"
        >
            <FaMenUpdata @on-close="hideFaMenUpdataDialog"></FaMenUpdata>
        </mt-popup>

        <!-- 爆管影响范围 -->
        <mt-popup
            v-model="fanWeiDialogVisible"
            position="bottom"
            :modal="false"
            class="bao-guan-popup"
        >
            <FanWei @on-close="hideFanWeiDialog"></FanWei>
        </mt-popup>
    </div>
</template>

<script>
    import CurrentLocation from './CurrentLocation';
    import BaoGuan from './BaoGuan';
    import BaoZhangYongHu from './BaoZhangYongHu';
    import FaMenUpdata from './FaMenUpdata';
    import FanWei from './FanWei';

    export default {
        name: 'Xunjianjiandu',
        components: {
            CurrentLocation, // 当前位置
            BaoGuan, // 爆管抢修详情
            BaoZhangYongHu, // 保障用户
            FaMenUpdata, // 阀门状态更新
            FanWei, // 爆管影响范围
        },
        data() {
            return {
                locationDialogVisible: true, // 坐标弹窗 是否可见
                baoGuanDialogVisible: true, // 坐标弹窗 是否可见
                baoZhangYongHuDialogVisible: true, // 保障用户 是否可见
                faMenUpdataDialogVisible: true, // 阀门状态更新 是否可见
                fanWeiDialogVisible: true, // 爆管影响范围 是否可见
            }
        },
        methods: {
            hideLocationDialog() {
                this.locationDialogVisible = false;
            },
            hideBaoGuanDialog() {
                this.baoGuanDialogVisible = false;
            },
            hideBaoZhangYongHuDialog() {
                this.baoZhangYongHuDialogVisible = false;
            },
            hideFaMenUpdataDialog() {
                this.faMenUpdataDialogVisible = false;
            },
            hideFanWeiDialog() {
                this.fanWeiDialogVisible = false;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
    .map {
        height: 100vh;
    }
    .aside {
        position: absolute;
        left: 0; right: 0; bottom: 0;
        background: #fff;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
        user-select: none;

        .task-item {
            dt {
                display: flex;
                align-items: center;
                position: relative;
                padding: .2rem .3rem .2rem .5rem;
                margin-bottom: .1rem;

                &:before {
                    position: absolute;
                    content: "";
                    left: .3rem; top: .3rem; bottom: .3rem;
                    width: .05rem;
                    background: #2e7ae6;
                }
                &:after {
                    position: absolute;
                    content: "";
                    left: .3rem; right: .3rem; bottom: 0;
                    height: 1px;
                    background: #eee;
                    transform: scale(1, .5);
                }
                .task-tit {
                    font-weight: bold;
                }
                .tool {
                    position: absolute;
                    right: .3rem; top: 0;
                    width: 1.4rem; height: 1.4rem;
                    border: none;
                    border-radius: 50%;
                    color: #fff;
                    text-align: center;
                    background: #2e7ae6;
                    transform: translate(0, -50%);
                    box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
                    transition: all .3s;

                    &:active {
                        opacity: .9;
                    }
                    i {
                        @include iconfont;
                        display: block;
                        font-size: .6rem;
                    }
                    p {
                        display: block;
                        margin-top: .1rem;
                        font-size: .2rem;
                    }
                }
            }
            dd {
                display: flex;
                align-items: center;
                padding: .1rem .3rem;

                .attr {
                    color: #666;
                }
                .content {
                    display: flex;
                    align-items: center;
                    width: 0;
                    flex-grow: 1;
                }
                .event-num {
                    width: 0;
                    flex-grow: 1;
                }
                .arrow {
                    @include iconfont;
                    color: #999;
                }
                progress {
                    margin-right: .3rem;
                }
                .task-state {
                    em {
                        &:first-child {
                            color: #2e7ae6;
                        }
                        &:last-child {
                            color: #666;
                        }
                    }
                }
            }

        }
        .tools {
            display: flex;
            align-items: center;
            padding: .2rem .3rem .8rem;

            button {
                width: 0;
                flex-grow: 1;
                padding: .2rem .25rem;
                border: none;
                border-radius: .08rem;
                font-size: .28rem;
                color: #fff;
                background: #2e7ae6;
                transition: all .3s;
                user-select: none;

                & + button {
                    margin-left: .2rem;
                }
                &:active {
                    opacity: .7;
                }
                &.theme-warning {
                    background: #ff6300;
                }
            }
        }
    }
    .bao-guan-popup,
    .location-popup,
    .baozhangyonghu-popup {
        width: 100%;
        border-top: 1px solid #ddd;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
    }
</style>
