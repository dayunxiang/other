<template>
    <div class="event-search">
        <ul class="info-list">
            <li class="info-item">
                <div class="attr">
                    <span class="text">事件编号：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请输入事件编号">
                        <!-- <i class="icon">&#xe626;</i> -->
                    </div>
                </div>
            </li>

            <li class="info-item">
                <div class="attr">
                    <span class="text">事件类型：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <select>
                            <option value="1">选项1</option>
                            <option value="2">选项2</option>
                            <option value="3">选项3</option>
                            <option value="4">选项4</option>
                        </select>

                        <i class="icon">&#xe60d;</i>
                    </div>
                </div>
            </li>

            <li class="info-item">
                <div class="attr">
                    <span class="text">上报人员：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请选择上报人员">
                        <i class="icon">&#xe677;</i>
                    </div>
                </div>
            </li>

            <li class="info-item">
                <div class="attr">
                    <span class="text">上报时间：</span>
                </div>

                <div class="content">
                    <div class="input-item">
                        <input type="text" placeholder="请选择上报时间">
                        <i class="icon">&#xe61e;</i>
                    </div>
                </div>
            </li>
        </ul>

        <div class="tools">
            <button disabled class="btn-submit">搜索</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventSearch',
    };
</script>

<style lang="scss" scoped>
    .event-search {
        position: relative;
    }
    .info-list {
        position: relative;
        background: #fff;
        user-select: none;

        .input-item {
            display: flex;
            align-items: baseline;

            select,
            textarea,
            input[type="text"],
            input[type="password"] {
                width: 0;
                flex-grow: 1;
                border: none;
                -webkit-appearance: none;
                background: transparent;

                &::-webkit-input-placeholder {
                    color: #e1e1e1;
                }
            }

            input[type="text"],
            input[type="password"] {
                height: .6rem;
            }
            .icon {
                @include iconfont;
                margin-left: .2rem;
                color: #999;
            }
        }
        .info-item {
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
    .tools {
        margin: .3rem .3rem 0;

        .btn-submit {
            display: block;
            width: 100%; height: 1rem;
            color: #fff;
            letter-spacing: .05rem;
            border: none;
            border-radius: .1rem;
            background: #2e7ae6;
            user-select: none;
            font-size: .3rem;
            transition: all .3s;

            &:disabled {
                background: #ddd;
            }
            &:active {
                opacity: .7;
            }
        }
    }
</style>
