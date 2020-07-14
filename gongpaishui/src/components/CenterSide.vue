<template>
    <div class="center-side-wrap">
        <div class="center_header">
             <Marquee :lists="lists"></Marquee>
            </div>
        <div class="center_map">
            <diTu></diTu>
        </div>
        <div class="side-center—foot-wrap">
                <div class="lscw ">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">供水告警</div>
                     <div class="process"  @click="dialogMonitoringVisible = true">更多告警 >></div>
                     <div class="lscw_chart"></div>
                    <div class="report">
                         <el-table
                                :data="tableData1"
                                class="table1"
                                style="width: 98%"
                                height="284"
                                size="mini"
                            >
                                <el-table-column
                                    prop="address"
                                    label="监控点"
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="message"
                                    label="告警信息"
                                     width="200"
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="dispose"
                                    label="处理状态"
                                    width="100"
                                >
                                <template slot-scope="scope">
                                     <span :class="['type'+scope.row.disposeType]">{{ scope.row.dispose }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                    prop="date"
                                    label="告警时间"
                                    width="150"
                                >
                                </el-table-column>
                            </el-table>
                    </div>
                </div>
                <div class="lscw lscw1">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">调度工单</div>
                     <div class="process" @click="dialogJobOrderVisible = true">更多工单 >></div>
                    <div class="report">
                         <el-table
                                :data="tableData2"
                                class="table1 table2"
                                style="width: 98%"
                                height="200"
                                size="mini"
                            >
                                <el-table-column
                                    prop="type"
                                    label=""
                                    height="30"
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="onAwait"
                                    label="待办"
                                    width="300"
                                    height="30"
                                >
                                 <template slot-scope="scope">
                                     <span class="onAwait" >{{ scope.row.onAwait }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                    prop="proceed"
                                    label="进行中"
                                    width="300"
                                    height="30"
                                >
                                <template slot-scope="scope">
                                     <span class="proceed" >{{ scope.row.proceed }}</span>
                                </template>
                                </el-table-column>
                            </el-table>
                    </div>
                </div>
                <div class="lscw lscw1">
                    <img src="../assets/images/icon/liuhai.png">
                    <div class="titlebg">排水告警</div>
                     <div class="process">更多告警 >></div>
                    <div class="lscw_chart"></div>
                    <div class="report">
                         <el-table
                                :data="tableData1"
                                class="table1"
                                style="width: 98%"
                                height="284"
                                size="mini"
                            >
                                <el-table-column
                                    prop="address"
                                    label="监控点"
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="message"
                                    label="告警信息"
                                     width="200"
                                >
                                </el-table-column>

                                <el-table-column
                                    prop="dispose"
                                    label="处理状态"
                                    width="100"
                                >
                                <template slot-scope="scope">
                                     <span :class="['type'+scope.row.disposeType]">{{ scope.row.dispose }}</span>
                                </template>
                                </el-table-column>
                                <el-table-column
                                    prop="date"
                                    label="告警时间"
                                    width="150"
                                >
                                </el-table-column>
                            </el-table>
                    </div>
                </div>
        </div>
        <el-dialog title="监控历史" custom-class="dialog1" :visible.sync="dialogMonitoringVisible">
        <div slot="title" class="header-title">
            <span >监控历史 </span>
                <img v-show="showTable" @click="showTable = false" src="../assets/images/icon/gd1.png" alt="">
                <img v-show="!showTable" @click="showTable = true"  src="../assets/images/icon/vedioTb.png" alt="">
        </div>
        <div class="gyReport">
            <vedioHistory :showTable ="showTable" />
        </div>
        </el-dialog>
        <el-dialog title="" custom-class="dialog1" :visible.sync="dialogJobOrderVisible">
            <div slot="title" class="header-title">
                <span >工单管理 </span>
                    <img  src="../assets/images/icon/gd1.png" alt="">
            </div>
            <div class="gyReport">
                <jobOrderMange :showTable ="showTable" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import diTu from '../components/DiTu.vue'; // 地图
    import vedioHistory from '../components/VedioHistory.vue'; // 监控历史
    import jobOrderMange from '../components/JobOrderMange.vue'; // 工单管理
    import Marquee from '../components/Marquee';//公告
    export default {
        name: 'CenterSide',
        components: {
            diTu,
            vedioHistory,
            jobOrderMange,
            Marquee
        },
        data(){
            return {
                tableData1: [{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                   date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 2,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 3,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                   date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 2,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 3,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                   date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 1,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 2,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                    },{
                    date: '2016-05-03',
                    dispose: '未处理',
                    disposeType: 3,
                    message: '告警信息：嗷嗷啊',
                    address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄',
                }],
                tableData2:[{type:'供水',onAwait:10,proceed:30},{type:'排水',onAwait:10,proceed:30}],
                dialogMonitoringVisible:false,
                showTable:true,
                dialogJobOrderVisible:false,
                lists: [
                '【供水告警】XX路发生爆管事件，请立刻处理。',
                '【供水告警1】XX路发生爆管事件，请立刻处理。'
                ]
            }
    },
    }
</script>

<style scoped lang="scss">
    .center-side-wrap {
        position: relative;
        .center_header{
            height: 100px;
            width: 98%;
            margin: auto;
            background: url("../assets/images/icon/bobao.png") no-repeat center / 100% 100%;
            color: #e64545;
            font-size: 48px;
            line-height: 100px;
            text-align: center;
        }
        .center_map{
            width: 98%;
            height: 1420px;
            margin: auto;
             border: 1px solid #21334f;
        }
        .side-center—foot-wrap{
            display: flex;
            margin-top: 20px;
            .lscw{
                position: relative;
                height: 660px;
                width: 32%;
                margin-left: 1%;
                background: url("../assets/images/icon/gj.png") no-repeat center / 100% 100%;
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
                .lscw_chart{
                    width: 98%;
                    height: 320px;
                    margin: auto;
                }
                .report{
                    .table1 {
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
                                            font-size: 18px;
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
                                        .type1{
                                           color: #25c668
                                        }
                                        .type2{
                                           color: #00a0e4
                                        }
                                        .type3{
                                           color: #e64545
                                        }
                                        .proceed{
                                            height: 68px;
                                            text-align: center;
                                            color: #00ffff;
                                            font-size: 36px;
                                            line-height: 65px;
                                            text-align: center;
                                            width: 100%;
                                            font-weight: 500;
                                        }
                                        .onAwait{
                                            height: 68px;
                                            text-align: center;
                                            color: #e64545;
                                            font-size: 36px;
                                            line-height: 65px;
                                            text-align: center;
                                            width: 100%;
                                            font-weight: 500;
                                        }
                                        .c {
                                            width: 16px;
                                            height: 16px;
                                            line-height: 16px;
                                            text-align: center;
                                            font-size: 12px;
                                            border-radius: 50%;
                                            margin-right: 4px;
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
        ::v-deep{
            .el-dialog {
                &.dialog1{
                    width: 2500px;
                    height: 1410px;
                    background: url("../assets/images/icon/gybg.png") no-repeat center / 100% 100%;
                    .header-title{
                        font-size: 24px;
                        color: #00ffff;
                        line-height: 60px;
                        position: relative;
                        img{
                            position: absolute;
                            right: 60px;
                            top: 16px;
                        }
                    }
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
