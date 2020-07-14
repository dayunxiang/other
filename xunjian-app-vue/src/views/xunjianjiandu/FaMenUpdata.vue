<template>
    <dl class="fa-men-updata">
        <dt>
            <p class="panel-tit">阀门状态更新</p>

            <button @click="onClose" class="btn-close">
                <i class="icon">&#xe61a;</i>
            </button>
        </dt>

        <dd>
            <div class="attr">阀门状态：</div>
            <div class="content">
                <div class="state normal">
                    <i></i>
                    <span>正常</span>
                </div>

                <div class="state warning">
                    <i></i>
                    <span>异常</span>
                </div>
            </div>
        </dd>

        <dd>
            <div class="attr">阀门状态：</div>
            <div class="content">
                <mt-switch v-model="value"></mt-switch>
            </div>
        </dd>

        <dd>
            <div class="attr">阀门转数：</div>
            <div class="content">
                <div class="step-item">
                    <button class="btn">&#xe71f;</button>
                    <input value="1" type="text">
                    <button class="btn">&#xe615;</button>
                </div>
            </div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'FaMenUpdata',
        methods: {
            onClose() {
                this.$emit('on-close');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .fa-men-updata {
        @include panelItem;
        position: relative;
        padding-bottom: .6rem;
        user-select: none;

        dd {
            display: flex;
            align-items: center;
            padding: .1rem .3rem;
        }
        .step-item {
            display: flex;
            align-items: center;

            input {
                margin: 0 .2rem;
                width: 5em; height: .6rem;
                border: 1px solid #eee;
                border-radius: .08rem;
                text-align: center;
                -webkit-appearance: none;
            }
            .btn {
                @include iconfont;
                border: none;
                font-size: .5rem;
                color: #2e7ae6;
                background: transparent;
            }
        }
        .state {
            display: inline-flex;
            align-items: center;

            &.normal {
                color: #118b26;
                i {
                    background: #118b26;
                }
            }
            &.warning {
                color: #f90;

                i {
                    background: #f90;
                }
            }
            & + .state {
                margin-left: .3rem;
            }
            i {
                margin-right: .1rem;
                width: .2rem; height: .2rem;
                border-radius: 50%;
            }
        }
    }
</style>
