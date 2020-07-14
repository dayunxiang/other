<template>
    <div class="component-content">
        <div class="p-top-header">
            <header>
                <button class="btn-tool">&#xe615;</button>
                <p class="title">页面标题</p>

                <div class="custom-dom">
                    <div class="custom-select">
                        <span class="text">菜单文案</span>
                        <i class="icon">&#xe60d;</i>

                        <select>
                            <option value="">选项1</option>
                            <option value="">选项2</option>
                            <option value="">选项3</option>
                        </select>
                    </div>
                </div>
            </header>

            <div class="fix-bug-height"></div>
        </div>

        <div class="facilities-list">
            <div class="facilities-item">
                <i class="icon">&#xe66a;</i>
                <span class="name">道路</span>
            </div>

            <div class="facilities-item">
                <i class="icon">&#xe637;</i>
                <span class="name">管点</span>
            </div>

            <div class="facilities-item">
                <i class="icon">&#xe634;</i>
                <span class="name">管线</span>
            </div>

            <div class="facilities-item">
                <i class="icon">&#xe657;</i>
                <span class="name">闸阀</span>
            </div>

            <div class="facilities-item">
                <i class="icon">&#xe81b;</i>
                <span class="name">消防栓</span>
            </div>
        </div>

        <Hydrant></Hydrant>
        <Hydrant></Hydrant>
    </div>
</template>

<script>
    import Hydrant from '@/components/Hydrant';
    import Zooming from 'zooming';

    export default {
        name: 'NearbyFacilities',
        components: {
            Hydrant // 消防栓组件
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
    .p-top-header {
        header {
            z-index: 5;
            position: fixed;
            left: 0; top: 0; right: 0;
            display: flex;
            align-items: center;
            margin: 0 auto;
            padding: 0 .2rem;
            max-width: 7.5rem;
            height: 1rem;
            color: #fff;
            background: #2e7ae6;
            overflow: hidden;

            .btn-tool {
                @include iconfont;
                font-size: .4rem;
                border: none;
                background: transparent;
                transition: all .2s;

                &:active {
                    opacity: .7;
                }
            }
            .title {
                @include textEllipsis($type: 'multipleRows', $row: 1);
                width: 0;
                flex-grow: 1;
                margin: 0 .2rem;
                font-size: .3rem;
                text-align: center;
            }
            .custom-dom {
                position: relative;
            }
            .custom-select {
                * {
                    -webkit-appearance: none;
                }
                select {
                    z-index: 5;
                    position: absolute;
                    left: 0; top: 0;
                    width: 100%; height: 100%;
                    opacity: 0;
                }
                .text {
                }
                .icon {
                    @include iconfont;
                    margin-left: .1rem;
                    font-size: .2rem;
                }
            }
        }
        .fix-bug-height {
            height: 1rem;
        }
    }
    .component-content {
        position: relative;
        padding-bottom: .6rem;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .facilities-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        user-select: none;
        background: #fff;

        .facilities-item {
            flex-basis: 20%;
            padding: .2rem;
            text-align: center;
            white-space: nowrap;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            .icon {
                @include iconfont;
                font-size: .4rem;
            }
            .name {
                display: block;
                margin-top: .1rem;
            }
        }
    }
</style>
