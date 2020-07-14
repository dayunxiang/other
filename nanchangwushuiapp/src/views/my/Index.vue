<template>
    <div class="component-content">
        <header class="header">
            <div class="user-image-wrap">
                <img class="user-image" src="https://cdn.weipaitang.com/banner/2020030497e790cd-31fb-0255-7a02-cf85f4357723-W1125H450" />
            </div>

            <div class="user-text">
                <p class="user-name">前端吴彦祖</p>
                <p class="user-phone">15949565123</p>
            </div>
        </header>

        <ul class="nav-list">
            <li>
                <i style="color: #3e84e8" class="icon type">&#xe604;</i>
                <p class="text">我的资料</p>
                <i class="icon arrow">&#xe62b;</i>
            </li>

            <li>
                <i style="color: #1da44b" class="icon type">&#xe607;</i>
                <p class="text">修改密码</p>
                <i class="icon arrow">&#xe62b;</i>
            </li>

            <li>
                <i style="color: #f90" class="icon type">&#xe64c;</i>
                <p class="text">意见反馈</p>
                <i class="icon arrow">&#xe62b;</i>
            </li>

            <li>
                <i style="color: #009bdb" class="icon type">&#xe701;</i>
                <p class="text">关于</p>
                <i class="icon arrow">&#xe62b;</i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'My',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem 0;
        background: #2e7ae6;

        .user-image-wrap {
            width: 1.3rem; height: 1.3rem;
            border-radius: 50%;
            overflow: hidden;

            .user-image {
                display: block;
                width: 100%; height: 100%;
                object-fit: cover;
            }
        }
        .user-text {
            margin-left: .2rem;
            color: #fff;
            text-align: center;

            .user-name {
                font-size: .4rem;
            }
            .user-phone {
                margin-top: .05rem;
                font-size: .3rem;
            }
        }
    }
    .nav-list {
        margin-top: .3rem;
        user-select: none;

        li {
            position: relative;
            display: flex;
            align-items: center;
            padding: .25rem .3rem;
            transition: all 0.2s;

            &:after {
                position: absolute;
                content: "";
                left: .3rem; right: .3rem; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
            &:active {
                background: #eee;
            }
            .icon {
                @include iconfont;

                &.type {
                    font-size: .4rem;
                }
                &.arrow {
                    font-size: .2rem;
                    color: #ddd;
                }
            }
            .text {
                margin: 0 .15rem;
                width: 0;
                flex-grow: 1;
            }
        }
    }
</style>
