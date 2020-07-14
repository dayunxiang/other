<template>
    <div class="component-content">
        <header class="header">
            <i class="icon">&#xe660;</i>
            <p class="tips">修改密码后，即可进入主页</p>
        </header>

        <div class="tips-wrap">
            <p class="tips">前端吴彦祖，您好</p>
            <p class="tips">为了个人信息数据安全，请先修改密码！</p>
        </div>

        <ul class="form-list">
            <li class="row">
                <div class="attr">
                    <span class="text">新密码</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="password" placeholder="请输入您的新密码">
                    </div>
                </div>
            </li>

            <li class="row">
                <div class="attr">
                    <span class="text">确认密码</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="password" placeholder="请再次输入您的新密码">
                    </div>
                </div>
            </li>

            <li class="row">
                <button class="btn-submit">保存并进入主页</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ChangePassword',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
    .header {
        padding: .8rem 0 .4rem;
        text-align: center;
        color: #fff;
        background: #2e7ae6;

        .icon {
            @include iconfont;
            font-size: 1.5rem;
        }
        .tips {
            margin-top: .4rem;
            font-size: .24rem;
        }
    }
    .tips-wrap {
        padding: .2rem .3rem;

        .tips {
            padding: .05rem 0;
            color: #666;
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
                width: 0;
                height: .6rem;
                flex-grow: 1;
                border: none;
                -webkit-appearance: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #e1e1e1;
                }
            }
        }
        .btn-submit {
            display: block;
            width: 100%;
            height: 1rem;
            font-size: .35rem;
            color: #fff;
            letter-spacing: .05rem;
            border: none;
            border-radius: .1rem;
            background: #2e7ae6;
            transition: all .3s;

            &:active {
                opacity: .7;
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
</style>
