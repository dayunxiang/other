<template>
    <div class="component-content">
        <header class="header">
            <i class="icon">&#xe6d1;</i>

            <div class="factory-info">
                <p class="factory-name">都昌污水处理厂</p>
                <p class="tips">
                    <span>江西省 九江市</span>
                    <span>负责人：前端吴彦祖</span>
                </p>
            </div>

            <button class="btn-follow follow"></button>
        </header>

        <mt-navbar v-model="navbarSelected" class="navbar">
            <mt-tab-item :id="1">
                <i class="icon">&#xe95f;</i>
                <p class="tab-item-name">数据检测</p>
            </mt-tab-item>

            <mt-tab-item :id="2">
                <i class="icon">&#xe651;</i>
                <p class="tab-item-name">统计分析</p>
            </mt-tab-item>

            <mt-tab-item :id="3">
                <i class="icon">&#xe6cf;</i>
                <p class="tab-item-name">异常报警</p>
            </mt-tab-item>

            <mt-tab-item :id="4">
                <i class="icon">&#xe684;</i>
                <p class="tab-item-name">点位备件</p>
            </mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <div class="monitor-list">
                    <p class="tips-text">
                        数据最后更新时间：2020-02-23 14:34:23
                    </p>

                    <dl class="monitor-item">
                        <dt>出水COD</dt>
                        <dd>
                            <!-- 该容器为图表容器 -->
                        </dd>
                    </dl>

                    <dl class="monitor-item">
                        <dt>出水COD</dt>
                        <dd>
                            <!-- 该容器为图表容器 -->
                        </dd>
                    </dl>

                    <dl class="monitor-item">
                        <dt>出水COD</dt>
                        <dd>
                            <!-- 该容器为图表容器 -->
                        </dd>
                    </dl>

                    <dl class="monitor-item">
                        <dt>出水COD</dt>
                        <dd>
                            <!-- 该容器为图表容器 -->
                        </dd>
                    </dl>

                    <dl class="monitor-item">
                        <dt>出水COD</dt>
                        <dd>
                            <!-- 该容器为图表容器 -->
                        </dd>
                    </dl>
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                <div @click="openPicker" class="select-time">
                    <time>2020年3月</time>

                    <i class="icon">&#xe62b;</i>
                </div>

                <dl class="analyse-item">
                    <dt>出水COD</dt>
                    <dd>
                        <!-- 该容器为图表容器 -->
                    </dd>
                </dl>

                <dl class="analyse-item">
                    <dt>出水COD</dt>
                    <dd>
                        <!-- 该容器为图表容器 -->
                    </dd>
                </dl>

                <dl class="analyse-item">
                    <dt>出水COD</dt>
                    <dd>
                        <!-- 该容器为图表容器 -->
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="3">
                <mt-navbar v-model="errorSelected">
                    <mt-tab-item :id="1">
                        <p class="tab-item-name">最新异常报警</p>
                    </mt-tab-item>

                    <mt-tab-item :id="2">
                        <p class="tab-item-name">异常报警统计</p>
                    </mt-tab-item>
                </mt-navbar>

                <mt-tab-container v-model="errorSelected">
                    <mt-tab-container-item :id="1">
                        <dl class="info-list">
                            <dd>
                                <i style="color:#67C23A" class="icon">&#xe6cf;</i>

                                <div class="text-wrap">
                                    <p>二号氧化沟5#推流器拒</p>
                                    <time>2020年12月27日 14:34</time>
                                </div>

                                <mt-badge size="small" color="#67C23A" class="badge">处理中</mt-badge>
                            </dd>

                            <dd>
                                <i style="color:#67C23A" class="icon">&#xe6cf;</i>

                                <div class="text-wrap">
                                    <p>二号氧化沟5#推流器拒</p>
                                    <time>2020年12月27日 14:34</time>
                                </div>

                                <mt-badge size="small" color="#67C23A" class="badge">处理中</mt-badge>
                            </dd>

                            <dd>
                                <i style="color:#f90" class="icon">&#xe6cf;</i>

                                <div class="text-wrap">
                                    <p>二号氧化沟5#推流器拒</p>
                                    <time>2020年12月27日 14:34</time>
                                </div>

                                <mt-badge size="small" color="#f90" class="badge">待处理</mt-badge>
                            </dd>
                        </dl>
                    </mt-tab-container-item>

                    <mt-tab-container-item :id="2">
                        <div class="abnormal-list">
                            <div @click="openPicker" class="select-time">
                                <time>2020年3月</time>

                                <p class="tips">数据最后更新时间：2020-02-23 14:34:23</p>
                                <i class="icon">&#xe62b;</i>
                            </div>

                            <dl class="analyse-item">
                                <dt>报警数趋势</dt>
                                <dd>
                                    <!-- 该容器为图表容器 -->
                                </dd>
                            </dl>

                            <dl class="analyse-item">
                                <dt>按报警级别</dt>
                                <dd>
                                    <!-- 该容器为图表容器 -->
                                </dd>
                            </dl>
                        </div>
                    </mt-tab-container-item>
                </mt-tab-container>
            </mt-tab-container-item>

            <mt-tab-container-item :id="4">
                惊不惊喜，意不意外，这里我没写
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-datetime-picker
            ref="picker"
            type="date"
            v-model="pickerValue">
        </mt-datetime-picker>
    </div>
