<template>
    <div class="alarm-log">
        <!--
            我看设计稿这边有一个时间范围，
            不晓得是不是提示用的
            如果是的话，我觉得用弹窗tips就好
            或者是弄个时间范围筛选
         -->

        <mt-loadmore>
            <!--
                banjie  caogao chulizhong
                cuiban  yanqi
            -->
            <dl v-for="n in 15" :key="n" class="project-item chulizhong">
                <dt>压力告警</dt>

                <dd>
                    <p class="attr">告警原因：</p>
                    <p class="value">压力值超过阈值</p>
                </dd>

                <dd>
                    <p class="attr">告警ID：</p>
                    <p class="value">123456787</p>
                </dd>

                <dd>
                    <p class="attr">告警时间：</p>
                    <p class="value">2020-06-23 23:12:56</p>
                </dd>

                <dd>
                    <p class="attr">管理部门：</p>
                    <p class="value">西塘营业所</p>
                </dd>

                <dd>
                    <p class="attr">管理人员：</p>
                    <p class="value">前端吴彦祖</p>
                </dd>

                <dd>
                    <p class="attr">联系电话：</p>
                    <p class="value">
                        <a class="tel-item" href="tel:15949565123">
                            <i class="icon">&#xe62c;</i>
                            <span>15949565123</span>
                        </a>
                    </p>
                </dd>
            </dl>
        </mt-loadmore>
    </div>
</template>

<script>
    export default {
        name: 'AlarmLog',
    };
</script>

<style lang="scss" scoped>
    .alarm-log {
        position: relative;
        padding-bottom: 1.4rem;
        min-height: 100vh;
        background: #f4f6f6;
        user-select: none;
    }
    .project-item {
        position: relative;
        margin-top: .2rem;
        padding: .3rem;
        background: #fff;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);

        &:after {
            @include iconfont;
            position: absolute;
            right: 0; top: 0;
            font-size: 1rem;
            color: #2e7ae6;
        }
        &.banjie:after {
            content: "\e64d";
            color: #207245;
        }
        &.caogao:after {
            content: "\e64f";
            color: #ddd;
        }
        &.chulizhong:after {
            content: "\e650";
        }
        &.cuiban:after {
            content: "\e651";
            color: #f90;
        }
        &.yanqi:after {
            content: "\e648";
            color: red;
        }
        &:first-child {
            margin-top: 0;
        }
        dt {
            position: relative;
            padding: 0 0 .2rem .2rem;
            margin-bottom: .2rem;
            font-weight: bold;

            &:before {
                position: absolute;
                content: "";
                left: 0; top: .05rem; bottom: .25rem;
                width: .05rem;
                background: #2e7ae6;
            }
            &:after {
                position: absolute;
                content: "";
                left: 0; right: 0; bottom: 0;
                height: 1px;
                background: #eee;
                transform: scale(1, .5);
            }
        }
        dd {
            display: flex;
            align-items: center;
            padding: .05rem 0;

            .tel-item {
                color: #2e7ae6;

                .icon {
                    @include iconfont;
                }
            }
            .attr {
                min-width: 5em;
                color: #999;
            }
            .value {
                color: #555;
            }
        }
    }
</style>
