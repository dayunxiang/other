<template>
    <dl class="fan-wei">
        <dt>
            <p class="panel-tit">晋阳西路华展酒店</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe61a;</i>
            </button>
        </dt>

        <dd>
            <div class="info">
                <img src="@/assets/images/demo.jpg" />

                <div class="text-wrap">
                    <div class="row">
                        <div class="attr">编号：</div>
                        <div class="value">BJ-FM-5645765765765</div>
                    </div>

                    <div class="row">
                        <div class="attr">型号：</div>
                        <div class="value">T型-01-W</div>
                    </div>

                    <div class="row">
                        <div class="attr">规格：</div>
                        <div class="value">ND400</div>
                    </div>

                    <div class="row">
                        <div class="attr">状态：</div>
                        <div class="value">
                            <div class="state normal">
                                <i></i>
                                <span>正常</span>
                            </div>

                            <!-- <div class="state warning">
                                <i></i>
                                <span>异常</span>
                            </div> -->

                            <button>
                                <i class="icon">&#xe65a;</i>
                                <span>查看详情</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tools">
                <button class="attr-item">
                    <i class="icon">&#xe658;</i>
                    <span class="name">影响范围</span>
                </button>

                <button class="attr-item">
                    <i class="icon">&#xe658;</i>
                    <span class="name">保障用户</span>
                </button>

                <aside>
                    <button class="btn-handle">更新</button>
                    <button class="btn-handle">上报</button>
                </aside>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'FanWei',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .fan-wei {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            padding: 0;

            address {
                display: flex;
                align-items: center;
                padding: .2rem .3rem;

                i {
                    @include iconfont;
                    margin-right: .05rem;
                    font-size: .4rem;
                    color: #999;
                }
                span {
                    @include textEllipsis($type: 'singleRow', $maxLength: 100%);
                }
            }
            .info {
                display: flex;
                padding: .2rem .3rem;

                img {
                    width: 2.6rem;
                    height: 1.8rem;
                    object-fit: cover;
                }
                .text-wrap {
                    margin-left: .2rem;

                    .row {
                        display: flex;
                        align-items: center;
                        padding: .01rem 0;

                        .attr {
                            color: #666;
                        }
                    }
                    .state {
                        display: inline-flex;
                        align-items: center;

                        &.normal {
                            color: #118b26;
                            i {
                                background: #118b26;
                            }
                        }
                        &.warning {
                            color: #f90;

                            i {
                                background: #f90;
                            }
                        }
                        & + .state {
                            margin-left: .3rem;
                        }
                        i {
                            margin-right: .1rem;
                            width: .2rem; height: .2rem;
                            border-radius: 50%;
                        }
                    }
                    button {
                        margin-left: .3rem;
                        border: none;
                        background: transparent;

                        .icon {
                            @include iconfont;
                            margin-right: .05rem;
                            font-size: .3rem;
                            color: #999;
                        }
                        span {
                            font-size: .24rem;
                        }
                    }
                }
            }
            .tools {
                @include thinLine($useBefore: true, $position: 'top', $backgroundColor: #eee,$top: 0, $right: .2rem,$left: .2rem);

                display: flex;
                align-items: center;
                padding: 0 .2rem;

                .attr-item {
                    padding: .2rem .2rem;
                    border: none;
                    background: transparent;
                    transition: all 0.3s;
                    user-select: none;

                    &:active {
                        opacity: .7;
                    }
                    .icon {
                        @include iconfont;
                        font-size: .4rem;
                    }
                    .name {
                        display: block;
                        margin-top: .05rem;
                        font-size: .24rem;
                    }
                }
                .btn-handle {
                    padding: 0.1rem 0.4rem;
                    border: none;
                    border-radius: 0.08rem;
                    font-size: 0.24rem;
                    color: #fff;
                    background: #2e7ae6;
                    transition: all 0.3s;
                    user-select: none;

                    &:active {
                        opacity: .7;
                    }
                }
                aside {
                    width: 0;
                    display: flex;
                    flex-grow: 1;
                    flex-direction: row-reverse;

                    button {
                        margin-left: .3rem;
                    }
                }
            }
        }
    }
</style>
