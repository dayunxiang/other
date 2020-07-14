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

        <dl v-for="n in 1" class="settings-block">
            <dt>主题分析</dt>
            <dd>
                <a class="menu-item" href="javascript:;">
                    <i style="color: #009933;" class="icon">&#xe738;</i>
                    <p class="text">工单管理</p>
                </a>
                <a class="menu-item" href="javascript:;">
                    <i style="color: #009933;" class="icon">&#xe738;</i>
                    <p class="text">工单管理</p>
                </a>
                <a class="menu-item" href="javascript:;">
                    <i style="color: #009933;" class="icon">&#xe738;</i>
                    <p class="text">工单管理</p>
                </a>
                <a class="menu-item" href="javascript:;">
                    <i style="color: #009933;" class="icon">&#xe738;</i>
                    <p class="text">工单管理</p>
                </a>
            </dd>
        </dl>

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
        min-height: 100vh;
        background: #f4f6f6;
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
    .menu-item {
        flex-basis: 25%;
        padding: .3rem 0;
        text-align: center;
        user-select: none;
        transition: all .3s;

        &:active {
            background: #f3f3f3;
        }
        .icon {
            @include iconfont;
            font-size: .5rem;
        }
        .text {
            margin-top: .1rem;
        }
    }
    .settings-block {
        dt {
            padding: .25rem .3rem .15rem;
            font-size: .28rem;
        }
        dd {
            display: flex;
            flex-wrap: wrap;
            background: #fff;
        }
    }
</style>
