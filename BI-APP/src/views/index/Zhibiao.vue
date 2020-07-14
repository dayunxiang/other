<template>
    <div class="component-content">
        <div class="filter-wrap">
            <van-dropdown-menu>
                <van-dropdown-item v-model="filterValue1" :options="filter1" />
                <van-dropdown-item v-model="filterValue2" :options="filter2" />
                <van-dropdown-item v-model="filterValue3" :options="filter3" />
                <van-dropdown-item v-model="filterValue4" :options="filter4" />
            </van-dropdown-menu>

            <time>2020-05-23</time>
        </div>

        <dl class="search-result">
            <dd>
                <i style="color: #009933;" class="icon">&#xe64e;</i>

                <div class="text-wrap">
                    <p class="title">[月]产销差量(万m³)</p>

                    <div class="attr-value">
                        <div class="item up">
                            <span class="attr">同:</span>
                            <span class="value">5%↑</span>
                        </div>

                        <div class="item down">
                            <span class="attr">环:</span>
                            <span class="value">5%↓</span>
                        </div>
                    </div>
                </div>

                <span>32.0</span>
            </dd>
            <dd>
                <i style="color: #009933;" class="icon">&#xe64e;</i>

                <div class="text-wrap">
                    <p class="title">[月]产销差量(万m³)</p>

                    <div class="attr-value">
                        <div class="item up">
                            <span class="attr">同:</span>
                            <span class="value">5%↑</span>
                        </div>

                        <div class="item down">
                            <span class="attr">环:</span>
                            <span class="value">5%↓</span>
                        </div>
                    </div>
                </div>

                <span>32.0</span>
            </dd>
        </dl>

        <van-popup v-model="show" position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                filterValue1: 0,
                filterValue2: 0,
                filterValue3: 0,
                filterValue4: 0,
                filter1: [
                    { text: '业务', value: 0 },
                    { text: '业务', value: 1 },
                ],
                filter2: [
                    { text: '类型', value: 0 },
                    { text: '类型', value: 1 },
                ],
                filter3: [
                    { text: '主体', value: 0 },
                    { text: '主体', value: 1 },
                ],
                filter4: [
                    { text: '周期', value: 0 },
                    { text: '周期', value: 1 },
                ],

                show: true,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
            };
        },
        methods: {
            //
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        min-height: 100vh;
        background: #f4f6f6;
    }
    .filter-wrap {
        display: flex;
        align-items: center;
        background: #fff;

        ::v-deep .van-dropdown-menu__bar {
            box-shadow: none;
        }
        .van-dropdown-menu {
            width: 0;
            flex-grow: 1;
        }
        time {
            padding: .1rem;
            color: #555;

            &:after {
                @include iconfont;
                margin-left: .1rem;
                content: "\e626";
            }
        }
    }
    .search-result {
        margin-top: .2rem;

        dt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .2rem .3rem .2rem;

            .title {
                color: #666;
            }
        }
        dd {
            @include thinLine($useBefore: true, $position: 'bottom', $backgroundColor: #eee, $top: 0, $right: .3rem, $bottom: 0, $left: .3rem);
            display: flex;
            align-items: center;
            padding: .3rem;
            background: #fff;
            transition: all .3s;

            &:active {
                background: #f3f3f3;
            }
            .icon {
                @include iconfont;
                font-size: .5rem;
            }
            .text-wrap {
                width: 0;
                flex-grow: 1;
                margin: 0 .3rem;

                .title {
                    @include textEllipsis($type: 'multipleRows', $row: 1);
                    margin-bottom: .1rem;
                    font-size: .3rem;
                    color: #333;
                }
                .attr-value {
                    display: flex;
                    align-items: center;

                    .item {
                        margin-right: .2rem;

                        &.up {
                            .value {
                                color: #f90;
                            }
                        }
                        &.down {
                            .value {
                                color: #009933;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
