<template>
    <div class="component-content">
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
            <mt-tab-item :id="1">
                <i class="icon">&#xe62f;</i>
                <p class="tab-item-name">设备资料</p>
            </mt-tab-item>

            <mt-tab-item :id="2">
                <i class="icon">&#xe60a;</i>
                <p class="tab-item-name">维修记录</p>
            </mt-tab-item>

            <mt-tab-item :id="3">
                <i class="icon">&#xe611;</i>
                <p class="tab-item-name">年度好评</p>
            </mt-tab-item>

            <mt-tab-item :id="4">
                <i class="icon">&#xe798;</i>
                <p class="tab-item-name">备品备件</p>
            </mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <dl class="equipment-info-list">
                    <dd>
                        <div class="attr">
                            <span class="text">单位名称：</span>
                        </div>

                        <div class="content">
                            <span class="value">都昌县</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">设备状态：</span>
                        </div>

                        <div class="content">
                            <span class="value">使用</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">设备编号：</span>
                        </div>

                        <div class="content">
                            <span class="value">2345098765</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">设备类型：</span>
                        </div>

                        <div class="content">
                            <span class="value">工艺设备</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">设备机型：</span>
                        </div>

                        <div class="content">
                            <span class="value">其它</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">生产日期：</span>
                        </div>

                        <div class="content">
                            <span class="value">2010-02-23</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">使用日期：</span>
                        </div>

                        <div class="content">
                            <span class="value">2010-02-23</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">负责人：</span>
                        </div>

                        <div class="content">
                            <span class="value">前端吴彦祖</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">安装地点：</span>
                        </div>

                        <div class="content">
                            <span class="value">鼓楼区</span>
                        </div>
                    </dd>

                    <dd>
                        <div class="attr">
                            <span class="text">铭牌信息：</span>
                        </div>

                        <div class="content">
                            <span class="value">功率23，额定转速12</span>
                        </div>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                <dl class="project-item">
                    <dt>
                        <p class="info-title">点检2次</p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>
                </dl>

                <dl class="project-item fold">
                    <dt>
                        <p class="info-title">保养2次</p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>
                </dl>

                <dl class="project-item fold">
                    <dt>
                        <p class="info-title">维修2次</p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>

                    <dd>
                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护类别：</span>
                            </div>

                            <div class="content">
                                <span class="value">日常维护</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">处理人：</span>
                            </div>

                            <div class="content">
                                <span class="value">前端吴彦祖</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">点检结果：</span>
                            </div>

                            <div class="content">
                                <span class="value">正常</span>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="attr">
                                <span class="text">维护日期：</span>
                            </div>

                            <div class="content">
                                <span class="value">2019-02-18</span>
                            </div>
                        </div>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="3">
                <table class="table-theme">
                    <thead>
                        <tr>
                            <th>年度</th>
                            <th>时间</th>
                            <th>完成率</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>

                        <tr>
                            <td>2010</td>
                            <td>12小时</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </mt-tab-container-item>

            <mt-tab-container-item :id="4">
                <table class="table-theme">
                    <thead>
                        <tr>
                            <th>备品备件</th>
                            <th>规格型号</th>
                            <th>时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="name">
                                    轴承轴承轴承轴承轴承轴承轴承轴承轴承
                                </p>
                            </td>
                            <td>6260</td>
                            <td>
                                2016-03-24 14:23:26
                            </td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'EquipmentInfo',
        data() {
            return {
                navbarSelected: 1,
            };
        },
    };
</script>

<style lang="scss" scoped>
    .component-content {
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
        .icon {
            @include iconfont;
            font-size: .6rem;
        }
        .tab-item-name {
            margin-top: .2rem;
        }
    }
    .equipment-info-list {
        position: relative;
        margin-top: .2rem;
        background: #fff;
        user-select: none;

        dd {
            position: relative;
            display: flex;
            align-items: baseline;
            padding: .3rem .3rem;
            transition: all .3s;

            &:before {
                position: absolute;
                content: "";
                left: .3rem; right: 0; top: 0;
                height: 1px;
                transform: scaleY(0.5);
                background: #eee;
            }
            .attr {
                margin-right: .2rem;

                .text {
                    min-width: 4em;
                    color: #666;
                }
            }
            .content {
                width: 0;
                display: flex;
                flex-grow: 1;
                flex-direction: row-reverse;
            }
        }
    }
    .project-item {
        margin-top: .3rem;
        background: #fff;
        user-select: none;

        &.fold {
            dt {
                .btn-fold {
                    &:before {
                        content: "\e60d";
                    }
                }
            }
            dd {
                padding: 0;
                height: 0;
                overflow: hidden;
            }
        }
        dt {
            display: flex;
            align-items: center;
            position: relative;
            padding: .2rem;

            &:after {
                position: absolute;
                content: "";
                left: .2rem; right: .2rem; bottom: 0;
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
            .btn-fold {
                @include iconfont;
                font-size: .3rem;
                color: #ddd;
                border: none;
                background: transparent;

                &:before {
                    content: "\e60f";
                }
            }
        }
        dd {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            padding: .3rem .5rem .3rem 0;
            white-space:nowrap;
            transition: all .2s;
            user-select: none;

            &:before {
                @include iconfont;
                position: absolute;
                content: "\e62b";
                top: 50%; right: .3rem;
                font-size: .2rem;
                color: #ddd;
                transform: translate(0, -50%);
            }
            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                transform: scaleY(0.5);
                background: #eee;
            }
            &:active {
                background: #eee;
            }
            .info-item {
                display: inline-flex;
                align-items: baseline;
                flex-basis: 50%;
                padding: .15rem .2rem;

                .attr {
                    margin-right: .2rem;

                    .text {
                        min-width: 5em;
                        text-align: right;
                        color: #666;
                    }
                }
                .content {
                    width: 0;
                    flex-grow: 1;
                }
            }
        }
    }
    .table-theme {
        margin-top: .3rem;
        max-width: 100%;
        width: 100%;
        font-size: .25rem;
        white-space: nowrap;
        background: #fff;

        thead {
            color: #fff;
            background: rgba(38, 162, 255, 1);

            th {
                padding: .15rem;
                text-align: center;
            }
        }
        tbody {
            tr {
                &:nth-child(4n) {
                    background: #f4f6f6;
                }
            }
            td {
                padding: .15rem;
                text-align: center;
            }
            .name {
                @include textEllipsis($type: 'singleRow', $maxLength: 8em);
            }
            button {
                padding: .1rem 0;
                color: #26a2ff;
                border: none;
                background: transparent;;
            }
        }
    }
</style>
