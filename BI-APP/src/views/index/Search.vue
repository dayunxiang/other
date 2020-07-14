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

        <van-search placeholder="请输入搜索关键词" />

        <dl class="search-history">
            <dt>
                <span class="title">搜索历史</span>
                <button class="btn-clear">&#xe695;</button>
            </dt>
            <dd>
                <div class="search-item">工单管理</div>
                <div class="search-item">管线巡检</div>
                <div class="search-item">底图操作</div>
                <div class="search-item">实时监控</div>
            </dd>
        </dl>

         <dl class="search-result">
            <dt>
                <span class="title">搜索结果</span>
            </dt>

            <dd>
                <i style="color: #009933;" class="icon">&#xe64e;</i>

                <div class="text-wrap">
                    <p class="title">[月]产销差量(万m³)</p>

                    <div class="attr-value">
                        <div class="item up">
                            <span class="attr">同:</span>
                            <span class="value">5%↑</span>
                        </div>

                        <div class="item down">
                            <span class="attr">环:</span>
                            <span class="value">5%↓</span>
                        </div>
                    </div>
                </div>

                <span>32.0</span>
            </dd>
            <dd>
                <i style="color: #009933;" class="icon">&#xe64e;</i>

                <div class="text-wrap">
                    <p class="title">[月]产销差量(万m³)</p>

                    <div class="attr-value">
                        <div class="item up">
                            <span class="attr">同:</span>
                            <span class="value">5%↑</span>
                        </div>

                        <div class="item down">
                            <span class="attr">环:</span>
                            <span class="value">5%↓</span>
                        </div>
                    </div>
                </div>

                <span>32.0</span>
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
    .search-history {
        dt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .1rem .3rem .1rem;

            .title {
                color: #666;
            }
            .btn-clear {
                @include iconfont;
                padding: .2rem .15rem;
                color: brown;
                border: none;
                background: transparent;
            }
        }
        dd {
            display: flex;
            flex-wrap: wrap;
            padding: .3rem;
            background: #fff;
        }
        .search-item {
            @include textEllipsis($type: 'singleRow', $maxLength: 100%);
            flex-basis: 33.33%;
            padding: .1rem;
            text-align: center;
            color: #666;
            border: .1rem solid #fff;
            border-radius: .1rem;
            background: #f2f6fa;
        }
    }
    .search-result {
        dt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .2rem .3rem .2rem;

            .title {
                color: #666;
            }
        }
        dd {
            @include thinLine($useBefore: true, $position: 'bottom', $backgroundColor: #eee, $top: 0, $right: .3rem, $bottom: 0, $left: .3rem);
            display: flex;
            align-items: center;
            padding: .3rem;
            background: #fff;
            transition: all .3s;

            &:active {
                background: #f3f3f3;
            }
            .icon {
                @include iconfont;
                font-size: .5rem;
            }
            .text-wrap {
                width: 0;
                flex-grow: 1;
                margin: 0 .3rem;

                .title {
                    @include textEllipsis($type: 'multipleRows', $row: 1);
                    margin-bottom: .1rem;
                    font-size: .3rem;
                    color: #333;
                }
                .attr-value {
                    display: flex;
                    align-items: center;

                    .item {
                        margin-right: .2rem;

                        &.up {
                            .value {
                                color: #f90;
                            }
                        }
                        &.down {
                            .value {
                                color: #009933;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
