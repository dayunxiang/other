<template>
    <div class="map-layer">
        <dl class="map-type">
            <dt>
                <p class="panel-tit">地图类型</p>
            </dt>

            <dd>
                <button class="btn-type curr">
                    <img src="@/assets/images/demo-lijun.png" />
                    <span>2D平面图</span>
                </button>

                <button class="btn-type">
                    <img src="@/assets/images/demo-lijun.png" />
                    <span>卫星图</span>
                </button>
            </dd>
        </dl>

        <dl class="layer-config">
            <dt>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水图层</span>

                <mt-switch></mt-switch>
            </dt>

            <dd v-for="n in 5" :key="n">
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水管线</span>

                <mt-switch></mt-switch>
            </dd>
        </dl>

        <dl class="layer-config">
            <dt>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水图层</span>

                <mt-switch></mt-switch>
            </dt>

            <dd>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水管线</span>

                <mt-switch></mt-switch>
            </dd>

            <dd>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水管线</span>

                <mt-switch></mt-switch>
            </dd>

            <dd>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水管线</span>

                <mt-switch></mt-switch>
            </dd>

            <dd>
                <i class="icon">&#xe74c;</i>
                <span class="name">雨水管线</span>

                <mt-switch></mt-switch>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'MapLayer',
    };
</script>

<style lang="scss" scoped>
    .map-layer {
        position: relative;
        user-select: none;
    }
    .map-type {
        @include panelItem;

        dd {
            display: flex;
            align-items: center;

            .btn-type {
                width: 0;
                flex-grow: 1;
                border: none;
                background: transparent;

                & + .btn-type {
                    margin-left: .2rem;
                }
                &.curr {
                    img {
                        border-color: #2e7ae6;
                    }
                    span {
                        font-weight: bold;
                        color: #2e7ae6;
                    }
                }
                img {
                    width: 100%;
                    height: 1.5rem;
                    border: 1px solid transparent;
                    object-fit: cover;
                    transition: all .2s;
                }
                span {
                    margin-top: .1rem;
                    font-size: .24rem;
                    color: #555;
                    transition: all .2s;
                }
            }
        }
    }
    .layer-config {
        margin-top: .3rem;
        background: #fff;

        dt,
        dd {
            display: flex;
            align-items: center;
            padding: .1rem .3rem;
            transition: all .2s;

            &:active {
                background: #eee;
            }
            .icon {
                @include iconfont;
            }
            .name {
                margin: 0 .1rem;
                width: 0;
                flex-grow: 1;
            }
        }
        dt {
            @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: 0,$left: 0);
        }
        dd {
            @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: .3rem,$left: .3rem);
        }
    }
</style>
