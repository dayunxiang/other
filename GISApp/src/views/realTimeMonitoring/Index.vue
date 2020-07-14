<template>
    <div class="component-content">
        <!-- 添加 【fold】类可以对信息进行 折叠哦 -->
        <dl class="panel-text-list">
            <dt>
                <p class="panel-tit">设备信息</p>

                <!-- 不要折叠按钮可以把这个代码删除 -->
                <button class="btn-switch"></button>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">设备名称：</span>
                    </div>

                    <div class="content">
                        <span class="value">西塘红旗桥下</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">设备类型：</span>
                    </div>

                    <div class="content">
                        <span class="value">电磁压力计</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">规格型号：</span>
                    </div>

                    <div class="content">
                        <span class="value">LDG-MIK</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">生产厂家：</span>
                    </div>

                    <div class="content">
                        <span class="value">杭州小米公司</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">所在区域：</span>
                    </div>

                    <div class="content">
                        <span class="value">阿里巴巴西湖区</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">环境状况：</span>
                    </div>

                    <div class="content">
                        <span class="value">良好</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">管理部门：</span>
                    </div>

                    <div class="content">
                        <span class="value">西塘营业所</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">管理人员：</span>
                    </div>

                    <div class="content">
                        <span class="value">前端吴彦祖</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">联系电话：</span>
                    </div>

                    <div class="content">
                        <a class="tel-item" href="tel:15949565123">
                            <i class="icon">&#xe62c;</i>
                            <span>15949565123</span>
                        </a>
                    </div>
                </div>
            </dd>
        </dl>

        <!-- 添加 【fold】类可以对信息进行 折叠哦 -->
        <dl class="panel-text-list">
            <dt>
                <p class="panel-tit">设备状态</p>

                <!-- 不要折叠按钮可以把这个代码删除 -->
                <button class="btn-switch"></button>
            </dt>

            <dd>
                <div class="text-item">
                    <div class="attr">
                        <span class="text">压力(MPa)：</span>
                    </div>

                    <div class="content">
                        <span class="value">5.22</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">状态描述：</span>
                    </div>

                    <div class="content">
                        <!--
                            normal： 正常
                            warning：警告
                            dangerous： 危险的
                         -->
                        <span class="value warning">通讯异常</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">压力(MPa)：</span>
                    </div>

                    <div class="content">
                        <span class="value">4.34</span>
                    </div>
                </div>

                <div class="text-item">
                    <div class="attr">
                        <span class="text">今日最低(MPa)：</span>
                    </div>

                    <div class="content">
                        <span class="value">2.5</span>
                    </div>
                </div>
            </dd>
        </dl>

        <dl class="panel-item image-preview">
            <dt>
                <p class="panel-tit">设备图片</p>

                <!-- 不要链接的话，可以把这个标签删除 -->
                <a class="link" href="#">
                    <i>&#xe62b;</i>
                </a>
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
    </div>
</template>

<script>
    import Zooming from 'zooming';

    export default {
        name: 'RealTimeMonitoring',
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
    .panel-text-list {
        @include panelTextList;

        .tel-item {
            color: #2e7ae6;

            .icon {
                @include iconfont;
            }
        }
        .normal {
            font-weight: bold;
            color: #2d8cf0;
        }
        .warning {
            font-weight: bold;
            color: #f90;
        }
        .dangerous {
            font-weight: bold;
            color: #ed4014;
        }
    }
    .image-preview {
        @include panelItem;

        dd {
            @include previewList;
        }
    }
</style>
