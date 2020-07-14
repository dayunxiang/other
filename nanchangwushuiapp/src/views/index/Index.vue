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

        <div class="menu-list">
            <div class="menu-item">
                <i style="color: #f90" class="icon">&#xe603;</i>
                <p>所有水厂</p>
            </div>

            <div class="menu-item">
                <i style="color: #26a2ff" class="icon">&#xe603;</i>
                <p>异常报警</p>
            </div>

            <div class="menu-item">
                <i style="color: #f90" class="icon">&#xe603;</i>
                <p>设备档案</p>
            </div>

            <div class="menu-item">
                <i style="color: #26a2ff" class="icon">&#xe603;</i>
                <p>备品备件</p>
            </div>

            <div class="menu-item">
                <i style="color: #26a2ff" class="icon">&#xe603;</i>
                <p>消息中心</p>
            </div>

            <div class="menu-item">
                <i style="color: #26a2ff" class="icon">&#xe603;</i>
                <p>个人资料</p>
            </div>
        </div>

        <dl class="info-list">
            <dt>
                <p class="info-title">我的关注</p>
            </dt>

            <dd>
                <img src="https://cdn.weipaitang.com/banner/2020030497e790cd-31fb-0255-7a02-cf85f4357723-W1125H450" />

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <p>确实是，谁用谁知道呢</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#409EFF" class="badge">信息更新</mt-badge>
            </dd>

            <dd>
                <img src="https://cdn.weipaitang.com/banner/2020030497e790cd-31fb-0255-7a02-cf85f4357723-W1125H450" />

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <p>确实是，谁用谁知道呢</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#f90" class="badge">报警</mt-badge>
            </dd>

            <dd>
                <img src="https://cdn.weipaitang.com/banner/2020030497e790cd-31fb-0255-7a02-cf85f4357723-W1125H450" />

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <p>确实是，谁用谁知道呢</p>
                    <time>2020年12月27日 14:34</time>
                </div>
            </dd>
        </dl>

        <dl class="info-list">
            <dt>
                <p class="info-title">最新异常报警</p>

                <button class="edit-item">
                    <span>更多报警</span>
                    <i class="icon">&#xe62b;</i>
                </button>
            </dt>

            <dd>
                <i style="color:#67C23A" class="icon">&#xe6cf;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#67C23A" class="badge">处理中</mt-badge>
            </dd>

            <dd>
                <i style="color:#67C23A" class="icon">&#xe6cf;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#67C23A" class="badge">处理中</mt-badge>
            </dd>

            <dd>
                <i style="color:#f90" class="icon">&#xe6cf;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#f90" class="badge">待处理</mt-badge>
            </dd>
        </dl>

        <dl class="info-list">
            <dt>
                <p class="info-title">最新消息</p>
            </dt>

            <dd>
                <i class="icon">&#xe603;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>

                <mt-badge size="small" color="#F56C6C" class="badge">屌爆了</mt-badge>
            </dd>

            <dd>
                <i class="icon">&#xe603;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>
            </dd>

            <dd>
                <i class="icon">&#xe603;</i>

                <div class="text-wrap">
                    <p>这个框架太垃圾啊，不信你用用</p>
                    <time>2020年12月27日 14:34</time>
                </div>
            </dd>
        </dl>

        <FootNav></FootNav>
    </div>
</template>

<script>
    import FootNav from "@/components/FootNav.vue";

    export default {
        name: "Index",
        components: {
            FootNav
        },
    }
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-bottom: 1.4rem;
        min-height: 100vh;
        background: #f4f6f6;

        .info-list {
            margin-top: .3rem;
        }
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
    .menu-list {
        display: flex;
        flex-wrap: wrap;
        user-select: none;
        background: #fff;

        .menu-item {
            flex-basis: 33.33%;
            padding: .3rem 0;
            text-align: center;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            .icon {
                @include iconfont;
                display: block;
                margin: 0 auto;
                font-size: .4rem;
            }
            p {
                margin-top: .15rem;
                font-size: .24rem;
            }
        }
    }
    .info-list {
        user-select: none;
        background: #fff;

        dt {
            display: flex;
            align-items: center;
            position: relative;
            padding: .2rem .3rem;

            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            .info-title {
                width: 0;
                flex-grow: 1;
                position: relative;
                padding-left: .2rem;
                font-weight: bold;

                &:before {
                    position: absolute;
                    content: "";
                    left: 0; top: .05rem; bottom: .05rem;
                    width: .05rem;
                    background: #26a2ff;
                }
            }
            .edit-item {
                display: inline-flex;
                align-items: center;
                border: none;
                background: transparent;
                color: #999;
                font-size: .24rem;

                span {
                    margin-right: .05rem;
                }
                .icon {
                    @include iconfont;

                }
            }
        }
        dd {
            position: relative;
            display: flex;
            align-items: center;
            padding: .2rem .3rem;

            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            img {
                width: 1rem; height: 1rem;
                object-fit: cover;
                border-radius: .08rem;
            }
            .icon {
                @include iconfont;
                font-size: .4rem
            }
            .text-wrap {
                margin: 0 .2rem;
                width: 0;
                flex-grow: 1;

                p {
                    @include textEllipsis($type: 'multipleRows', $maxLength: 100%, $row: 1);

                    & + p {
                        font-size: .24rem;
                        color: #666;
                    }
                }
                time {
                    font-size: .24rem;
                    color: #999;
                }
            }
            .badge {
                font-size: .2rem;
            }
        }
    }
</style>
