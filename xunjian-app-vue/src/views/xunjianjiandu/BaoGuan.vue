<template>
    <dl class="bao-guan">
        <dt>
            <p class="panel-tit">2019-11-20 16:34</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe61a;</i>
            </button>
        </dt>

        <dd>
            <address>
                <i class="icon">&#xe603;</i>
                <span>体育南路嘉善试验中学西门体育南路嘉善试验中学西门</span>
            </address>

            <div class="info">
                <img src="@/assets/images/demo.jpg" />

                <div class="text-wrap">
                    <p class="desc">
                        水管爆了水管爆了水管爆了
                        水管爆了水管爆了水管爆了
                        水管爆了水管爆了水管爆了
                        水管爆了水管爆了水管爆了
                    </p>

                    <aside>
                        <button>
                            <i class="icon">&#xe65a;</i>
                            <span>查看详情</span>
                        </button>
                    </aside>
                </div>
            </div>

            <div class="tools">
                <button class="attr-item">
                    <i class="icon">&#xe658;</i>
                    <span class="name">阀门分布</span>
                </button>

                <button class="attr-item">
                    <i class="icon">&#xe658;</i>
                    <span class="name">纵横断面</span>
                </button>

                <aside>
                    <button class="btn-handle">处理</button>
                </aside>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'BaoGuan',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .bao-guan {
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
                    height: 1.6rem;
                    object-fit: cover;
                }
                .text-wrap {
                    margin-left: .2rem;

                    .desc {
                        @include textEllipsis($type: 'multipleRows', $row: 2);
                    }
                    aside {
                        display: flex;
                        flex-direction: row-reverse;
                        padding: .2rem .2rem;

                        button {
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
                }
            }
        }
    }
</style>
