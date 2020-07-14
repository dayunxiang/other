<template>
    <div class="component-content">
        <div class="message-content">
            <div class="message-item other">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <p class="text-content">
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                    </p>
                </div>
            </div>

            <div class="message-item me">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <p class="text-content">
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                        这个是消息测试文案
                    </p>
                </div>
            </div>

            <div class="message-item other">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <div class="image-content">
                        <img src="@/assets/images/demo-teacher.jpeg">
                    </div>
                </div>
            </div>

            <div class="message-item me">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <div class="image-content">
                        <img src="@/assets/images/demo-teacher.jpeg">
                    </div>
                </div>
            </div>

            <div class="message-item other">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <div class="audio-content">
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
                </div>
            </div>

            <div class="message-item me">
                <div class="row time">
                    <time>3月19日 17:45</time>
                </div>

                <div class="row message">
                    <img
                        src="@/assets/images/demo-lijun.png"
                        class="user-image"
                    />

                    <div class="audio-content">
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
                </div>
            </div>
        </div>

        <!--
            show-tools: 显示工具箱
            voice-state: 语音模式
        -->
        <div class="aside">
            <div class="main-send">
                <button class="btn-voice"></button>

                <div class="input-item">
                    <input type="text">
                    <button class="btn-send-voice">按住说话</button>
                    <button class="btn-send">发送</button>
                </div>

                <button class="btn-select">&#xe6df;</button>
            </div>

            <div class="tools">
                <div class="tool-item">&#xe765;</div>
                <div class="tool-item">&#xe766;</div>
                <div class="tool-item">&#xe63d;</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jishixinxi',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .audio-item {
        display: flex;
        align-items: center;
        padding: 0 .2rem;
        height: .8rem;
        border-radius: .08rem;
        background: #fff;
        user-select: none;

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
    .message-content {
        padding: .1rem 0 .4rem;
        height: 0;
        flex-grow: 1;
        overflow-y: scroll;
        background: #eee;

        .row {
            padding: .1rem .3rem;

            &.time {
                padding-top: .6rem;
                margin-bottom: .1rem;
                user-select: none;

                time {
                    display: block;
                    text-align: center;
                    color: #999;
                    font-size: .2rem;
                }
            }
            &.message {
                display: flex;
            }
        }
        .message-item {
            padding: .2rem 0;

            &.other {
                .text-content {
                    margin-left: .2rem;
                    background: #fff;
                }
                .image-content {
                    margin-left: .2rem;
                }
                .audio-content {
                    margin-left: .2rem;
                }
            }
            &.me {
                .message {
                    flex-direction: row-reverse;
                }
                .text-content {
                    margin-right: .2rem;
                    background: #cee6fc;
                }
                .image-content {
                    margin-right: .2rem;
                }
                .audio-content {
                    margin-right: .2rem;
                }
            }
            .user-image {
                display: inline-block;
                width: .8rem; height: .8rem;
                border-radius: .08rem;
            }
            .text-content {
                max-width: 60%;
                padding: .2rem;
                font-size: .24rem;
                word-break: break-all;
                border-radius: .08rem;
            }
            .image-content {
                max-width: 60%;

                img {
                    display: block;
                    width: 100%; height: auto;
                }
            }
            .audio-content {
                max-width: 60%;
            }
        }
    }
    .aside {
        position: relative;
        background: #fff;
        user-select: none;

        &:before {
            position: absolute;
            content: "";
            left: 0; top: 0; right: 0;
            height: 1px;
            background: #ddd;
            transform: scale(1, .5);
        }
        &.show-tools {
            .tools {
                display: flex;
            }
        }
        &.voice-state {
            .main-send {
                .btn-voice {
                    &:after {
                        content: "\e637";
                    }
                }
                .input-item {
                    input {
                        display: none;
                    }
                    .btn-send-voice {
                        display: block;
                    }
                    .btn-send {
                        display: none;
                    }
                }
            }
        }
        .main-send {
            display: flex;
            align-items: center;
            padding: .3rem .2rem;

            .input-item {
                display: flex;
                align-items: stretch;
                width: 0;
                flex-grow: 1;

                input {
                    padding: 0 .2rem;
                    width: 0;
                    flex-grow: 1;
                    height: .7rem;
                    border: none;
                    border-radius: 0;
                    appearance: none;
                }
                .btn-send-voice {
                    display: none;
                    padding: 0 .2rem;
                    width: 0;
                    flex-grow: 1;
                    height: .7rem;
                    border: none;
                    border-radius: .08rem;
                    background: #fff;
                    transition: all .3s;

                    &:active {
                        opacity: .5;
                    }
                }
                .btn-send {
                    padding: 0 .3rem;
                    color: #fff;
                    border: none;
                    background: #2e7ae6;
                    transition: all .3s;

                    &:active {
                        opacity: .7;
                    }
                }
            }
            .btn-voice {
                @include iconfont;
                padding: .1rem .2rem;
                border: none;
                font-size: .5rem;
                background: transparent;
                transition: all .3s;

                &:after {
                    content: "\e63c";
                }
                &:active {
                    opacity: .5;
                }
            }
            .btn-select {
                @include iconfont;
                padding: .1rem .2rem;
                border: none;
                font-size: .5rem;
                background: transparent;
                transition: all .3s;

                &:active {
                    opacity: .5;
                }
            }
        }
        .tools {
            display: none;
            position: relative;
            flex-wrap: wrap;
            padding: 0 .3rem;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: 0; right: 0;
                height: 1px;
                background: #ddd;
                transform: scale(1, .5);
            }
            .tool-item {
                @include iconfont;
                padding: .2rem;
                flex-basis: 25%;
                text-align: center;
                font-size: .8rem;
                color: #999;
                transition: all .3s;

                &:active {
                    background: #ddd;
                }
            }
        }
    }
</style>
