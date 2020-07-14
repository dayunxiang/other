<template>
    <div class="right-side-wrap">
        <div class="right-side-top-wrap">
                <img  class="liuhai" src="../assets/images/icon/liuhai.png">
                <div class="titlebg">关键流量点</div>
                <div class="nomal_header_wrap">
                    <div class="item_numerical rawWater">
                         <img src="../assets/images/icon/ps1.png">
                         <div>
                            <p class="item_numerical_1">999 m³</p>
                            <p class="item_numerical_2">今日排水量</p>
                        </div>
                    </div>
                    <div class="item_numerical supplyWater">
                        <img src="../assets/images/icon/ps2.png">
                         <div>
                            <p class="item_numerical_1">999 m³</p>
                            <p class="item_numerical_2">今日处理量</p>
                        </div>
                    </div>
                </div>
        </div>
         <div class="right-side-top-wrap wrap1">
                <img  class="liuhai" src="../assets/images/icon/liuhai.png">
                <div class="titlebg">大成污水厂运行情况</div>
                <div class="wsItem">
                    <div class="wsReport"></div>
                    <div class="wsTable">
                        <el-table
                                :data="tableData1"
                                class="table1 table2"
                                style="width: 98%"
                                height="230"
                                size="mini"
                            >
                                <el-table-column
                                    prop="type"
                                    label=""
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="P"
                                    label="总磷"
                                >
                                 <template slot-scope="scope">
                                     <span :class="['type'+scope.row.P.type]">{{ scope.row.P.num }}</span>
                                </template>
                                </el-table-column>

                                <el-table-column
                                    prop="azote"
                                    label="总氮"
                                >
                                 <template slot-scope="scope">
                                     <span :class="['type'+scope.row.azote.type]">{{ scope.row.azote.num }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                    prop="cod"
                                    label="COD"
                                >
                                <template slot-scope="scope">
                                     <span :class="['type'+scope.row.cod.type]">{{ scope.row.cod.num }}</span>
                                </template>
                                </el-table-column>
                                 <el-table-column
                                    prop="NHN"
                                    label="氨氮"
                                >
                                <template slot-scope="scope">
                                     <span :class="['type'+scope.row.NHN.type]">{{ scope.row.NHN.num }}</span>
                                </template>
                                </el-table-column>
                            </el-table>
                    </div>
                </div>
        </div>
         <div class="right-side-top-wrap wrap1">
            <img  class="liuhai" src="../assets/images/icon/liuhai.png">
            <div class="titlebg">生产泵站运行情况</div>
            <div class="wsItem">
                 <div class="wsTable jzTable">
                    <el-table
                            :data="tableData2"
                            class="table1"
                            style="width: 98%"
                            height="230"
                            size="mini"
                        >
                            <el-table-column
                                prop="name"
                                label="泵站名称"
                                width="100"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="water"
                                label="水位（m）"
                            >
                                <template slot-scope="scope">
                                    <span class="water">{{ scope.row.water }}</span>
                            </template>
                            </el-table-column>

                            <el-table-column
                                prop="riskWater"
                                label="告警水位（m）"
                            >
                                <template slot-scope="scope">
                                    <span class="riskWater">{{ scope.row.riskWater }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                                prop="warning"
                                label="警戒线（m）"
                            >
                            <template slot-scope="scope">
                                    <span class="warning">{{ scope.row.warning }}</span>
                            </template>
                            </el-table-column>
                                <el-table-column
                                prop="tallWarn"
                                label="超高警戒线(m) "
                            >
                            <template slot-scope="scope">
                                    <span class="tallWarn">{{ scope.row.tallWarn }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                                prop="moment"
                                label="瞬时流量(m³/h)"
                            >
                            <template slot-scope="scope">
                                    <span class="moment">{{ scope.row.moment }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                                prop="day"
                                label="日流量(m³)"
                            >
                            <template slot-scope="scope">
                                    <span class="day">{{ scope.row.day }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                                prop="details"
                                label="水泵情况"
                                width="300"
                            >
                            <template slot-scope="scope">
                                 <div class="detailsItem">
                                    <div class="details" v-for="(value, index) in scope.row.details" :key="index">
                                        <div class="el-card1_title">
                                            {{value.name}}
                                        </div>
                                        <div :class="['type'+value.type]" />
                                    </div>
                                </div>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
            </div>
        </div>
        <div class="itemList">
                <div class="right-side-top-wrap gwsb wrap1">
                     <img class="liuhai" src="../assets/images/icon/liuhai.png">
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
                    <div class="report"> </div>
                </div>
                <div class="item2">
                   <div class="right-side-top-wrap ys wrap1">
                        <img class="liuhai" src="../assets/images/icon/liuhai.png">
                        <div class="titlebg">一体化泵站运行情况</div>
                        <div class="wsItem">
                            <div class="wsTable jzTable">
                                <el-table
                                        :data="tableData2"
                                        class="table1"
                                        style="width: 98%"
                                        height="230"
                                        size="mini"
                                    >
                                        <el-table-column
                                            prop="name"
                                            label="泵站名称"
                                            width="100"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="water"
                                            label="水位（m）"
                                        >
                                            <template slot-scope="scope">
                                                <span class="water">{{ scope.row.water }}</span>
                                        </template>
                                        </el-table-column>

                                        <el-table-column
                                            prop="riskWater"
                                            label="告警水位（m）"
                                        >
                                            <template slot-scope="scope">
                                                <span class="riskWater1">{{ scope.row.riskWater }}</span>
                                        </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="details"
                                            label="水泵情况"
                                            width="300"
                                        >
                                        <template slot-scope="scope">
                                            <div class="detailsItem">
                                                <div class="details" v-for="(value, index) in scope.row.details" :key="index">
                                                    <div class="el-card1_title">
                                                        {{value.name}}
                                                    </div>
                                                    <div :class="['type'+value.type]" />
                                                </div>
                                            </div>
                                        </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                        </div>
                    </div>
                    <div class="right-side-top-wrap ys gd wrap1">
                        <img class="liuhai" src="../assets/images/icon/liuhai.png">
                        <div class="titlebg">管道液位</div>
                         <div class="report1"> </div>
                    </div>
                </div>
        </div>
        <div class="itemList">
            <div class="right-side-top-wrap gdsp wrap1">
                    <img class="liuhai" src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">视频监控</div>
                    <div class="process">更多视频 >></div>
                    <div class="report">
                        <div class="el-card1 video"  v-for="(value, index) in videoData" :key="index">
                             <div class="el-card1_title">
                                   {{value.name}}
                             </div>
                              <img class="el-video_img" src="../assets/images/icon/wsc.png" />
                        </div>
                    </div>
            </div>
             <div class="right-side-top-wrap gdsp wrap1">
                <img class="liuhai" src="../assets/images/icon/liuhai.png">
                <div class="titlebg">大用户排水量</div>
                <div class="report2"> </div>
                <div class="wsItem">
                    <div class="wsTable jzTable">
                        <el-table
                                :data="tableData3"
                                class="table1"
                                style="width: 98%"
                                height="288"
                                size="mini"
                            >
                                <el-table-column
                                    prop="name"
                                    label="企业名称"
                                    width="300"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="day"
                                    label="日流量（m³/d）"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="quota"
                                    label="限额（m³/d）"
                                >
                                </el-table-column>
                            </el-table>
                        </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'RightSide',
        props: {
        msg: String
        },
        data(){
            return {
                tableData1: [{
                    type: '进水（mg/L）',
                    azote:{
                        num:'333',
                        type:"risk"
                    } ,
                    P :{
                        num:'333',
                        type:"normal"
                        } ,
                    cod:{
                        num:'333',
                        type:"risk"
                        } ,
                    NHN:{
                        num:'333',
                        type:"normal"
                        }
                    },{
                    type: '出水（mg/L）',
                    azote:{
                        num:'333',
                        type:"normal"
                    } ,
                    P :{
                        num:'333',
                        type:"normal"
                        } ,
                    cod:{
                        num:'333',
                        type:"risk"
                        } ,
                    NHN:{
                        num:'333',
                        type:"normal"
                    }
                }],
                tableData2:[
                    {name:'泵站名称',water:10,riskWater:30,warning:8,tallWarn:99,moment:99,day:99,details:[{name:"1#",type:'gray'},{name:"1#",type:'red'}]},
                    {name:'泵站名称',water:10,riskWater:30,warning:8,tallWarn:99,moment:99,day:99,details:[{name:"1#",type:'green'},{name:"1#",type:'green'}]},
                    {name:'泵站名称',water:10,riskWater:30,warning:8,tallWarn:99,moment:99,day:99,details:[{name:"1#",type:'green'},{name:"1#",type:'green'}]}
                ],
                tableData3:[
                    {name:'泵站名称',day:99,quota:96},
                    {name:'泵站名称',day:99,quota:96},
                    {name:'泵站名称',day:99,quota:96},
                 ],
                videoData:[{name:'幽澜水厂 # ',imgurl:'../assets/images/icon/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'},{name:'幽澜水厂 # ',imgurl:'../assets/images/wsc.png'}],

            }
        },
    }
</script>

<style scoped lang="scss">
    .right-side-wrap {
        position: relative;
        .itemList{
            display: flex;
            width: 100%;
            justify-content: space-between;
            .item2{
                 width: 49.5%;
            }
        }
        .right-side-top-wrap{
                margin-top: -110px;
                height: 350px;
                width: 100%;
                background: url("../assets/images/icon/psbg.png") no-repeat center / 100% 100%;
                &.wrap1{
                    margin-top: 20px;
                    height: 300px;
                }
                &.gd{
                    margin-top: 10px;
                }
                 &.ys,&.gwsb,&.gdsp{
                    .liuhai{
                        width: 247px;
                        height: 7px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .report{
                        width: 100%;
                        height: 420px;
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
                    .report1{
                        width: 100%;
                        height: 245px;
                    }
                    .report2{
                        width: 100%;
                        height: 302px;
                    }
                }
                &.ys{
                    background: url("../assets/images/icon/ys.png") no-repeat center / 100% 100%;
                    height: 305px;
                    width: 100%;
                    position: relative;
                }
                &.gdsp{
                    position: relative;
                    background: url("../assets/images/icon/chushui.png") no-repeat center / 100% 100%;
                    height: 660px;
                     width: 49.5%;
                }
                &.gwsb{
                    position: relative;
                    background: url("../assets/images/icon/chushui.png") no-repeat center / 100% 100%;
                    height: 620px;
                     width: 49.5%;
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
            .liuhai{
                width: 247px;
                height: 7px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
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
            .process{
                position: absolute;
                right: 2%;
                color: #fff;
                height: 50px;
                line-height: 50px;
                top: 0;
            }
            .nomal_header_wrap{
                display: flex;
                justify-content: space-around;
                margin-top: 60px;
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
                    width: 120px;
                    height: 120px;
                    margin-top: 25px;
                    margin-right: 25px;
                }
            }
            .wsItem{
               height: 230px;
                display: flex;
                width: 98%;
                margin: auto;
                margin-top: 10px;
                .wsReport{
                    height: 80%;
                    width: 49%;
                }
                .wsTable{
                    height: 80%;
                    width: 50%;
                    margin-left: 1%;
                    &.jzTable{
                         width: 100%;
                    }
                    .table1{
                         border: 1px solid #21334f;
                        background-color: transparent;
                        font-size: 12px;
                        margin: auto;
                        &::before {
                            height: 0;
                        }
                        &.table2{
                             ::v-deep{
                                .el-table__header,.el-table__body-wrapper {
                                    th,tr {
                                        .cell {
                                            text-align: center;
                                            .typenormal{
                                                line-height: 83px;
                                                color: #00ffff;
                                                font-size: 36px;
                                                font-weight: 500;
                                            }
                                            .typerisk{
                                                 line-height: 83px;
                                                color: #e64545;
                                                font-size: 36px;
                                                font-weight: 500;
                                            }
                                        }

                                    }
                                }
                            }
                        }
                        ::v-deep{
                        .el-table__header{
                                    th,
                                    tr{
                                        color: #ccffff;
                                        background-color: rgba(17, 32, 54, .4)!important;
                                        border-right:1px solid #1a2a41!important;
                                    }
                                    th:nth-last-child(2) {
                                        border-right: 0!important;
                                    }
                                }
                                .el-table__body-wrapper {
                                    th,tr {
                                        .cell {
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            .c {
                                                width: 16px;
                                                height: 16px;
                                                line-height: 16px;
                                                text-align: center;
                                                font-size: 12px;
                                                border-radius: 50%;
                                                margin-right: 4px;
                                            }
                                            .type1{
                                                color: #25c668
                                            }
                                            .riskWater{
                                                color: #00a0e4
                                            }
                                            .warning{
                                                 color: #ff9900
                                            }
                                            .riskWater1,.tallWarn{
                                                color: #e64545
                                            }
                                            .detailsItem{
                                                display: flex;
                                                .details{
                                                    display: flex;
                                                    margin-left: 15px;
                                                    .typegray{
                                                        background: url("../assets/images/icon/gray.png") no-repeat center / 100% 100%;
                                                        height: 20px;
                                                        width:  20px;
                                                        margin-left: 4px;
                                                        margin-top: 3px;
                                                    }
                                                    .typered{
                                                        background: url("../assets/images/icon/red.png") no-repeat center / 100% 100%;
                                                        height:  20px;
                                                        width:  20px;
                                                        margin-left: 4px;
                                                        margin-top: 3px;
                                                    }
                                                    .typegreen{
                                                        background: url("../assets/images/icon/green.png") no-repeat center / 100% 100%;
                                                        height:  20px;
                                                        width:  20px;
                                                        margin-left: 4px;
                                                        margin-top: 2px;
                                                    }
                                                }
                                            }

                                            .cprimary{
                                                color: #fff;
                                                background-color: #46a98d;
                                            }

                                            .cdanger{
                                                color: #000;
                                                background-color: #be8d89;
                                            }

                                            .cinfo{
                                                color: #fff;
                                                background-color: #999999;
                                            }

                                        }
                                        color: #c3cad9;
                                        background-color: transparent;

                                        &:hover{
                                            td{
                                                background: transparent;
                                            }
                                        }
                                    }
                                }
                                td,
                                th.is-leaf {
                                    border-right:1px solid #1a2a41!important;
                                    border-bottom:1px solid #1a2a41!important;

                                    &:last-of-type {
                                        border-right: 0!important;
                                    }
                                }
                            }
                        }
                    }

            }
        }
    }
</style>
