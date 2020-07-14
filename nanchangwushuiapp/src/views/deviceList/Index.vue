<template>
    <div class="component-content">
        <header class="header">
            <i class="icon">&#xe6d1;</i>

            <div class="factory-info">
                <p class="factory-name">都昌污水处理厂</p>
                <p class="tips">
                    <span>江西省 九江市</span>
                    <span>负责人：前端吴彦祖</span>
                </p>
            </div>

            <button class="btn-follow follow"></button>
        </header>

        <mt-navbar v-model="navbarSelected">
            <mt-tab-item :id="1">
                <p class="tab-item-name">所有设备(26)</p>
            </mt-tab-item>

            <mt-tab-item :id="2">
                <p class="tab-item-name">我的关注(9)</p>
            </mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="navbarSelected">
            <mt-tab-container-item :id="1">
                <dl class="panel-item follow">
                    <dt>
                        <p class="panel-title">
                            <span>调节池</span>
                            <small>(共3个设备)</small>
                        </p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <img class="device-img" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">

                        <div class="text-info">
                            <p class="device-name">二号钛酸钙哦</p>
                            <p class="sub-title">SSWS-HIB-01</p>
                            <p class="tags">
                                <mt-badge size="small" color="#f2f6fa">汞</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">设备料</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">厂外区域</mt-badge>
                            </p>
                        </div>

                        <button class="btn-follow"></button>
                    </dd>
                </dl>

                <dl class="panel-item">
                    <dt>
                        <p class="panel-title">
                            <span>调节池</span>
                            <small>(共3个设备)</small>
                        </p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <img class="device-img" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">

                        <div class="text-info">
                            <p class="device-name">二号钛酸钙哦</p>
                            <p class="sub-title">SSWS-HIB-01</p>
                            <p class="tags">
                                <mt-badge size="small" color="#f2f6fa">汞</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">设备料</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">厂外区域</mt-badge>
                            </p>
                        </div>

                        <button class="btn-follow"></button>
                    </dd>
                </dl>

                <dl class="panel-item fold">
                    <dt>
                        <p class="panel-title">
                            <span>调节池</span>
                            <small>(共3个设备)</small>
                        </p>

                        <button class="btn-fold"></button>
                    </dt>

                    <dd>
                        <img class="device-img" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2126662861,3396795225&fm=26&gp=0.jpg">

                        <div class="text-info">
                            <p class="device-name">二号钛酸钙哦</p>
                            <p class="sub-title">SSWS-HIB-01</p>
                            <p class="tags">
                                <mt-badge size="small" color="#f2f6fa">汞</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">设备料</mt-badge>
                                <mt-badge size="small" color="#f2f6fa">厂外区域</mt-badge>
                            </p>
                        </div>

                        <button class="btn-follow"></button>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item :id="2">
                我的关注
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'DeviceList',
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
    }
    .header {
        display: flex;
        align-items: center;
        padding: 0.7rem .3rem .5rem;
        background: #2e7ae6;

        .icon {
            @include iconfont;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.3rem; height: 1.3rem;
            font-size: .6rem;
            color: #999;
            border-radius: 50%;
            background: #fff;
            overflow: hidden;
        }
        .factory-info {
            margin: 0 .3rem;
            width: 0;
            flex-grow: 1;
            color: #fff;

            .factory-name {
                font-size: .4rem;
            }
            .tips {
                margin-top: .1rem;
                font-size: .25rem;

                span {
                    margin-right: .2rem;
                }
            }
        }
        .btn-follow {
            @include iconfont;
            border: none;
            font-size: .4rem;
            color: #fff;
            background: transparent;

            &:before {
                content: "\e602";
            }
            &.follow {
                color: #ff6666;

                &:before {
                    content: "\e618";
                }
            }
        }
    }
    .panel-item {
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
        &.follow {
            .btn-follow {
                color: #ff6666;

                &:before {
                    content: "\e618";
                }
            }
        }
        dt {
            position: relative;
            display: flex;
            align-items: center;
            padding: .25rem .3rem .25rem .5rem;

            &:before {
                position: absolute;
                content: "";
                left: .3rem; top: .35rem; bottom: .35rem;
                width: .05rem;
                background: #26a2ff;
            }
            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, 0.5);
            }
            .panel-title {
                width: 0;
                display: flex;
                align-items: baseline;
                flex-grow: 1;

                span {
                    font-size: .3rem;
                    font-weight: bold;
                }
                small {
                    margin-left: .2rem;
                    font-size: .25rem;
                    color: #999;
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
            display: flex;
            align-items: center;
            padding: .3rem;
            transition: all 0.2s;

            .device-img {
                width: 1.2rem; height: 1.2rem;
                border-radius: .08rem;
                object-fit: cover;
            }
            .text-info {
                margin: 0 .2rem;
                width: 0;
                flex-grow: 1;

                .device-name {
                    @include textEllipsis($type: 'multipleRows', $row: 1);
                    font-size: .3rem;
                }
                .sub-title {
                    font-size: .25rem;
                    color: #999;
                }
                .tags {
                    margin-top: .1rem;

                    .mint-badge {
                        margin-right: .1rem;
                        font-size: .2rem;
                        color: #666;
                    }
                }
            }
            .btn-follow {
                @include iconfont;
                border: none;
                font-size: .4rem;
                color: #ccc;
                background: transparent;

                &:before {
                    content: "\e602";
                }
            }
        }
    }
</style>