</template>

<script>
    export default {
        name: 'RealTimeMonitoring',
        data() {
            return {
                navbarSelected: 3,
                errorSelected: 1,
                pickerValue: ''
            };
        },
        methods: {
            openPicker() {
                this.$refs.picker.open();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-bottom: 1.4rem;
        min-height: 100vh;
        background: #f4f6f6;
        user-select: none;
    }
    .header {
        display: flex;
        align-items: center;
        padding: 0.7rem .3rem .5rem;
        background: #2e7ae6;

        .icon {
            @include iconfont;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.3rem; height: 1.3rem;
            font-size: .6rem;
            color: #999;
            border-radius: 50%;
            background: #fff;
            overflow: hidden;
        }
        .factory-info {
            margin: 0 .3rem;
            width: 0;
            flex-grow: 1;
            color: #fff;

            .factory-name {
                font-size: .4rem;
            }
            .tips {
                margin-top: .1rem;
                font-size: .25rem;

                span {
                    margin-right: .2rem;
                }
            }
        }
        .btn-follow {
            @include iconfont;
            border: none;
            font-size: .4rem;
            color: #fff;
            background: transparent;

            &:before {
                content: "\e602";
            }
            &.follow {
                color: #ff6666;

                &:before {
                    content: "\e618";
                }
            }
        }
    }
    .navbar {
        .icon {
            @include iconfont;
            font-size: .6rem;
        }
        .tab-item-name {
            margin-top: .2rem;
        }
    }
    .mint-tab-container {
        margin-top: .3rem;
        background: #fff;
    }
    .info-list {
        user-select: none;
        background: #fff;

        & + .info-list {
            margin-top: .3rem;
        }
        dt {
            display: flex;
            align-items: center;
            position: relative;
            padding: .2rem .3rem;

            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            .info-title {
                width: 0;
                flex-grow: 1;
                position: relative;
                padding-left: .2rem;
                font-weight: bold;

                &:before {
                    position: absolute;
                    content: "";
                    left: 0; top: .05rem; bottom: .05rem;
                    width: .05rem;
                    background: #26a2ff;
                }
            }
            .edit-item {
                display: inline-flex;
                align-items: center;
                border: none;
                background: transparent;
                color: #999;
                font-size: .24rem;

                span {
                    margin-right: .05rem;
                }
                .icon {
                    @include iconfont;

                }
            }
        }
        dd {
            position: relative;
            display: flex;
            align-items: center;
            padding: .2rem .3rem;

            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            img {
                width: 1rem; height: 1rem;
                object-fit: cover;
                border-radius: .08rem;
            }
            .icon {
                @include iconfont;
                font-size: .4rem
            }
            .text-wrap {
                margin: 0 .2rem;
                width: 0;
                flex-grow: 1;

                p {
                    @include textEllipsis($type: 'multipleRows', $maxLength: 100%, $row: 1);

                    & + p {
                        font-size: .24rem;
                        color: #666;
                    }
                }
                time {
                    font-size: .24rem;
                    color: #999;
                }
            }
            .badge {
                font-size: .2rem;
            }
        }
    }
    .monitor-list {
        display: flex;
        flex-wrap: wrap;

        .tips-text {
            flex-basis: 100%;
            padding: .3rem .2rem;
            text-align: center;
            color: #ddd;
        }
        .monitor-item {
            flex-basis: 50%;
            padding: .1rem;

            dt {
                @include iconfont;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .3rem;

                &:after {
                    margin-left: .1rem;
                    color: #ddd;
                    font-size: .2rem;
                    content: "\e62b";
                }
            }
            dd {
                height: 3.6rem;
            }
        }
    }
    .select-time {
        position: relative;
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        margin-bottom: .3rem;
        white-space: nowrap;

        &:after {
            position: absolute;
            content: "";
            left: .3rem; right: .3rem; bottom: 0;
            height: 1px;
            background: #eee;
            transform: scale(1, .5);
        }
        time {
            width: 0;
            flex-grow: 1;
            font-weight: bold;
            font-size: .35rem;
            color: #2e7ae6;
        }
        .tips {
            margin-right: .3rem;
            font-size: .2rem;
            color: #ddd;
        }
        .icon {
            @include iconfont;
            color: #ddd;
            font-size: .2rem;
        }
    }
    .analyse-item {
        padding: .3rem;

        dt {
            position: relative;
            margin-bottom: .2rem;
            padding-left: .2rem;
            font-size: .3rem;
            font-weight: bold;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: .05rem; bottom: .05rem;
                width: .05rem;
                background: #26a2ff;
            }
        }
        dd {
            height: 4.2rem;
        }
    }
    .abnormal-list {
        .select-time {
            margin-bottom: 0;
        }
    }
</style>
