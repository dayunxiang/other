<template>
    <div class="component-content">
        <dl class="text-list fold">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">点位信息</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">点位编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">1234789432455222</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">检查类型：</span>
                    </div>

                    <div class="content">
                        <span class="value">表井井盖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">经度：</span>
                    </div>

                    <div class="content">
                        <span class="value">23.98</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">纬度：</span>
                    </div>

                    <div class="content">
                        <span class="value">45.56</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">打卡时间：</span>
                    </div>

                    <div class="content">
                        <span class="value">2020-02-11 22:37:30</span>
                    </div>
                </div>
            </dd>
        </dl>

        <dl class="text-list">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">养护信息</span>
                    </div>

                    <div class="content">
                        <button class="btn-switch"></button>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">养护内容：</span>
                    </div>

                    <div class="content">
                        <span class="value">河南偷井盖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">原件编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">12345678987</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">新件编号：</span>
                    </div>

                    <div class="content">
                        <span class="value">123456876</span>
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

        <dl class="text-list audio-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">备注</span>
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
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'Renwudanxiangqing',
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
</style>
