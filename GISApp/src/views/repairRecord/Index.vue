<template>
    <div class="allresult-wrap">
        <mt-swipe :auto="2000" class="swipe">
            <mt-swipe-item>
                <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">
            </mt-swipe-item>

            <mt-swipe-item>
                <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">
            </mt-swipe-item>

            <mt-swipe-item>
                <img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">
            </mt-swipe-item>
        </mt-swipe>

        <mt-navbar v-model="navbarSelected" class="navbar">
            <mt-tab-item :id="1">基本属性</mt-tab-item>
            <mt-tab-item :id="2">维修记录</mt-tab-item>
            <mt-tab-item :id="3">养护记录</mt-tab-item>
            <mt-tab-item :id="4">冲洗记录</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <!-- 添加fold即使隐藏 -->
                <dl class="panel-text-list fold">
                    <dt>
                        <p class="panel-tit">基础信息</p>
                        <button class="btn-switch"></button>
                    </dt>

                    <dd>
                        <div class="text-item">
                            <div class="attr">
                                <span class="text">工程编号：</span>
                            </div>

                            <div class="content">
                                <span class="value">JS_GX202001115</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">工程名称：</span>
                            </div>

                            <div class="content">
                                <span class="value">解放西路改造</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">施工单位：</span>
                            </div>

                            <div class="content">
                                <span class="value">XXX公司</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">施工日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2020/10/07</span>
                            </div>
                        </div>
                    </dd>
                </dl>

                <dl class="panel-text-list">
                    <dt>
                        <p class="panel-tit">基础信息</p>
                        <button class="btn-switch"></button>
                    </dt>

                    <dd>
                        <div class="text-item">
                            <div class="attr">
                                <span class="text">工程编号：</span>
                            </div>

                            <div class="content">
                                <span class="value">JS_GX202001115</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">工程名称：</span>
                            </div>

                            <div class="content">
                                <span class="value">解放西路改造</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">施工单位：</span>
                            </div>

                            <div class="content">
                                <span class="value">XXX公司</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">施工日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2020/10/07</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                <dl class="panel-text-list">
                    <dt>
                        <p class="panel-tit">2019-10-11 12:34:45</p>

                        <a class="link" href="#">
                            <i>&#xe62b;</i>
                        </a>
                    </dt>

                    <dd>
                        <div class="text-item">
                            <div class="attr">
                                <span class="text">情况描述：</span>
                            </div>

                            <div class="content">
                                <span class="value">经核实爆炸了</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">处理结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">解放抢修完成</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">维修人员：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">联系方式：</span>
                            </div>

                            <div class="content">
                                <a class="tel-item" href="tel:15949565123">
                                    <i class="icon">&#xe62c;</i>
                                    <span>15949565123</span>
                                </a>
                            </div>
                        </div>
                    </dd>
                </dl>

                <dl class="panel-text-list fold">
                    <dt>
                        <p class="panel-tit">2019-10-11 12:34:45</p>
                        <a class="link" href="#">
                            <i>&#xe62b;</i>
                        </a>
                    </dt>

                    <dd>
                        <div class="text-item">
                            <div class="attr">
                                <span class="text">情况描述：</span>
                            </div>

                            <div class="content">
                                <span class="value">经核实爆炸了</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">处理结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">解放抢修完成</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">维修人员：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="text-item">
                            <div class="attr">
                                <span class="text">联系方式：</span>
                            </div>

                            <div class="content">
                                <a class="tel-item" href="tel:15949565123">
                                    <i class="icon">&#xe62c;</i>
                                    <span>15949565123</span>
                                </a>
                            </div>
                        </div>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="3">
                3
            </mt-tab-container-item>

            <mt-tab-container-item :id="4">
                4
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'RepairRecord',
        data() {
            return {
                navbarSelected: 1,
            }
        }
    };
</script>

<style lang="scss" scoped>
    .allresult-wrap {
        position: relative;
        padding-bottom: 1.4rem;
        min-height: 100vh;
        background: #f4f6f6;
        user-select: none;
    }
    .swipe {
        height: 4rem;

        img {
            display: block;
            width: 100%; height: 100%;
            object-fit: cover;
        }
    }
    .navbar {
        .tab-item-name {
            margin-top: .2rem;
        }
    }
    .mint-tab-container {
        margin-top: .2rem;
    }
    .panel-text-list {
        @include panelTextList;

        .tel-item {
            color: #2e7ae6;

            .icon {
                @include iconfont;
            }
        }
    }
</style>
