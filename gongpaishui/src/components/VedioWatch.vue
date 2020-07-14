<template>
   <div class="vedioWatchPage">
        <div class="vedioWatch_body">
            <div class="vedioWatch_body_left">
                <div class="vedioDW">
                    <div class="vedioWatch_body_normal_title">视频点位</div>

                    <div class="vedioDwSearchBar">
                        <el-input
                            placeholder="请输入点位名称关键字"
                            v-model="input1">
                            <i slot="suffix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>

                    <div class="vedioDwTree">
                        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                    </div>
                </div>

                <div class="vedioTime">
                    <div class="vedioWatch_body_normal_title">视频时间</div>
                    <div class="vedioTime_body">
                        <div class="row">
                            <div class="label">时间类型：</div>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="row">
                            <el-radio-group v-model="radio1">
                                <el-radio-button class="w40" label="今天"></el-radio-button>
                                <el-radio-button class="w40" label="昨天"></el-radio-button>
                                <el-radio-button class="w50" label="近七天"></el-radio-button>
                                <el-radio-button class="w50" label="自定义"></el-radio-button>
                            </el-radio-group>
                        </div>

                        <div class="row">
                            <div class="timeBar">
                                <el-date-picker
                                    v-model="startTime"
                                    type="date"
                                    placeholder="开始日期"
                                    :clearable="false"
                                >
                                </el-date-picker>
                                <div class="label">-</div>
                                <el-date-picker
                                    v-model="endTime"
                                    type="date"
                                    placeholder="结束日期"
                                    :clearable="false"
                                >
                                </el-date-picker>
                                <!-- endTime -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vedioBj">
                    <div class="vedioWatch_body_normal_title">视频布局</div>
                    <div class="vedioBj_body">
                        <!-- 1 -->
                        <div class="block" @click="handleThumbnailClick(1)">
                            <!-- 展示显示 -->
                            <img v-show="thumbnaiType==1" src="../assets/images/icon/layout8.png" > 
                             <!-- 展示不选中显示 -->
                            <img v-show="thumbnaiType!=1" src="../assets/images/icon/layout1.png" >
                            <p>1屏</p>
                        </div>
                        <div class="block" @click="handleThumbnailClick(8)">
                            <img v-show="thumbnaiType==8" src="../assets/images/icon/layout8.png" alt="">
                            <img v-show="thumbnaiType!=8" src="../assets/images/icon/v8gray.png" alt="">
                            <p>8屏</p>
                        </div>
                        <div class="block" @click="handleThumbnailClick(12)">
                            <img v-show="thumbnaiType ==12" src="../assets/images/icon/layout8.png" alt="">
                            <img v-show="thumbnaiType!=12" src="../assets/images/icon/layout12.png" alt="">
                            <p>12屏</p>
                        </div>
                        <!-- 8 -->
                        <!-- 12 -->
                    </div>
                </div>
            </div>

            <div class="vedioWatch_body_right">
                <div class="vedioWatch_body_right_title">
                    水厂15615615615*/*456146/*456
                </div>

                <div class="vedioWatch_body_right_body">
                    <div v-show="thumbnaiType ==1" class="vedio1">
                        <img src="../assets/images/icon/wsc.png" alt="">
                    </div>
                     <div v-show="thumbnaiType ==8" class="vedio8">
                         <div class="vedio8_head">
                            <div class="vedio8_head_big" >
                                <img src="../assets/images/icon/wsc.png" alt="">
                            </div>
                            <div class="vedio8_head_right" >
                                <img src="../assets/images/icon/wsc.png" alt="">
                                <img src="../assets/images/icon/wsc.png" alt="">
                                <img src="../assets/images/icon/wsc.png" alt="">
                            </div>
                         </div>
                          <div class="vedio8_foot">
                                <img src="../assets/images/icon/wsc.png" alt="">
                                <img src="../assets/images/icon/wsc.png" alt="">
                                <img src="../assets/images/icon/wsc.png" alt="">
                                <img src="../assets/images/icon/wsc.png" alt="">
                         </div>
                    </div>
                     <div v-show="thumbnaiType ==12" class="vedio12">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                        <img src="../assets/images/icon/wsc.png" alt="">
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'vedioWatch',

    components: {
    },

    data(){
        return {
            input1:'',
            radio1:'',
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            startTime:'',
            endTime:'',
            thumbnaiType:8,
        }
    },

    methods:{
        handleThumbnailClick(type){
           this.thumbnaiType = type;
        },
      handleNodeClick(data) {
        console.log(data);
      }

    }
}
</script>

<style lang='scss'>
    .vedioWatchPage{
        .vedioWatch_body{
            @include clearFix;
            display: flex;
            .vedioWatch_body_left {
                width: 208px;
                height: 100%;
                background: url('../assets/images/icon/vedioWatchLeft.png') no-repeat 100% 100%;
                .vedioWatch_body_normal_title {
                    background: url('../assets/images/icon/vlTitle.png') no-repeat 100% 100%;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 8px;
                    color: #fff;
                }
                .vedioDW{
                    width: 100%;
                    height: 600px;
                    .vedioDwSearchBar {
                        height: 40px;
                        line-height: 40px;
                        padding-left: 9px;
                        .el-input {
                            width: 180px;
                        }
                        .el-input__inner{
                            height: 30px;
                            padding-left: 6px;
                            padding-right: 20px;
                            line-height: 30px;
                            border-radius: 0;
                            border: 1px solid #054a64;
                            background-color: #0a1c2a;
                            color: #6cd3ea;
                            font-size: 14px;
                            &::-webkit-input-placeholder {
                                color: rgba(117,118,119,.9);
                                font-size: 14px;
                            }
                        }
                        // .el-input__prefix{
                        //     left: auto;
                        //     right: 5px;
                        // }

                        .el-input__icon{
                            line-height: 30px;
                            width: 16px;
                            color: #6cd3ea;
                            font-weight: bold;
                            cursor: pointer;
                        }
                    }
                    .vedioDwTree {
                        height: calc(100% - 70px);
                        padding: 10px;
                        overflow: hidden;

                        .el-tree {
                            background-color: transparent;
                            color: #76e6ff;
                        }
                        .el-tree-node__content:hover{
                            background-color: transparent;
                        }
                        .el-tree-node:focus>.el-tree-node__content{
                            background-color: transparent;
                        }
                    }
                }

                .vedioTime {
                    width: 100%;
                    height: 173px;

                    .vedioTime_body {
                        height: 143px;
                        padding: 10px 8px;

                        .row {
                            @include clearFix;
                            float: left;
                            width: 100%;
                            height: 30px;
                            margin-bottom: 10px;
                            color: #6cd3ea;
                            .label {
                                float: left;
                                height: 30px;
                                line-height: 30px;
                                color: #6cd3ea;
                            }

                            .el-input {
                                float: left;
                            }
                            .el-input__inner{
                                width: 108px;
                                height: 30px;
                                padding-left: 7px;
                                padding-right: 16px;
                                line-height: 30px;
                                border-radius: 0;
                                border: 1px solid #054a64;
                                background-color: #0a1c2a;
                                color: #6cd3ea;
                                font-size: 12px;
                                &::-webkit-input-placeholder {
                                    color: rgba(117,118,119,.9);
                                    font-size: 12px;
                                }
                            }

                            .el-input__prefix{
                                left: auto;
                                right: 5px;
                            }

                            .el-input__icon{
                                line-height: 30px;
                                width: 14px;
                                color: #6cd3ea;
                            }

                            .el-radio-group{
                                float: left;
                            }

                            .el-radio-button {
                                margin-right: 1px;

                                &.is-active {
                                    .el-radio-button__inner {
                                        border: 1px solid #ad8b34;
                                        background: url('../assets/images/icon/gdbtnHover.png');
                                    }
                                }

                                .el-radio-button__inner{
                                    padding: 0;
                                    border-radius: 0;
                                    border: 1px solid transparent;
                                    // width: 81px;
                                    height: 30px;
                                    line-height: 30px;
                                    background-color: #1f3451;
                                    font-size: 12px;
                                    color: #76e6ff;
                                    box-shadow: none;
                                }

                                &.w40 .el-radio-button__inner{
                                    width: 40px;
                                }
                                &.w50 .el-radio-button__inner{
                                    width: 50px;
                                }
                            }

                            .timeBar{
                                height: 30px;
                                color: #76e6ff;

                                .el-date-editor{
                                    margin: 0 1px;
                                    width: 85px;
                                }

                                .el-input__inner{
                                    width: 85px;
                                    height: 30px;
                                    padding: 0 4px;
                                    line-height: 30px;
                                    border-radius: 0;
                                    border: 1px solid #054a64;
                                    background-color: #0a1c2a;
                                    color: #6cd3ea;
                                    font-size: 12px;

                                    &::-webkit-input-placeholder {
                                        color: rgba(117,118,119,.9);
                                        font-size: 12px;
                                    }
                                }

                                .el-input__prefix{
                                    left: auto;
                                    right: 5px;
                                    display: none
                                }
                                // .el-input__icon{
                                //     line-height: 30px;
                                //     width: 16px;
                                //     color: #6cd3ea;
                                // }
                            }
                        }
                    }
                }

                .vedioBj {
                    width: 100%;
                    height: 535px;

                    .vedioBj_body {
                        height: calc(100% - 30px);
                        padding-top: 20px;

                        .block {
                            display: flex;
                            height: 100px;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            p {
                                color: #76e6ff;
                                font-size: 14px;
                                margin-top: 10px;
                            }
                        }
                    }
                }
            }

            .vedioWatch_body_right {
                height: 100%;
                padding-left: 8px;

                .vedioWatch_body_right_title{
                    height: 35px;
                    line-height: 35px;
                    padding-left: 5px;
                    color: #e9eaeb;
                    font-size: 14px;
                }

                .vedioWatch_body_right_body {

                    .vedio1{
                        width: 2230px;
                        height: 1270px;
                        margin-left: 10px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .vedio8{
                        width: 2230px;
                        height: 1270px;
                        margin-left: 10px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        .vedio8_head{
                            display: flex;
                            .vedio8_head_big{
                                width: 1670px;
                                height: 956px;
                            }
                            .vedio8_head_right{
                                width: 540px;
                                height: 956px;
                                img{
                                    width: 100%;
                                    height: 300px;
                                    margin-left: 20px;
                                    &:nth-child(n+2){
                                        margin-top: 28px;
                                    }
                                }
                            }
                        }
                        .vedio8_foot{
                                width: 100%;
                                height: 300px;
                                display: flex;
                                img{
                                    width: 555px;
                                    height: 100%;
                                    margin-top: 20px;
                                    &:nth-child(n+2){
                                        margin-left: 20px;
                                    }
                                }
                        }
                    }
                    .vedio12{
                        width: 2230px;
                        height: 1270px;
                        margin-left: 10px;
                        img{
                            width: 540px;
                            height: 410px;
                            margin-left: 20px;
                            &:nth-child(n+5){
                                margin-top: 20px;
                            }
                            &:nth-child(4n+1){
                                margin-left: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>