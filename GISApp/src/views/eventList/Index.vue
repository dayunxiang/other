<template>
    <!--
        有一个新建按钮，
        直接放头部好了，我就不写了
     -->
    <div class="event-list">
        <mt-navbar v-model="navbarSelected" :fixed="true" class="navbar">
            <mt-tab-item :id="1">未处理</mt-tab-item>
            <mt-tab-item :id="2">已处理</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <mt-loadmore>
                    <!--
                        banjie  caogao chulizhong
                        cuiban  yanqi
                    -->
                    <dl v-for="n in 15" :key="n" class="project-item chulizhong">
                        <dt>事件编号：EV-12345654</dt>

                        <dd>
                            <p class="attr">时间类型：</p>
                            <p class="value">定为问题</p>
                        </dd>

                        <dd>
                            <p class="attr">上报时间：</p>
                            <p class="value">2020-02-11</p>
                        </dd>

                        <dd>
                            <p class="attr">上报人员：</p>
                            <p class="value">前端吴彦祖</p>
                        </dd>

                        <dd>
                            <p class="attr">联系电话：</p>
                            <p class="value">
                                <a class="tel-item" href="tel:15949565123">
                                    <i class="icon">&#xe62c;</i>
                                    <span>15949565123</span>
                                </a>
                            </p>
                        </dd>
                    </dl>
                </mt-loadmore>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                2
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'EventList',
        data() {
            return {
                navbarSelected: 1,
            }
        }
    };
</script>

<style lang="scss" scoped>
    .event-list {
        position: relative;
        padding-top: 1.1rem;
        height: 100vh;
        background: #f4f6f6;
        user-select: none;
    }
    .navbar {
        .tab-item-name {
            margin-top: .2rem;
        }
    }
    .mint-tab-container {
        ::v-deep.mint-loadmore-content {
            padding-bottom: 1.4rem;
            max-height: calc(100vh - 1rem);
            overflow-y: scroll;
        }
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
            content: "\e64d";
            color: #207245;
        }
        &.caogao:after {
            content: "\e64f";
            color: #ddd;
        }
        &.chulizhong:after {
            content: "\e650";
        }
        &.cuiban:after {
            content: "\e651";
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

            .tel-item {
                color: #2e7ae6;

                .icon {
                    @include iconfont;
                }
            }
            .attr {
                color: #999;
            }
            .value {
                color: #555;
            }
        }
    }
</style>
