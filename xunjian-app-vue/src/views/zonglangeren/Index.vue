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

        <dl class="panel-item event-list">
            <dt>
                <p class="panel-tit">事件上报</p>
            </dt>

            <dd>
                <div class="nav-item">
                    <i class="icon">&#xe653;</i>
                    <p class="nav-name">水管爆管</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe657;</i>
                    <p class="nav-name">水管漏水</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe655;</i>
                    <p class="nav-name">违章施工</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe771;</i>
                    <p class="nav-name">水质问题</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe654;</i>
                    <p class="nav-name">定位错误</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe63f;</i>
                    <p class="nav-name">违章用水</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe687;</i>
                    <p class="nav-name">消防保修</p>
                </div>

                <div class="nav-item">
                    <i class="icon">&#xe63e;</i>
                    <p class="nav-name">汞房异常</p>
                </div>
            </dd>
        </dl>

        <dl class="panel-item">
            <dt>
                <p class="panel-tit">我的任务</p>
            </dt>

            <dd>
                <div class="filter-item">
                    <button class="curr">本月</button>
                    <button>全部</button>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'Zonglangeren',
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
    .event-list {
        dd {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            align-content: flex-start;
            padding-top: 0 !important;
            min-height: auto !important;
        }
        .nav-item {
            position: relative;
            padding: .2rem .3rem;
            flex-basis: 25%;
            text-align: center;
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
                background: #eee;
            }
            .icon {
                @include iconfont;
                font-size: .5rem;
                color: #2e7ae6;
            }
            .nav-name {
                margin-top: .05rem;
                font-size: .24rem;
                color: #555;
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
