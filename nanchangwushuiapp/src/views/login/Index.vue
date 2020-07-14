<template>
    <div class="component-content">
        <header class="header">
            <i class="icon">&#xe606;</i>
            <p class="name">水处理设备运营管控平台</p>
            <p class="english">Water treatment equipment operation and control platform</p>
        </header>

        <ul class="form-list">
            <li class="row">
                <div class="attr">
                    <span class="text">手机号码</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请输入手机号码">
                        <i class="icon">&#xe60c;</i>
                    </div>
                </div>
            </li>

            <li class="row">
                <div class="attr">
                    <span class="text">密码</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="password" placeholder="请输入密码">
                        <i class="icon">&#xe607;</i>
                    </div>
                </div>
            </li>

            <li class="row">
                <div class="attr">
                    <span class="text">验证码</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请输入验证码">
                        <time>60秒</time>
                        <button class="btn-code">发送短信</button>
                        <i class="icon">&#xe764;</i>
                    </div>
                </div>
            </li>
        </ul>

        <div class="tools">
            <button d2isabled class="btn-submit">登录</button>

            <div class="tips-wrap">
                <label>
                    <input type="checkbox" checked>
                    <span>记住密码</span>
                </label>
            </div>
        </div>

        <div class="other-way">
            <button class="way-item">授权微信登入</button>
            <button class="way-item">忘记密码</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        min-height: 100vh;
        background: #fff;
    }
    .header {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: .6rem 0 .3rem;
        text-align: center;
        color: #fff;
        background: url("../../assets/images/login-banner.jpg") no-repeat center bottom / 100% auto;

        .icon {
            @include iconfont;
            font-size: 1.5rem;
        }
        .name {
            margin-top: .2rem;
            font-size: .45rem;
        }
        .english {
            font-size: .19rem;
        }
    }
    .form-list {
        position: relative;
        background: #fff;
        user-select: none;

        .input-item {
            display: flex;
            align-items: baseline;

            input[type="text"],
            input[type="password"] {
                width: 0; height: .6rem;
                flex-grow: 1;
                border: none;
                -webkit-appearance: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #e1e1e1;
                }
            }
            .icon {
                @include iconfont;
                margin-left: .2rem;
                color: #999;
            }
            .btn-code {
                border: none;
                color: #2e7ae6;
                background: transparent;
            }
            time {
                color: #999;
            }
        }
        .row {
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
    .tools {
        margin: .3rem auto 0;
        padding: 0 .3rem;

        .btn-submit {
            display: block;
            width: 100%; height: 1rem;
            color: #fff;
            letter-spacing: .05rem;
            border: none;
            border-radius: .1rem;
            background: #2e7ae6;
            user-select: none;
            transition: all .3s;

            &:disabled {
                background: #ddd;
            }
            &:active {
                opacity: .7;
            }
        }
        .tips-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: .2rem;
            font-size: .24rem;
            color: #666;
        }
    }
    .other-way {
        position: fixed;
        left: 0; right: 0; bottom: .4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .way-item {
            position: relative;
            padding: .2rem;
            border: none;
            color: #2e7ae6;
            background: transparent;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: .3rem; bottom: .3rem;
                width: 1px;
                background: #eee;
            }
            &:first-child {
                &:before {
                    display: none;
                }
            }
        }
    }
</style>
