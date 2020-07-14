<template>
    <div class="component-content">
        <mt-navbar v-model="tabSelected">
            <mt-tab-item id="1">文字回复</mt-tab-item>
            <mt-tab-item id="2">语音回复</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="tabSelected">
            <mt-tab-container-item id="1">
                <dl class="text-list reply-text">
                    <dt>
                        <div class="text-item">
                            <div class="attr">
                                <span class="text">文字回复</span>
                            </div>
                        </div>
                    </dt>

                    <dd>
                        <textarea rows="6" placeholder="请输入内容（1000字以内）"></textarea>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <dl class="text-list audio-preview">
                        <dt>
                            <div class="text-item">
                                <div class="attr">
                                    <span class="text">语音回复</span>
                                </div>
                            </div>
                        </dt>

                        <dd>
                            <button class="btn-record">
                                <i>&#xe63c;</i>
                                <p>按住录音</p>
                            </button>

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

                                <button class="btn-del">删除</button>
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

                                <button class="btn-del">删除</button>
                            </div>
                        </dd>
                    </dl>
            </mt-tab-container-item>
        </mt-tab-container>

        <dl class="text-list image-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">抢修设备清单</span>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="p-images-upload">
                    <figure class="col-item">
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                        <button class="btn-del"></button>
                    </figure>

                    <figure class="col-item">
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                        <button class="btn-del"></button>
                    </figure>

                    <figure class="col-item">
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                        <button class="btn-del"></button>
                    </figure>

                    <figure class="col-item">
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                        <button class="btn-del"></button>
                    </figure>

                    <div class="col-item">
                        <div class="btn-upload">
                            <input type="file">
                        </div>
                    </div>

                    <p class="tips">单张图片不能超过1M</p>
                </div>
            </dd>
        </dl>

        <dl class="text-list image-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">现场图片</span>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="p-images-upload">
                    <figure class="col-item">
                        <img src='@/assets/images/demo-teacher.jpeg' class='img-zoomable' />
                        <button class="btn-del"></button>
                    </figure>

                    <div class="col-item">
                        <div class="btn-upload">
                            <input type="file">
                        </div>
                    </div>

                    <p class="tips">单张图片不能超过1M</p>
                </div>
            </dd>
        </dl>

        <dl class="text-list video-preview">
            <dt>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">现场视频</span>
                    </div>
                </div>
            </dt>

            <dd>
                <div class="p-video-upload">
                    <figure class="col-item">
                        <video src="https://media.weipaitang.com/wpt_20200209_community_158124712138574" preload="auto"
                            webkit-playsinline="true" x5-video-player-type="h5-page">
                        </video>
                        <button class="btn-del"></button>
                    </figure>

                    <div class="col-item">
                        <div class="btn-upload">
                            <input type="file">
                        </div>
                    </div>

                    <p class="tips">单个视频不能超过20M</p>
                </div>
            </dd>
        </dl>

        <div class="tools">
            <button class="btn-submit">提交</button>
        </div>
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'Renwuchuli',
        data() {
            return {
                tabSelected: '1'
            };
        },
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
        padding-bottom: 1.2rem;
    }
    .mint-navbar {
        margin-bottom: 5px;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
    }
    @include textList;
    .image-preview {
        dd {
            margin-top: -.2rem;
            padding: 0 .1rem .3rem;
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
    .audio-preview {
        dd {
            display: block;
            padding: .2rem;

            .row {
                display: flex;
                padding: .1rem 0;
            }
            .btn-del {
                margin-left: .3rem;
                height: .6rem;
                padding: 0 .3rem;
                color: #fff;
                border: none;
                border-radius: .08rem;
                background: #AB3B3A;
                transition: all .3s;

                &:active {
                    opacity: .7;
                }
            }
        }
    }
    .reply-text {
        dd {
            padding: 0 .3rem;
        }
        textarea {
            display: block;
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            min-height: 4em;
            max-height: 10em;
            padding: .2rem .3rem;
            border: 1px solid #eee;
            border-radius: .08rem;
            transition: all .3s;
            appearance: none;

            &:focus {
                border-color: #2e7ae6;
            }
        }
    }
    .btn-record {
        display: block;
        margin: 0 auto .3rem;
        width: 1.8rem; height: 1.8rem;
        border: none;
        border-radius: 50%;
        background: #eee;
        transition: all .3s;

        &:active {
            background: #2e7ae6;

            p {
                color: #fff;
            }
        }
        i {
            @include iconfont;
            font-size: .8rem;
            color: #fff;
        }
        p {
            margin-top: .1rem;
            font-size: .2rem;
            transition: all .3s;
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
