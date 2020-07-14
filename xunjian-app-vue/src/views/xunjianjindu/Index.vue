<template>
    <div class="component-content">
        <mt-navbar v-model="tabSelected">
            <mt-tab-item id="1">进行中</mt-tab-item>
            <mt-tab-item id="2">延期</mt-tab-item>
            <mt-tab-item id="3">已完成</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="tabSelected">
            <mt-tab-container-item id="1">
                <!--
                    banjie
                    caogao
                    chulizhong
                    cuiban
                    yanqi
                    -->
                <dl class="project-item chulizhong">
                    <dt>XJ-巡检项目名字-2020-02-11</dt>

                    <dd>
                        <p class="attr">任务类型：</p>
                        <p class="value">巡检任务</p>
                    </dd>

                    <dd>
                        <p class="attr">开始时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">结束时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">任务人员：</p>
                        <p class="value">前端吴彦祖</p>
                    </dd>
                </dl>

                <dl class="project-item">
                    <dt>XJ-巡检项目名字-2020-02-11</dt>

                    <dd>
                        <p class="attr">任务类型：</p>
                        <p class="value">巡检任务</p>
                    </dd>

                    <dd>
                        <p class="attr">开始时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">结束时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">任务人员：</p>
                        <p class="value">前端吴彦祖</p>
                    </dd>
                </dl>

                <dl class="project-item">
                    <dt>XJ-巡检项目名字-2020-02-11</dt>

                    <dd>
                        <p class="attr">任务类型：</p>
                        <p class="value">巡检任务</p>
                    </dd>

                    <dd>
                        <p class="attr">开始时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">结束时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">任务人员：</p>
                        <p class="value">前端吴彦祖</p>
                    </dd>
                </dl>

                <dl class="project-item">
                    <dt>XJ-巡检项目名字-2020-02-11</dt>

                    <dd>
                        <p class="attr">任务类型：</p>
                        <p class="value">巡检任务</p>
                    </dd>

                    <dd>
                        <p class="attr">开始时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">结束时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">任务人员：</p>
                        <p class="value">前端吴彦祖</p>
                    </dd>
                </dl>

                <dl class="project-item">
                    <dt>XJ-巡检项目名字-2020-02-11</dt>

                    <dd>
                        <p class="attr">任务类型：</p>
                        <p class="value">巡检任务</p>
                    </dd>

                    <dd>
                        <p class="attr">开始时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">结束时间：</p>
                        <p class="value">2020-02-11</p>
                    </dd>

                    <dd>
                        <p class="attr">任务人员：</p>
                        <p class="value">前端吴彦祖</p>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
            </mt-tab-container-item>

            <mt-tab-container-item id="3">
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'Xunjianjindu',
        data() {
            return {
                tabSelected: '1'
            };
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        background: #f4f6f6;
        padding-bottom: 1.2rem;
    }
    .mint-navbar {
        margin-bottom: 5px;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
    }
    .project-item {
        position: relative;
        margin-top: .2rem;
        padding: .3rem;
        background: #fff;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);

        &:after {
            @include iconfont;
            position: absolute;
            right: 0; top: 0;
            font-size: 1rem;
            color: #2e7ae6;
        }
        &.banjie:after {
            content: "\e640";
            color: #207245;
        }
        &.caogao:after {
            content: "\e642";
            color: #ddd;
        }
        &.chulizhong:after {
            content: "\e644";
        }
        &.cuiban:after {
            content: "\e647";
            color: #f90;
        }
        &.yanqi:after {
            content: "\e648";
            color: red;
        }
        &:first-child {
            margin-top: 0;
        }
        dt {
            position: relative;
            padding: 0 0 .2rem .2rem;
            margin-bottom: .2rem;
            font-weight: bold;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: .05rem; bottom: .25rem;
                width: .05rem;
                background: #2e7ae6;
            }
            &:after {
                position: absolute;
                content: "";
                left: 0; right: 0; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
        }
        dd {
            display: flex;
            align-items: center;
            padding: .05rem 0;

            .attr {
                color: #999;
            }
            .value {
                color: #555;
            }
        }
    }
</style>
