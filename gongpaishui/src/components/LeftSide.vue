<template>
    <div class="left-side-wrap">
        <div class="left-side-top-wrap">
                <div class="nomal_header">
                    <h5>智慧供水</h5>
                </div>
                <div class="nomal_header_wrap">
                    <div class="item_numerical rawWater">
                         <img src="../assets/images/icon/rawWater.png">
                         <div>
                            <p class="item_numerical_1">999 m³</p>
                            <p class="item_numerical_2">今日原水量</p>
                        </div>
                    </div>
                    <div class="item_numerical supplyWater">
                        <img src="../assets/images/icon/supplyWater.png">
                         <div>
                            <p class="item_numerical_1">999 m³</p>
                            <p class="item_numerical_2">今日供水量</p>
                        </div>
                    </div>
                    <div class="item_numerical pressure">
                        <img src="../assets/images/icon/pressure.png">
                         <div>
                            <p class="item_numerical_1">999 Mpa</p>
                            <p class="item_numerical_2">日均压力</p>
                        </div>
                    </div>
                </div>
        </div>
        <div class="left-side-center-wrap">
                <div class="lscw lscw1">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">幽澜水厂出水情况</div>
                    <div class="process" @click="dialogTableVisible = true">制水工艺 >></div>
                    <div class="report report1"> </div>
                    <div class="lscw_num">
                        <el-row :gutter="0">
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">瞬时流量（m³）</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">实时压力(Mpa)</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">PH值</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                 <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">浊度(NTU)</p>
                            </div></el-col>
                             <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">余氯(mg/L)</p>
                            </div></el-col>
                        </el-row>
                    </div>
                </div>
                <div class="lscw">
                     <img src="../assets/images/icon/liuhai.png">
                     <div class="titlebg">丁栅水厂出水情况</div>
                     <div class="process" @click="dialogTableVisible = true" >制水工艺 >></div>
                    <div class="report report1"> </div>
                    <div class="lscw_num">
                        <el-row :gutter="0">
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">瞬时流量（m³）</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                 <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">实时压力(Mpa)</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">PH值</p>
                            </div></el-col>
                            <el-col><div class="grid-content">
                                <p  class="grid-content_1">341.50</p>
                                <p class="grid-content_2">浊度(NTU)</p>
                            </div></el-col>
                             <el-col><div class="grid-content">
                                 <p  class="grid-content_1 red">341.50</p>
                                <p class="grid-content_2">余氯(mg/L)</p>
                            </div></el-col>
                        </el-row>
                    </div>
                </div>
        </div>
        <div class="left-side-center-wrap">
                <div class="lscwBox">
                    <div class="lscw ys">
                        <img src="../assets/images/icon/liuhai.png">
                        <div class="titlebg">大用户用水量</div>
                        <div class="report"> </div>
                    </div>
                    <div class="lscw ys ys2">
                        <img src="../assets/images/icon/liuhai.png">
                        <div class="titlebg">关键压力点</div>
                        <div class="report">
                                <el-carousel class="swiper1" height="205px">
                                    <el-carousel-item v-for="item in 3" :key="item">
                                        <div class="card">
                                        </div>
                                    </el-carousel-item>
                                </el-carousel>
                        </div>
                    </div>
                </div>
                <div class="lscw">
                     <img src="../assets/images/icon/liuhai.png">
                     <div class="titlebg">管网设备</div>
                     <div class="equipment">
                       <div class="item_numerical">
                            <p class="item_numerical_1">999</p>
                            <p class="item_numerical_2">设备总数量</p>
                        </div>
                        <div class="item_numerical">
                            <p class="item_numerical_1 green">999</p>
                            <p class="item_numerical_2">设备在线数</p>
                        </div>
                        <div class="item_numerical">
                            <p class="item_numerical_1 yellow">999</p>
                            <p class="item_numerical_2">设备离线数</p>
                        </div>
                    </div>
                    <div class="report report1"> </div>
                </div>
        </div>
        <div class="left-side-center-wrap">
                <div class="lscw flow lscw1">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">关键流量点</div>
                    <div class="report">
                         <div class="el-card1"  v-for="(value, index) in tableData" :key="index">
                             <div class="el-card1_title">
                                   {{value.name}}
                             </div>
                              <div class="el-card1_center">
                                   <img class="el-card1_img" :src="require('../assets/images/icon/'+value.level+'.png')" />
                                   <div>
                                       <p class="el-card1_p">瞬时流量：</p>
                                        <p :class="['el-card1_num',value.level]"> {{value.num}}<span> m³</span></p>
                                   </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div class="lscw flow">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">视频监控</div>
                    <div class="process" @click="dialogVideoVisible = true">更多视频 >></div>
                    <div class="report">
                         <div class="el-card1 video"  v-for="(value, index) in videoData" :key="index">
                             <div class="el-card1_title">
                                   {{value.name}}
                             </div>
                              <img class="el-video_img" src="../assets/images/icon/wsc.png" />
                        </div>
                    </div>
                </div>
        </div>
        <el-dialog title="水产工艺" custom-class="dialog1" :visible.sync="dialogTableVisible">
            <div class="gyReport"></div>
        </el-dialog>
        <el-dialog title="视频监控" custom-class="dialog1" :visible.sync="dialogVideoVisible">
            <div class="gyReport">
                <VedioWatch />
            </div>
        </el-dialog>
    </div>
