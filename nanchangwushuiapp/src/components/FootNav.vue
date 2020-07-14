<template>
    <mt-tabbar v-model="tabbarSelected" :fixed="true">
        <mt-tab-item id="tab1" class="tab-item">
            <i slot="icon" class="icon"></i>
            <p>首页</p>
        </mt-tab-item>

        <mt-tab-item id="tab2" class="tab-item">
            <i slot="icon" class="icon"></i>
            <p>所有水厂</p>
        </mt-tab-item>

        <mt-tab-item id="tab3" class="tab-item">
            <i slot="icon" class="icon"></i>
            <p>异常报警</p>
        </mt-tab-item>

        <mt-tab-item id="tab4" class="tab-item">
            <i slot="icon" class="icon"></i>
            <p>设备巡检</p>
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default {
        name: "FootNav",
        data() {
            return {
                tabbarSelected: 'tab3'
            };
        }
    };
</script>

<style lang="scss" scoped>
    .tab-item {
        &:nth-child(1) {
            &.is-selected {
                .icon {
                    &:before {
                        content: "\e683";
                    }
                }
            }
            .icon {
                &:before {
                    content: "\e64e";
                }
            }
        }
        &:nth-child(2) {
            &.is-selected {
                .icon {
                    &:before {
                        content: "\e683";
                    }
                }
            }
            .icon {
                &:before {
                    content: "\e64e";
                }
            }
        }
        &:nth-child(3) {
            &.is-selected {
                .icon {
                    &:before {
                        content: "\e683";
                    }
                }
            }
            .icon {
                &:before {
                    content: "\e64e";
                }
            }
        }
        &:nth-child(4) {
            &.is-selected {
                .icon {
                    &:before {
                        content: "\e683";
                    }
                }
            }
            .icon {
                &:before {
                    content: "\e64e";
                }
            }
        }
        .mint-tab-item-icon {
            margin: 0
        }
        .icon {
            @include iconfont;
            display: block;
            margin: 0 auto;
            width: auto; height: auto;
            font-size: .4rem;
        }
    }
</style>
