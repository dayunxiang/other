<template>
    <div class="component-content">
        <van-nav-bar
            title="标题"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            class="p-header"
        >
            <template #right>
                <span>企业管理</span>
                <van-icon name="arrow-down" size="18" />
            </template>
        </van-nav-bar>

        <div class="main-content">
            <iframe src="https://www.baidu.com" frameborder="0"></iframe>
        </div>

        <van-tabbar v-model="active" class="p-footer">
            <van-tabbar-item badge="3">
                <span>自定义</span>

                <template #icon="props">
                    <i v-if="props.active" class="iconfont">&#xe683;</i>
                    <i v-else class="iconfont">&#xe64e;</i>
                </template>
            </van-tabbar-item>

            <van-tabbar-item>
                <span>自定义</span>

                <template #icon="props">
                    <i v-if="props.active" class="iconfont">&#xe683;</i>
                    <i v-else class="iconfont">&#xe64e;</i>
                </template>
            </van-tabbar-item>

            <van-tabbar-item>
                <span>自定义</span>

                <template #icon="props">
                    <i v-if="props.active" class="iconfont">&#xe683;</i>
                    <i v-else class="iconfont">&#xe64e;</i>
                </template>
            </van-tabbar-item>

            <van-tabbar-item>
                <span>自定义</span>

                <template #icon="props">
                    <i v-if="props.active" class="iconfont">&#xe683;</i>
                    <i v-else class="iconfont">&#xe64e;</i>
                </template>
            </van-tabbar-item>
        </van-tabbar>

        <van-popup
            v-model="show"
            position="top"
            :overlay-style="{ top: '.92rem'}"
            class="select-dialog"
        >
            <div class="select-module">
                <dl class="module-item">
                    <dt>水务集团</dt>
                    <dd>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                    </dd>
                </dl>

                <dl class="module-item">
                    <dt>水务集团</dt>
                    <dd>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                    </dd>
                </dl>

                <dl class="module-item">
                    <dt>水务集团</dt>
                    <dd>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                    </dd>
                </dl>

                <dl class="module-item">
                    <dt>水务集团</dt>
                    <dd>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                        <a href="#">企业管理</a>
                    </dd>
                </dl>
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                active: 0,
                show: false
            };
        },
        methods: {
            onClickLeft() {

            },
            onClickRight() {
                this.show = true;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
    .p-header {
        color: #fff;
        background: #2e7ae6;

        ::v-deep .van-icon {
            color: #fff;
        }
        ::v-deep .van-nav-bar__text {
            color: #fff;
        }
        ::v-deep .van-nav-bar__title {
            color: #fff;
        }
        ::v-deep .van-nav-bar__right {
            display: inline-flex;
            align-items: center;

            .van-icon {
                margin-left: .1rem;
                font-size: .28rem !important;
            }
        }
    }
    .p-footer {
        background: #f8f8f9;
    }
    .main-content {
        height: calc(100vh - 1.92rem);

        iframe {
            display: block;
            width: 100%; height: 100%;
            border: none;
        }
    }
    .select-dialog {
        top: .92rem;
        max-height: 6rem;
        overflow-y: scroll;
    }
    .select-module {
        padding: .2rem;
        background: #fff;

        .module-item {
            @include thinLine($useBefore: false, $position: 'bottom',$right: .3rem, $bottom: 0, $left: .3rem);
            padding-bottom: .2rem;

            & + .module-item {
                margin-top: .3rem;
            }
            dt {
                padding: .1rem .3rem;
                font-weight: bold;
                color: #2e7ae6;
            }
            dd {
                display: flex;
                flex-wrap: wrap;
                padding: 0 .3rem;

                a {
                    @include textEllipsis($type: 'singleRow', $maxLength: 100%);
                    padding: .1rem 0 .1rem 0;
                    width: 25%;
                }
            }
        }
    }
</style>
