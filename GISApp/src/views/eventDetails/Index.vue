<template>
    <div class="event-details">
        <!-- 添加 【fold】类可以对信息进行 折叠哦 -->
        <dl class="panel-text-list">
            <dt>
                <p class="panel-tit">事件信息</p>

                <!-- 不要折叠按钮可以把这个代码删除 -->
                <button class="btn-switch"></button>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">EV-23tey23456</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件来源：</span>
                    </div>

                    <div class="content">
                        <span class="value">管网巡检</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">上报时间：</span>
                    </div>

                    <div class="content">
                        <span class="value">2020-03-26</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">上报人员：</span>
                    </div>

                    <div class="content">
                        <span class="value">前端吴彦祖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">发生位置：</span>
                    </div>

                    <div class="content">
                        <span class="value">阿里巴巴西湖区</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">事件类型：</span>
                    </div>

                    <div class="content">
                        <span class="value">帅爆了</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">管径：</span>
                    </div>

                    <div class="content">
                        <span class="value">DN300</span>
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

        <dl class="panel-item audio-preview">
            <dt>
                <p class="panel-tit">问题描述</p>

                <!-- 不要折叠按钮可以把这个代码删除 -->
                <button class="btn-switch"></button>
            </dt>

            <dd>
                <div style="width: 3rem" class="audio-item">
                    <span class="length">45</span>

                    <!--
                        这个元素在页面是没有大小的，
                        点击时候其实并不是用点击触发播放
                        而是点击是用脚本去触发播放
                     -->
                    <audio src="./demo.mp3">
                        fuck，什么垃圾浏览器，居然不支持audio
                    </audio>
                </div>

                <div style="width: 3rem" class="audio-item">
                    <span class="length">45</span>

                    <!--
                        这个元素在页面是没有大小的，
                        点击时候其实并不是用点击触发播放
                        而是点击是用脚本去触发播放
                     -->
                    <audio src="./demo.mp3">
                        fuck，什么垃圾浏览器，居然不支持audio
                    </audio>
                </div>
            </dd>
        </dl>

        <dl class="panel-item image-preview">
            <dt>
                <p class="panel-tit">现场图片</p>

                <button class="btn-switch"></button>
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

        <dl class="panel-item video-preview">
            <dt>
                <p class="panel-tit">现场视频</p>

                <button class="btn-switch"></button>
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

        <div class="tools">
            <button class="btn-submit">处理</button>
        </div>
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'EventDetails',
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
    .event-details {
        position: relative;
        padding-bottom: .6rem;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .panel-text-list {
        @include panelTextList;

        .tel-item {
            color: #2e7ae6;

            .icon {
                @include iconfont;
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
            content: "\e62c";
        }
        & + .audio-item {
            margin-top: .2rem;
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
    .audio-preview,
    .image-preview,
    .video-preview {
        @include panelItem;

        dd {
            @include previewList;
        }
    }
    .audio-preview {
        dd {
            display: block;
            padding: .2rem;
        }
    }
    .tools {
        margin: .3rem .3rem 0;

        .btn-submit {
            display: block;
            width: 100%; height: 1rem;
            color: #fff;
            letter-spacing: .05rem;
            border: none;
            border-radius: .1rem;
            background: #2e7ae6;
            user-select: none;
            font-size: .3rem;
            transition: all .3s;

            &:disabled {
                background: #ddd;
            }
            &:active {
                opacity: .7;
            }
        }
    }
</style>
