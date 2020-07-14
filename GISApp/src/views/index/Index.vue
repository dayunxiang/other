<template>
    <div class="component-content">
        <div class="search-wrap">
            <div class="search-item">
                <i class="icon">&#xe677;</i>
                <input placeholder="请输入关键字搜索..." type="text">
            </div>
        </div>

        <div class="map"></div>

        <aside class="tools top-right">
            <div @click="showMapLayerDialog" class="tool-item">
                <i class="icon">&#xe617;</i>
                <span class="name">图层</span>
            </div>

            <div @click="showDistanceDialog" class="tool-item">
                <i class="icon">&#xe6c3;</i>
                <span class="name">距离</span>
            </div>

            <div @click="showAreaDialog" class="tool-item">
                <i class="icon">&#xe7ef;</i>
                <span class="name">面积</span>
            </div>

            <div @click="showGridDialog" class="tool-item">
                <i class="icon">&#xe824;</i>
                <span class="name">坐标</span>
            </div>

            <div @click="showSelectionFrameDialog" class="tool-item">
                <i class="icon">&#xe625;</i>
                <span class="name">选框</span>
            </div>

            <div class="tool-item">
                <i class="icon">&#xe612;</i>
                <span class="name">上报</span>
            </div>

            <div class="tool-item">
                <i class="icon">&#xe67f;</i>
                <span class="name">分析</span>
            </div>
        </aside>

        <aside class="tools left-bottom">
            <div @click="showLocationDialog" class="tool-item">
                <i class="icon">&#xe6a9;</i>
            </div>
        </aside>

        <aside class="tools right-bottom">
            <div class="tool-item">
                <i class="icon">&#xe613;</i>
            </div>

            <div class="tool-item">
                <i class="icon">&#xe675;</i>
            </div>
        </aside>

        <div class="foot-nav">
            <div class="nav-item select">
                <i class="icon i-select">&#xe683;</i>
                <i class="icon i-unselected">&#xe64e;</i>
                <span class="name">首页</span>
            </div>

            <div class="nav-item">
                <i class="icon i-select">&#xe621;</i>
                <i class="icon i-unselected">&#xe601;</i>
                <span class="name">附近</span>
            </div>

            <div class="nav-item">
                <i class="icon i-select">&#xe60f;</i>
                <i class="icon i-unselected">&#xe72b;</i>
                <span class="name">实时监控</span>
            </div>

            <div class="nav-item">
                <i class="icon i-select">&#xe606;</i>
                <i class="icon i-unselected">&#xe62e;</i>
                <span class="name">DMA分区</span>
            </div>
        </div>

        <!-- 消防栓 -->
        <mt-popup
            v-model="hydrantDialogVisible"
            position="bottom"
            :modal="false"
            class="hydrant-popup"
        >
            <!--
                建议这边不要进行图片预览功能
                因为这个插件的预览效果是直接把原图DOM放大
                但是这个容器窗口有高度限制，
                这样就导致没办法超出高度
             -->
            <Hydrant></Hydrant>
        </mt-popup>

        <!-- 当前位置 -->
        <mt-popup
            v-model="locationDialogVisible"
            position="bottom"
            :modal="false"
            class="location-popup"
        >
            <CurrentLocation @on-close="hideLocationDialog"></CurrentLocation>
        </mt-popup>

        <!-- 距离 -->
        <mt-popup
            v-model="distanceDialogVisible"
            position="bottom"
            :modal="false"
            class="distance-popup"
        >
            <Distance @on-close="hideDistanceDialog"></Distance>
        </mt-popup>

        <!-- 面积 -->
        <mt-popup
            v-model="areaDialogVisible"
            position="bottom"
            :modal="false"
            class="area-popup"
        >
            <c-area @on-close="hideAreaDialog"></c-area>
        </mt-popup>

        <!-- 坐标 -->
        <mt-popup
            v-model="gridDialogVisible"
            position="center"
            :modal="true"
        >
            <div class="grid-dialog">
                <p class="title">请输入坐标</p>

                <div class="row">
                    <div class="input-item">
                        <span>X：</span>
                        <input type="text">
                    </div>

                    <div class="input-item">
                        <span>Y：</span>
                        <input type="text">
                    </div>
                </div>

                <div class="edit-wrap">
                    <button @click="hideGridDialog" class="btn-cancel">取消</button>
                    <button class="btn-confirm">定位</button>
                </div>
            </div>
        </mt-popup>

        <!-- 图层 -->
        <mt-popup
            v-model="mapLayerDialogVisible"
            position="right"
            :modal="true"
            class="map-layer-popup"
        >
            <MapLayer></MapLayer>
        </mt-popup>

        <!-- 选框 -->
        <mt-popup
            v-model="selectionFrameDialogVisible"
            position="bottom"
            :modal="false"
            class="selection-frame-popup"
        >
            <SelectionFrame @on-close="hideSelectionFrameDialog"></SelectionFrame>
        </mt-popup>

        <!-- 实时监控 -->
        <mt-popup
            v-model="monitorDialogVisible"
            position="bottom"
            :modal="false"
            class="monitor-popup"
        >
            <Monitor @on-close="hideMonitorDialog"></Monitor>
        </mt-popup>

        <!-- 实时监控 -->
        <mt-popup
            v-model="partitionDialogVisible"
            position="bottom"
            :modal="false"
            class="partition-popup"
        >
            <Partition @on-close="hidePartitionDialog"></Partition>
        </mt-popup>
    </div>