</template>

<script>
import VedioWatch from '../components/VedioWatch.vue'; // 视频监控
export default {
    name: 'LeftSide',
    components: {
        VedioWatch,
    },
    data(){
        return {
                tableData:[{name:'体育南路1# ',num:'335.84',level:'normal'},{name:'体育南路1# ',num:'335.84',level:'caution'},{name:'体育南路1# ',num:'335.84',level:'risk'},{name:'体育南路1# ',num:'335.84',level:'normal'},{name:'体育南路1# ',num:'335.84',level:'caution'},{name:'体育南路1# ',num:'335.84',level:'risk'},{name:'体育南路1# ',num:'335.84',level:'normal'},{name:'体育南路1# ',num:'335.84',level:'normal'}],
                videoData:[{name:'幽澜水厂 # ',imgurl:'../assets/images/icon/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'}],
                dialogTableVisible: false,
                dialogVideoVisible:false,
        }
    },
    methods:{
    }
}
</script>

<style scoped lang="scss">
    .left-side-wrap {
        position: relative;
        margin-left: 1%;
        .left-side-top-wrap{
                margin-top: -110px;
                height: 350px;
                width: 100%;
                background: url("../assets/images/icon/zhgs.png") no-repeat center / 100% 100%;
            .nomal_header{
                text-align: center;
                color: #00ffff;
                font-size: 22px;
                line-height: 80px;
            }
            .nomal_header_wrap{
                    display: flex;
                    justify-content: space-around;
                    margin-top: 20px;
                    .item_numerical{
                        display: flex;
                        color: #00ffff;
                        font-weight: bold;
                        .item_numerical_1{
                            font-size: 56px;
                            padding-top: 15px;
                        }
                        .item_numerical_2{
                            font-size: 24px;
                        }
                    }
                img{
                    width: 100px;
                    height: 100px;
                    margin-top: 25px;
                    margin-right: 25px;
                }
            }
        }
        .left-side-center-wrap{
                display: flex;
                margin-top: 20px;
                .lscwBox{
                    position: relative;
                    height: 620px;
                    width: 49%;
                    margin-right: 2%;
                }
                .lscw{
                    position: relative;
                    height: 620px;
                    width: 49%;
                    background: url("../assets/images/icon/chushui.png") no-repeat center / 100% 100%;
                    &.lscw1{
                        margin-right: 2%;
                    }
                    &.flow{
                        background: url("../assets/images/icon/flow.png") no-repeat center / 100% 100%;
                         height: 660px;
                    }
                    &.ys{
                        background: url("../assets/images/icon/ys.png") no-repeat center / 100% 100%;
                        height: 300px;
                         width: 100%;
                    }
                    &.ys2{
                        margin-top: 20px;
                    }
                    img{
                        width: 247px;
                        height: 7px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .process{
                        position: absolute;
                        right: 2%;
                        color: #fff;
                        height: 50px;
                        line-height: 50px;
                        top: 0;
                    }
                    .titlebg{
                        background: url("../assets/images/icon/chushui.png") no-repeat center / 100% 100%;
                        width: 100%;
                        height: 50px;
                        color: #00ffff;
                        line-height: 60px;
                        text-align: center;
                        font-size: 24px;
                    }
                    .report{
                        width: 100%;
                        height: 250px;
                        &.report1{
                            height: 420px;
                        }
                        .swiper1 {
                            .card{
                                width: 100%;
                                height: 230px;
                            }
                            ::v-deep{
                                .el-carousel__indicator{
                                   padding: 0 3.5px 2px 3.5px;
                                }
                                .is-active{
                                    .el-carousel__button{
                                        background-color: #fff;
                                    }
                                }
                                .el-carousel__button{
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 50%;
                                    opacity: 1;
                                    background-color: #006f92;
                                }
                            }
                        }
                        .el-card1{
                            height: 140px;
                            width: 48%;
                            border: 1px solid #21334f;
                            background-color: transparent;
                            display: inline-block;
                            margin-top: 10px;
                            &:nth-child(n+1){
                                margin-left: 7px;
                            }
                             &:nth-child(2n){
                                margin-left: 10px;
                            }
                            &.video{
                                height: 290px;
                                .el-card1_title{
                                     background-color: rgba(33, 51, 79, 0.76);
                                }
                                .el-video_img{
                                    width: 100%;
                                    height: 250px;
                                    position: relative;
                                    left: 0;
                                    transform: none;
                                }
                            }
                            .el-card1_title{
                                background-color: rgba(33, 51, 79, 0.54);
                                color: #73e1fa;
                                font-size: 18px;
                                line-height: 40px;
                                padding-left: 15px;
                            }
                             .el-card1_center{
                                 display: flex;
                                 .el-card1_img{
                                     width: 50px;
                                    height: 50px;
                                    position: relative;
                                    left: 0;
                                    transform: none;
                                    margin: 25px 30px 25px 50px;
                                 }
                                 .el-card1_p{
                                     color: #73e1fa;
                                     font-size: 16px;
                                     margin-top: 25px;
                                 }
                                 .el-card1_num{
                                         color: #73e1fa;
                                        font-weight: bold;
                                        font-size: 24px;
                                        &.caution{
                                            color: #ff9900;
                                        }
                                        &.risk{
                                              color: #e64545;
                                        }
                                     span{
                                          color: #73e1fa;
                                           font-size: 22px;
                                           padding-left: 5px;
                                     }
                                 }
                             }
                        }
                    }
                    .lscw_num{
                        .el-row {
                             border: 1px solid #21334f;
                            background-color: transparent;
                            font-size: 12px;
                        }
                        .el-col{
                            width: 20% !important;
                        }
                        .grid-content {
                            border-radius: 4px;
                            min-height: 148px;
                            border-right:1px solid #1a2a41!important;
                            text-align: center;
                            .grid-content_1{
                                color: #00ffff;
                                font-size: 36px;
                                font-weight: bold;
                                padding-top: 35px;
                                &.red{
                                     color: #e64545;
                                }
                            }
                            .grid-content_2{
                                color: #ccffff;
                                font-size: 16px;
                                padding-top: 2px;
                                text-indent: 8px;
                            }
                        }
                    }
                    .equipment{
                        display: flex;
                        width: 100%;
                        justify-content: space-around;
                        margin-top: 40px;
                        .item_numerical{
                            text-align: center;
                            .item_numerical_1{
                                color: #00ffff;
                                font-size: 48px;
                                font-weight: bold;
                                 &.green{
                                    color: #25c668;
                                }
                                &.yellow{
                                     color: #ff9900;
                                }
                            }
                            .item_numerical_2{
                                color: #73e1fa;
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
            ::v-deep{
                .el-dialog {
                    &.dialog1{
                        width: 2500px;
                        height: 1410px;
                        background: url("../assets/images/icon/gybg.png") no-repeat center / 100% 100%;
                        .gyReport{
                            width: 100%;
                            height: 1320px;
                            margin: auto;
                        }
                    }
                    .el-dialog__header{
                        position: relative;
                        background: url("../assets/images/icon/gytitlebg.png") no-repeat center / 100% 100%;
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        padding:0;
                         &::before {
                            content: '';
                            background: url("../assets/images/icon/gyLiuHai.png") no-repeat center / 100% 100%;
                            width: 302px;
                            height: 7px;
                            left: 50%;
                            position: absolute;
                            transform: translateX(-50%);
                        }
                        .el-dialog__title{
                            font-size: 24px;
                            color: #00ffff;
                            line-height: 60px;

                        }
                        .el-dialog__headerbtn{
                            top:0 !important;
                        }
                    }
                }
            }
    }
</style>
