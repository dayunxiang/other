<template>
    <div class="component-content">
        <dl class="text-list fold">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">基本信息</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">工单编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">1234789432455222</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">工单名称：</span>
                    </div>

                    <div class="content">
                        <span class="value">表井井盖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件来源：</span>
                    </div>

                    <div class="content">
                        <span class="value">人在家中坐，祸从天上来</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">123409876</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">创建人员：</span>
                    </div>

                    <div class="content">
                        <span class="value">前端吴彦祖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">创建日期：</span>
                    </div>

                    <div class="content">
                        <span class="value">2020-02-11 22:37:30</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">发生位置：</span>
                    </div>

                    <div class="content">
                        <span class="value">我家后门</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件类型：</span>
                    </div>

                    <div class="content">
                        <span class="value">水管爆了</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">管径：</span>
                    </div>

                    <div class="content">
                        <span class="value">D23K</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">管材：</span>
                    </div>

                    <div class="content">
                        <span class="value">钢材</span>
                    </div>
                </div>
            </dd>
        </dl>

        <dl class="text-list audio-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">问题描述</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="row">
                    <div style="width: 3rem" class="audio-item">
                        <span class="length">45</span>

                        <!--
                            这个元素在页面是没有大小的，
                            点击时候其实并不是用点击触发播放
                            而是点击是用脚本去触发播放
                        -->
                        <audio src="">
                            fuck，什么垃圾浏览器，居然不支持audio
                        </audio>
                    </div>
                </div>

                <div class="row">
                    <div style="width: 3rem" class="audio-item">
                        <span class="length">45</span>

                        <!--
                            这个元素在页面是没有大小的，
                            点击时候其实并不是用点击触发播放
                            而是点击是用脚本去触发播放
                        -->
                        <audio src="">
                            fuck，什么垃圾浏览器，居然不支持audio
                        </audio>
                    </div>
                </div>
            </dd>
        </dl>

        <dl class="text-list image-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">现场图片</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>

                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>

                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>

                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>

                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>

                <figure>
                    <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                </figure>
            </dd>
        </dl>

        <dl class="text-list video-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">现场视频</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>
                </figure>
            </dd>
        </dl>

        <dl class="text-list">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">流程信息</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="step-list">
                    <div class="step-item">
                        <i class="line"></i>
                        <time>2019-08-25 09:45</time>
                        <span class="user">回复人：小小**俊</span>
                        <i class="icon">&#xe73b;</i>
                    </div>

                    <div class="step-item">
                        <i class="line"></i>
                        <time>2019-08-25 09:45</time>
                        <span class="user">回复人：小小**俊</span>
                        <i class="icon">&#xe73b;</i>
                    </div>

                    <div class="step-item">
                        <i class="line"></i>
                        <time>2019-08-25 09:45</time>
                        <span class="user">回复人：小小**俊</span>
                        <i class="icon">&#xe73b;</i>
                    </div>

                    <div class="step-item">
                        <i class="line"></i>
                        <time>2019-08-25 09:45</time>
                        <span class="user">回复人：小小**俊</span>
                        <i class="icon">&#xe73b;</i>
                    </div>

                    <div class="step-item">
                        <i class="line"></i>
                        <time>2019-08-25 09:45</time>
                        <span class="user">回复人：小小**俊</span>
                        <i class="icon">&#xe73b;</i>
                    </div>
                </div>
            </dd>
        </dl>

        <div class="tools">
            <button class="btn-submit">处理</button>
        </div>
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'Renwuxiangqing',
        mounted() {
            // https://desmonding.me/zooming/docs/#/?id=installation
            document.addEventListener('DOMContentLoaded', function () {
                const zooming = new Zooming({
                    // options...
                })

                zooming.listen('.img-zoomable')
            })
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-bottom: 1.8rem;
        background: #f4f6f6;
        user-select: none;
    }
    @include textList;
    .image-preview {
        dd {
            display: flex;
            flex-wrap: wrap;
            margin-top: -.2rem;
            padding: 0 .1rem .3rem;

            figure {
                margin: 0;
                padding: .2rem .1rem 0;
                width: 33.33%; height: 2rem;

                img {
                    display: block;
                    width: 100%; height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    .video-preview {
        dd {
            display: flex;
            flex-wrap: wrap;
            margin-top: -.2rem;
            padding: 0 .1rem .3rem;

            figure {
                margin: 0;
                padding: .2rem .1rem 0;
                width: 33.33%; height: 2rem;

                video {
                    display: block;
                    width: 100%; height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    .audio-preview {
        dd {
            padding: 0 1.8rem .3rem .3rem;
            user-select: none;

            .row {
                display: flex;
                padding: .1rem 0;
            }
        }
    }
    .audio-item {
        display: flex;
        align-items: center;
        padding: 0 .2rem;
        height: .6rem;
        border-radius: .08rem;
        background: #eee;

        &:before {
            @include iconfont;
            content: "\e75a";
        }
        .length {
            margin-left: .2rem;

            &:after {
                margin-left: .1rem;
                content: "''";
            }
        }
        audio {
            opacity: 0;
            display: block;
            width: 100%; height: 100%;
        }
    }
    .step-list {
        user-select: none;
    }
    .step-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: .3rem .3rem .3rem .6rem;
        transition: all .3s;

        &:before {
            position: absolute;
            content: "";
            left: .5rem; right: 0; top: 0;
            height: 1px;
            transform: scaleY(0.5);
            background: #eee;
        }
        &:active {
            background: #f3f3f3;
        }
        &:first-child {
            .line {
                top: .5rem;

                &:before,
                &:after {
                    margin-top: -.25rem;
                }
            }
        }
        &:last-child {
            .line {
                bottom: .5rem;

                &:before,
                &:after {
                    margin-top: .25rem;
                }
            }
        }
        .line {
            position: absolute;
            left: .3rem; top: 0; bottom: 0;
            width: 1px;
            background: #eee;

            &:before,
            &:after {
                position: absolute;
                content: "";
                left: 50%; top: 50%;
                transform: translate(-50%, -50%);
            }
            &:before {
                width: .26rem; height: .26rem;
                border: 1px solid #2e7ae6;
                border-radius: 50%;
                background: #fff;
            }
            &:after {
                width: .14rem; height: .14rem;
                border-radius: 50%;
                overflow: hidden;
                background: #2e7ae6;
            }
        }
        time {
            color: #999;
        }
        .user {
            margin-right: .3rem;
            width: 0;
            flex-grow: 1;
            text-align: right;
        }
        .icon {
            @include iconfont;
            color: #e1e1e1;
        }
    }
    .tools {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: .3rem;
        max-width: 7.5rem;

        button {
            width: 0;
            flex-grow: 1;
            height: 1rem;
            color: #fff;
            border: none;
            letter-spacing: .1rem;
            border-radius: .1rem;
            background: #2e7ae6;
            transition: all .3s;
            user-select: none;

            & + button {
                margin-left: .2rem;
            }
            &:active {
                opacity: .7;
            }
        }
    }
</style>
