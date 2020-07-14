<template>
    <div class="component-content">
        <!--
            这里并不做实际搜索，
            点击该区域跳转到一个单独的搜索页面
         -->
        <div class="search-wrap">
            <div class="input-item">
                <i class="icon">&#xe677;</i>
                <input type="text" placeholder="输入搜索关键字">
            </div>
        </div>

        <mt-navbar v-model="navbarSelected">
            <mt-tab-item :id="1">
                <p class="tab-item-name">所有点位</p>
            </mt-tab-item>

            <mt-tab-item :id="2">
                <p class="tab-item-name">异常报警</p>
            </mt-tab-item>

            <mt-tab-item :id="3">
                <p class="tab-item-name">我的关注</p>
            </mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <dl class="panel-item">
                    <dt>
                        <p class="panel-title">
                            <span>片区1</span>
                            <small>(共3个水厂)</small>
                        </p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <div class="waterworks-info">
                            <p class="name">都昌污水处理厂</p>

                            <mt-badge
                                size="small"
                                color="#e0620d"
                                class="badge"
                            >
                                报警
                            </mt-badge>
                        </div>

                        <div class="info">
                            <div class="info-item">
                                <p class="value">78%</p>
                                <p class="attr">运行负荷</p>
                            </div>

                            <div class="info-item">
                                <p class="value">6.4</p>
                                <p class="attr">规模(万吨/日)</p>
                            </div>

                            <div class="info-item">
                                <p class="value">一级</p>
                                <p class="attr">排放水质</p>
                            </div>
                        </div>

                        <div class="tools">
                            <button class="tool-item">
                                <i class="icon">&#xe62f;</i>
                                <span>设备档案</span>
                            </button>

                            <button class="tool-item">
                                <i class="icon">&#xe630;</i>
                                <span>实时监控</span>
                            </button>
                        </div>
                    </dd>
                </dl>

                <dl class="panel-item fold">
                    <dt>
                        <p class="panel-title">
                            <span>片区1</span>
                            <small>(共3个水厂)</small>
                        </p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <div class="waterworks-info">
                            <p class="name">都昌污水处理厂</p>

                            <mt-badge
                                size="small"
                                color="#e0620d"
                                class="badge"
                            >
                                报警
                            </mt-badge>
                        </div>

                        <div class="info">
                            <div class="info-item">
                                <p class="value">78%</p>
                                <p class="attr">运行负荷</p>
                            </div>

                            <div class="info-item">
                                <p class="value">6.4</p>
                                <p class="attr">规模(万吨/日)</p>
                            </div>

                            <div class="info-item">
                                <p class="value">一级</p>
                                <p class="attr">排放水质</p>
                            </div>
                        </div>

                        <div class="tools">
                            <button class="tool-item">
                                <i class="icon">&#xe62f;</i>
                                <span>设备档案</span>
                            </button>

                            <button class="tool-item">
                                <i class="icon">&#xe630;</i>
                                <span>实时监控</span>
                            </button>
                        </div>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                异常报警
            </mt-tab-container-item>

            <mt-tab-container-item :id="3">
                我的关注
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'AllWaterworks',
        data() {
            return {
                navbarSelected: 1,
            };
        },
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-bottom: 1.4rem;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .search-wrap {
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
        padding: .2rem .3rem;
        background: #fff;

        .input-item {
            display: flex;
            flex-grow: 1;
            align-items: center;
            margin-right: .1rem;
            padding: 0 .2rem;
            width: 0;
            border-radius: .08rem;
            background: #f4f6f6;
            overflow: hidden;

            .icon {
                @include iconfont;
                margin-right: .2rem;
                color: #999;
            }
            input[type="text"] {
                flex-grow: 1;
                height: .6rem;
                border: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #e0e0e0;
                }
            }
        }
    }
    .panel-item {
        margin-top: .3rem;
        background: #fff;
        user-select: none;

        &.fold {
            dt {
                .btn-fold {
                    &:before {
                        content: "\e60d";
                    }
                }
            }
            dd {
                height: 0;
                overflow: hidden;
            }
        }
        dt {
            position: relative;
            display: flex;
            align-items: center;
            padding: .25rem .3rem .25rem .5rem;

            &:before {
                position: absolute;
                content: "";
                left: .3rem; top: .35rem; bottom: .35rem;
                width: .05rem;
                background: #26a2ff;
            }
            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, 0.5);
            }
            .panel-title {
                width: 0;
                display: flex;
                align-items: baseline;
                flex-grow: 1;

                span {
                    font-size: .3rem;
                    font-weight: bold;
                }
                small {
                    margin-left: .2rem;
                    font-size: .25rem;
                    color: #999;
                }
            }
            .btn-fold {
                @include iconfont;
                font-size: .3rem;
                color: #ddd;
                border: none;
                background: transparent;

                &:before {
                    content: "\e60f";
                }
            }
        }
        dd {
            transition: all 0.2s;

            .waterworks-info {
                display: flex;
                align-items: center;
                padding: .25rem .3rem;

                .name {
                    width: 0;
                    flex-grow: 1;
                }
            }
            .info {
                display: flex;
                align-items: center;

                .info-item {
                    padding: .3rem .2rem;
                    width: 0;
                    flex-grow: 1;
                    text-align: center;

                    .attr {
                        font-size: .3rem;
                        color: #666;
                    }
                    .value {
                        font-size: .4rem;
                        color: #26a2ff;
                    }
                }
            }
            .tools {
                display: flex;
                align-items: center;

                .tool-item {
                    position: relative;
                    padding: .3rem 0;
                    width: 0;
                    flex-grow: 1;
                    border: none;
                    background: transparent;
                    transition: all 0.2s;

                    &:before {
                        position: absolute;
                        content: "";
                        left: 0; top: .4rem; bottom: .4rem;
                        width: 1px;
                        background: #26a2ff;
                        transform: scale(.5, 1);
                    }
                    &:first-child {
                        &:before {
                            display: none;
                        }
                    }
                    &:active {
                        opacity: .5;
                    }
                    .icon {
                        @include iconfont;
                        margin-right: .1rem;
                        color: #26a2ff;
                    }
                    span {
                        font-size: .3rem;
                        color: #555;
                    }
                }
            }
        }
    }
</style>
