<template>
    <div class="component-content">
        <div class="search-wrap">
            <div class="search-item">
                <i class="icon">&#xe677;</i>
                <input placeholder="请输入关键字搜索..." type="text">
            </div>

            <button class="btn-search">搜索</button>
        </div>

        <!-- <dl class="search-history">
            <dt>
                <p class="title">搜索历史</p>
                <button class="btn-del">&#xe604;</button>
            </dt>

            <dd>
                <span class="search-item">丽园姐是怎么那么漂亮的</span>
                <span class="search-item">前端吴彦祖咋么那么穷</span>
                <span class="search-item">丽园姐是怎么那么漂亮的</span>
                <span class="search-item">如何暴富</span>
                <span class="search-item">前端吴彦祖咋么那么穷</span>
                <span class="search-item">丽园姐是怎么那么漂亮的</span>
                <span class="search-item">如何暴富</span>
                <span class="search-item">前端吴彦祖咋么那么穷</span>
            </dd>
        </dl> -->

        <dl class="search-filter">
            <dt>
                <p class="title">搜索过滤</p>
            </dt>

            <dd>
                <span class="search-item active">全部</span>
                <span class="search-item">地址</span>
                <span class="search-item">道路</span>
                <span class="search-item">管点</span>
                <span class="search-item">管线</span>
                <span class="search-item">闸阀</span>
                <span class="search-item">消防栓</span>
            </dd>
        </dl>

        <!--
            和最近搜索排版互斥
         -->
        <ul class="search-result">
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
            <li>好困，想睡觉，特么还要补搜索页面</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Search',
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        padding-top: 1rem;
    }
    .search-wrap {
        position: fixed;
        left: 0; top: 0; right: 0;
        display: flex;
        align-items: center;
        padding: .2rem .3rem;
        padding-right: 0;
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
        .btn-search {
            padding: 0 .2rem;
            font-size: .35rem;
            color: #fff;
            border: none;
            background: transparent;
        }
    }
    .search-history,
    .search-filter {
        user-select: none;

        dt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .2rem .3rem;

            .title {
                font-size: .3rem;
            }
            .btn-del {
                @include iconfont;
                font-size: .4rem;
                color: #AB3B3A;
            }
        }
        dd {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0.3rem;

            .search-item {
                margin-right: 0.2rem;
                margin-bottom: 0.2rem;
                padding: 0 0.2rem;
                height:0.6rem;
                line-height: 0.6rem;
                border-radius:0.08rem;
                font-size: .28rem;
                color: #666;
                max-width: 6em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                background:rgba(244,246,246,1);
                transition: all .2s;

                &.active {
                    color: #fff;
                    background: #2e7ae6;
                }
                &:active {
                    opacity: .7;
                }
            }
        }
    }
    .search-result {
        li {
            @include thinLine($useBefore: false, $position: 'bottom', $backgroundColor: #eee,$bottom: 0, $right: .3rem,$left: .3rem);
            padding: .2rem .3rem;
            padding-left: .8rem;
            color: #666;
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            &:before {
                @include iconfont;
                position: absolute;
                content: "\e677";
                left: .3rem; top: 50%;
                color: #999;
                transform: translate(0, -50%);
            }
        }
    }
</style>
