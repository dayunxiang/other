<template>
    <div class="component-content">
        <div class="nav-list">
            <div class="nav-item">
                <i class="icon">&#xe738;</i>
                <p class="nav-name">工单管理</p>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe636;</i>
                <p class="nav-name">事件管理</p>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe636;</i>
                <p class="nav-name">地图查询</p>
            </div>

            <div class="nav-item">
                <i class="icon">&#xe672;</i>
                <p class="nav-name">事件上报</p>
            </div>
        </div>

        <dl class="panel-item task">
            <dt>
                <p class="panel-tit">待办任务(4)</p>

                <a class="link" href="#">
                    <span>更多</span>
                    <i>&#xe73b;</i>
                </a>
            </dt>

            <dd>
                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>

                <div class="task-item">
                    <i class="icon-task">&#xe622;</i>
                    <p>5块钱如何花3天</p>
                    <time>刚刚</time>
                    <i class="icon-arrow">&#xe73b;</i>
                </div>
            </dd>
        </dl>

        <dl class="panel-item">
            <dt>
                <p class="panel-tit">事件上报</p>

                <a class="link" href="#">
                    <span>更多</span>
                    <i>&#xe73b;</i>
                </a>
            </dt>

            <dd>
                <div class="filter-item">
                    <button class="curr">今日</button>
                    <button>本月</button>
                    <button>全部</button>
                </div>

                <!--
                    切记：
                    p-no-data 和 echart-wrap 互斥
                 -->
                <div class="p-no-data">
                    <!-- 搜索 -->
                    <!-- <img class="default-image" src="https://cdn.weipaitang.com/static/201905165fe365d3-d4ab-494a-a9b5-e52e3ec6ed89-W420H416"> -->

                    <!-- 找不到页面 -->
                    <!-- <img class="default-image" src="https://cdn.weipaitang.com/static/201905162f767fa8-decc-4536-8f9f-dd82851f03c6-W420H416"> -->

                    <!-- 网络缺省图片 -->
                    <img class="default-image"
                        src="https://cdn.weipaitang.com/static/201905160168d81b-8a7b-45b2-8ea0-838e8bb372ac-W420H413">
                    <p class="tips">网络开小差啦~</p>
                </div>

                <!--
                    <div class="echart-wrap"></div>
                -->
            </dd>
        </dl>

        <dl class="panel-item">
            <dt>
                <p class="panel-tit">冲洗进度</p>

                <a class="link" href="#">
                    <span>更多</span>
                    <i>&#xe73b;</i>
                </a>
            </dt>

            <dd>
                <div class="filter-item">
                    <button>今日</button>
                    <button class="curr">本月</button>
                    <button>全部</button>
                </div>

                <div class="echart-wrap"></div>
            </dd>
        </dl>

        <footer class="p-footer-navs">
            <a class="nav-item" href="javascript:;">
                <i class="icon">&#xe64e;</i>
                <p class="text">首页</p>
            </a>

            <a class="nav-item" href="javascript:;">
                <i class="icon">&#xe62d;</i>
                <em class="number">88</em>
                <p class="text">消息</p>
            </a>

            <a class="nav-item" href="javascript:;">
                <i class="icon">&#xe62b;</i>
                <p class="text">通讯录</p>
            </a>

            <a class="nav-item" href="javascript:;">
                <i class="icon">&#xe643;</i>
                <p class="text">我的</p>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Zonglan',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-bottom: 1.8rem;
    }
    .nav-list {
        display: flex;
        align-items: center;
        padding: .3rem 0;
        background-image:linear-gradient(-360deg, rgb(96, 154, 236), rgb(46, 122, 230));
        user-select: none;

        .nav-item {
            position: relative;
            width: 0;
            flex-grow: 1;
            text-align: center;
            color: #fff;
            transition: all .3s;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: .1rem; bottom: .1rem;
                width: 1px;
                background: rgba(255, 255, 255, .3);
                transform: scale(.5, 1);
            }
            &:active {
                opacity: .3;
            }
            .icon {
                @include iconfont;
                font-size: .5rem;
            }
            .nav-name {
                margin-top: .05rem;
            }
        }
    }
    .panel-item {
        margin-top: .3rem;
        user-select: none;

        &.task {
            dd {
                min-height: 3rem;
                max-height: 5rem;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }
        }
        dt {
            display: flex;
            align-items: center;
            position: relative;
            padding: .2rem .2rem .2rem .4rem;

            &:before {
                position: absolute;
                content: "";
                left: .2rem; top: .25rem; bottom: .25rem;
                width: .05rem;
                background: #2e7ae6;
            }
            &:after {
                position: absolute;
                content: "";
                left: .2rem; right: .2rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            .panel-tit {
                width: 0;
                flex-grow: 1;
                font-weight: bold;
                color: #2e7ae6;
            }
            .link {
                display: inline-flex;
                align-items: center;
                font-size: .24rem;
                color: #2e7ae6;

                i {
                    @include iconfont;
                    font-size: .18rem;
                }
            }
        }
        dd {
            position: relative;
            padding: .2rem;
            min-height: 5rem;

            .filter-item {
                position: absolute;
                display: inline-flex;
                align-items: center;
                top: .2rem; right: .2rem;
                border: 1px solid #2e7ae6;
                border-radius: .08rem;

                button {
                    padding: .05rem .2rem;
                    border: none;
                    font-size: .2rem;
                    background: transparent;
                    transition: all .3s;

                    &:active {
                        opacity: .9;
                    }
                    &.curr {
                        color: #fff;
                        background: #2e7ae6;
                    }
                }
            }
        }
        .task-item {
            display: flex;
            align-items: center;
            padding: .15rem 0;

            .icon-task {
                font-size: .3rem;
                color: #2e7ae6;
            }
            .icon-arrow {
                font-size: .2rem;
                color: #eee;
            }
            i {
                @include iconfont;
            }
            p {
                margin: 0 .1rem;
                width: 0;
                flex-grow: 1;
                color: #2e7ae6;
            }
            time {
                margin-right: .2rem;
                font-size: .2rem;
                color: #999;
            }
        }
        .echart-wrap {
            height: 5rem;
        }
    }
</style>