</template>

<script>
    import Hydrant from '@/components/Hydrant';
    import CurrentLocation from './CurrentLocation';
    import MapLayer from './MapLayer';
    import Distance from './Distance';
    import CArea from './Area'; // Area 是原生html标签的名称，为了不一样，加了个C
    import SelectionFrame from './SelectionFrame';
    import Monitor from './Monitor';
    import Partition from './Partition';

    export default {
        name: "Index",
        components: {
            Hydrant, // 消防栓组件
            CurrentLocation, // 当前位置
            MapLayer, // 图层
            Distance, // 距离
            CArea, // 面积
            SelectionFrame, // 选框
            Monitor, // 实时监控
            Partition // DMA分区
        },
        data() {
            return {
                hydrantDialogVisible: false, // 消防栓弹窗 是否可见
                gridDialogVisible: false, // 坐标弹窗 是否可见
                locationDialogVisible: false, // 当前位置弹窗 是否可见
                mapLayerDialogVisible: false, // 图层弹窗 是否可见
                distanceDialogVisible: false, // 距离弹窗 是否可见
                areaDialogVisible: false, // 面积弹窗 是否可见
                selectionFrameDialogVisible: false, // 选框弹窗 是否可见
                monitorDialogVisible: true, // 实时监控弹窗 是否可见
                partitionDialogVisible: true // DMA分区弹窗 是否可见
            };
        },
        methods: {
            showGridDialog() {
                this.gridDialogVisible = true;
            },
            hideGridDialog() {
                this.gridDialogVisible = false;
            },
            showLocationDialog() {
                this.locationDialogVisible = true;
            },
            hideLocationDialog() {
                this.locationDialogVisible = false;
            },
            showMapLayerDialog() {
                this.mapLayerDialogVisible = true;
            },
            showDistanceDialog() {
                this.distanceDialogVisible = true;
            },
            hideDistanceDialog() {
                this.distanceDialogVisible = false;
            },
            showAreaDialog() {
                this.areaDialogVisible = true;
            },
            hideAreaDialog() {
                this.areaDialogVisible = false;
            },
            showSelectionFrameDialog() {
                this.selectionFrameDialogVisible = true;
            },
            hideSelectionFrameDialog() {
                this.selectionFrameDialogVisible = false;
            },
            hideMonitorDialog() {
                this.monitorDialogVisible = false;
            },
            hidePartitionDialog() {
                this.partitionDialogVisible = false;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .search-wrap {
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        background: #2e7ae6;

        .search-item {
            display: flex;
            align-items: center;
            flex-grow: 1;
            padding: 0 .2rem;
            border-radius: .08rem;
            background: #fff;

            .icon {
                @include iconfont;
                color: #999;
            }
            input[type="text"] {
                padding: 0 .2rem;
                width: 0;
                flex-grow: 1;
                height: .6rem;
                border: none;
                background: transparent;
            }
        }
    }
    .map {
        height: 0;
        flex-grow: 1;
        background: #eee;
    }
    .tools {
        z-index: 5;
        position: absolute;
        border-radius: .08rem;
        background: #fff;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
        user-select: none;

        &.top-right {
            right: .3rem; top: 1.2rem;
        }
        &.left-bottom {
            left: .3rem; bottom: 1.5rem;
        }
        &.right-bottom {
            right: .3rem; bottom: 1.5rem;
        }
        .tool-item {
            @include thinLine($useBefore: true, $position: 'top', $backgroundColor: #eee,$top: 0, $right: 0,$left: 0);
            padding: .15rem .2rem;
            text-align: center;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            .icon {
                @include iconfont;
                font-size: .4rem;
                color: #666;
            }
            .name {
                display: block;
                margin-top: .05rem;
                font-size: .20rem;
            }
        }
    }
    .foot-nav {
        z-index: 5;
        @include thinLine($useBefore: true, $position: 'top', $backgroundColor: #eee,$top: 0, $right: 0,$left: 0);
        display: flex;
        align-items: center;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
        user-select: none;
        background: #fff;

        .nav-item {
            padding: .2rem .3rem;
            width: 0;
            flex-grow: 1;
            text-align: center;
            white-space:nowrap;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            &.select {
                color: #2e7ae6;

                .icon {
                    &.i-select {
                        display: block;
                    }
                    &.i-unselected {
                        display: none;
                    }
                }
            }
            .icon {
                @include iconfont;
                font-size: .4rem;

                &.i-select {
                    display: none;
                }
                &.i-unselected {
                    display: block;
                }
            }
            .name {
                display: block;
                margin-top: .05rem;
            }
        }
    }

    .mint-popup-center {
        border-radius: .1rem;
        overflow: hidden;
    }

    .grid-dialog {
        width: 6rem;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
        user-select: none;

        .title {
            padding: .2rem .3rem;
            font-weight: bold;
        }
        .row {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .3rem 0;

            .input-item {
                display: flex;
                align-items: center;

                & + .input-item {
                    margin-left: 1rem;
                }
                input {
                    padding: 0 .2rem;
                    width: 6em; height: .6rem;
                    border: 1px solid #ddd;
                    border-radius: .08rem;
                    transition: all .2s;
                    -webkit-appearance: none;

                    &:focus {
                        border-color: #2e7ae6;
                    }
                }
            }
        }
        .edit-wrap {
            @include thinLine($useBefore: true, $position: 'top', $backgroundColor: #eee,$top: 0, $right: 0,$left: 0);
            display: flex;
            align-items: center;

            button {
                @include thinLine($useBefore: true, $position: 'left', $backgroundColor: #eee,$top: 0, $bottom: 0,$left: 0);
                padding: .3rem 0;
                width: 0;
                flex-grow: 1;
                border: none;
                background: transparent;
                transition: all .2s;

                &:active {
                    background: #eee;
                }
                &.btn-confirm {
                    color: #2e7ae6;
                }
            }
        }
    }

    .hydrant-popup {
        padding-bottom: .6rem;
        width: 100%;

        ::v-deep dd {
            max-height: 60vh;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
    }
    .map-layer-popup {
        width: 60vw; height: 100vh;
        background-color: #f4f6f6;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
        overflow-y: scroll;
    }
    .location-popup,
    .distance-popup,
    .area-popup,
    .selection-frame-popup,
    .monitor-popup,
    .partition-popup {
        width: 100%;
        border-top: 1px solid #ddd;
        box-shadow: 0 0.05rem 0.15rem 0 rgba(27, 27, 78, 0.1);
    }
</style>
