<template>
    <div class="component-content">
        <ul class="info-list">
            <li class="info-item">
                <div class="attr">
                    <span class="text">发生位置：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="详细地址">
                        <!-- <i class="icon">&#xe626;</i> -->
                    </div>
                </div>
            </li>

            <li class="info-item">
                <div class="attr">
                    <span class="text">事件类型：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <select>
                            <option value="1">选项1</option>
                            <option value="2">选项2</option>
                            <option value="3">选项3</option>
                            <option value="4">选项4</option>
                        </select>

                        <i class="icon">&#xe60d;</i>
                    </div>
                </div>
            </li>

            <li class="info-item">
                <div class="attr">
                    <span class="text">施工单位：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请选择施工单位">
                        <i class="icon">&#xe677;</i>
                    </div>
                </div>
            </li>
        </ul>

        <mt-navbar v-model="tabSelected">
            <mt-tab-item id="1">文字描述</mt-tab-item>
            <mt-tab-item id="2">语音描述</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="tabSelected">
            <mt-tab-container-item id="1">
                <dl class="panel-item reply-text">
                    <dt>
                        <p class="panel-tit">文字描述</p>
                    </dt>

                    <dd>
                        <textarea rows="6" placeholder="请输入内容（1000字以内）"></textarea>
                    </dd>
                </dl>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <dl class="panel-item audio-preview">
                    <dt>
                        <p class="panel-tit">语音描述</p>
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

        <dl class="panel-item image-preview">
            <dt>
                <p class="panel-tit">现场图片</p>
            </dt>

            <dd>
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

                <figure class="col-item">
                    <div class="btn-upload">
                        <input type="file">
                    </div>
                </figure>

                <p class="tips">单张图片不能超过1M</p>
            </dd>
        </dl>

        <dl class="panel-item video-preview">
            <dt>
                <p class="panel-tit">现场视频</p>
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

                    <button class="btn-del"></button>
                </figure>

                <figure>
                    <video
                        src="https://media.weipaitang.com/wpt_20200209_community_158124712138574"
                        preload="auto"
                        webkit-playsinline="true"
                        x5-video-player-type="h5-page"
                    >
                    </video>

                    <button class="btn-del"></button>
                </figure>

                <figure class="col-item">
                    <div class="btn-upload">
                        <input type="file">
                    </div>
                </figure>

                <p class="tips">单个视频不能超过20M</p>
            </dd>
        </dl>

        <div class="tools">
            <button class="btn-submit">上报</button>
        </div>
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'IncidentReport',
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
        padding-bottom: .6rem;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .info-list {
        position: relative;
        margin-bottom: .3rem;
        background: #fff;
        user-select: none;

        .input-item {
            display: flex;
            align-items: baseline;

            select,
            textarea,
            input[type="text"],
            input[type="password"] {
                width: 0;
                flex-grow: 1;
                border: none;
                -webkit-appearance: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #e1e1e1;
                }
            }

            input[type="text"],
            input[type="password"] {
                height: .6rem;
            }
            .icon {
                @include iconfont;
                margin-left: .2rem;
                color: #999;
            }
        }
        .info-item {
            position: relative;
            display: flex;
            align-items: baseline;
            padding: .3rem .3rem;
            transition: all .3s;

            &:first-child {
                &:before {
                    opacity: 0;
                }
            }
            &:before {
                position: absolute;
                content: "";
                left: .3rem; right: 0; top: 0;
                height: 1px;
                transform: scaleY(0.5);
                background: #eee;
            }
            &.top {
                .attr {
                    align-self: self-start;
                }
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
                flex-grow: 1;
            }
        }
    }
    .mint-navbar {
        margin-bottom: 5px;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
    }
    .panel-item {
        @include panelItem;

        dd {
            @include previewList;
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
    .btn-upload {
        position: relative;
        height: 100%;
        background: #eee no-repeat center / cover;

        &:before {
            position: absolute;
            left: 50%; top: 50%;
            content: "";
            margin-left: -15px;
            margin-top: -1px;
            width: 30px; height: 2px;
            background: #ccc;
        }
        &:after {
            position: absolute;
            left: 50%; top: 50%;
            content: "";
            margin-left: -1px;
            margin-top: -15px;
            width: 2px; height: 30px;
            background: #ccc;
        }
        input[type="file"] {
            z-index: 5;
            opacity: 0;
            position: absolute;
            left: 0; right: 0; top: 0;
            width: 100%; height: 100%;
        }
    }
    .tips {
        margin-top: .2rem;
        padding-left: .2rem;
        width: 100%;
        font-size: .24rem;
        color: tomato;
    }
    .image-preview {
        dd {
            @include previewList;
        }
    }
    .video-preview {
        dd {
            @include previewList;
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
            padding: .2rem .3rem;
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
        margin: 0 auto;
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
        & + .row {
            margin-top: .4rem;
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
