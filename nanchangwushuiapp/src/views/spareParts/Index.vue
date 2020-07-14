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
                <p class="tab-item-name">领取情况</p>
            </mt-tab-item>

            <mt-tab-item :id="2">
                <p class="tab-item-name">库存</p>
            </mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <dl class="panel-item">
                    <dt>
                        <p class="panel-title">
                            <span>5#推流器</span>
                        </p>
                    </dt>

                    <dd>
                        <img class="device-img" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">

                        <div class="text-info">
                            <div class="row">
                                <span class="attr">规格型号：</span>
                                <span class="value">A102</span>
                            </div>

                            <div class="row">
                                <span class="attr">领用人员：</span>
                                <span class="value">前端吴彦祖</span>
                            </div>

                            <div class="row">
                                <span class="attr">领用时间：</span>
                                <span class="value">2020-02-27 15:24</span>
                            </div>
                        </div>

                        <p class="tips">
                            剩余：3
                        </p>
                    </dd>
                </dl>

                <dl class="panel-item">
                    <dt>
                        <p class="panel-title">
                            <span>5#推流器</span>
                        </p>
                    </dt>

                    <dd>
                        <img class="device-img" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">

                        <div class="text-info">
                            <div class="row">
                                <span class="attr">规格型号：</span>
                                <span class="value">A102</span>
                            </div>

                            <div class="row">
                                <span class="attr">领用人员：</span>
                                <span class="value">前端吴彦祖</span>
                            </div>

                            <div class="row">
                                <span class="attr">领用时间：</span>
                                <span class="value">2020-02-27 15:24</span>
                            </div>
                        </div>

                        <p class="tips">
                            剩余：3
                        </p>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                库存
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'SpareParts',
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
            }
        }
        dd {
            display: flex;
            align-items: center;
            padding: .3rem;
            transition: all 0.2s;

            .device-img {
                width: 1.2rem; height: 1.2rem;
                border-radius: .08rem;
                object-fit: cover;
            }
            .text-info {
                margin: 0 .2rem;
                width: 0;
                flex-grow: 1;

                .row {
                    padding: .02rem 0;

                    .attr {
                        color: #999;
                    }
                    .value {
                        color: #333;
                    }
                }
            }
            .tips {
                color: #999;
            }
        }
    }
</style>
