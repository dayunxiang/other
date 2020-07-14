<template>
  <div class="jobOrderMangePage">

      <div class="jobOrder_body">
            <div class="jobOrder_body_optBar">
              <div class="row">
                    <div class="label">工单来源：</div>
                    <el-radio-group v-model="radio1">
                        <el-radio-button label="全部来源"></el-radio-button>
                        <el-radio-button label="巡检"></el-radio-button>
                        <el-radio-button label="热线"></el-radio-button>
                        <el-radio-button label="系统告警"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label">事件类型：</div>
                    <el-radio-group v-model="radio2">
                        <el-radio-button label="全部类型"></el-radio-button>
                        <el-radio-button label="爆管"></el-radio-button>
                        <el-radio-button label="阀门漏水"></el-radio-button>
                        <el-radio-button label="管网漏水"></el-radio-button>
                        <el-radio-button label="水质"></el-radio-button>
                        <el-radio-button label="阀门维护"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label">工单状态：</div>
                    <el-radio-group v-model="radio3">
                        <el-radio-button label="全部状态"></el-radio-button>
                        <el-radio-button label="已归档"></el-radio-button>
                        <el-radio-button label="处理中"></el-radio-button>
                        <el-radio-button label="已超时"></el-radio-button>
                        <el-radio-button label="未处理"></el-radio-button>
                        <el-radio-button label="已关闭"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row tshu">
                    <div class="label">创建日期：</div>
                    <div class="timeBar">
                        <el-date-picker
                            v-model="startTime"
                            type="date"
                            placeholder="开始日期"
                            :clearable="false"
                        >
                        </el-date-picker>
                        &nbsp;~&nbsp;
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

              <button class="moreOption">更多选项 <i class="el-icon-arrow-down"></i></button>
            </div>

            <div class="jobOrder_body_table">
                <el-table
                    :data="tableData1"
                    class="table2"
                    height="1070"
                    size="small"
                    stripe
                >
                    <el-table-column
                        type="index"
                        label="序号"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="工单编号"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="工单名称"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="工单来源"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="工单级别"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="工单状态"
                    >   
                        <template slot-scope="scope">
                            <span :class="scope.row.statusType">{{scope.row.status}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="工单归属"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="创建人"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="创建日期"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="当前环节"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="事件编号"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="事件类型"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="事件内容"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作"
                        width="73"
                    >
                        <button class="tishiBtn" @click="dialogVisible=true"></button>
                        <button class="infoBtn"></button>
                    </el-table-column>
                </el-table>

                <!-- 分页 -->
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="100"
                    layout="prev, pager, next, total, jumper"
                    :total="1000"
                >
                </el-pagination>
            </div>

            <!-- 详情弹窗 -->
            <el-dialog
                class="jobOrderDialog"
                :visible.sync="dialogVisible"
                :before-close="handleClose"
            >
                <button class="dialogCloseBtn" @click="dialogVisible=false"></button>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane class="gdxq" label="工单详情" name="first">
                        <div class="block">
                            <div class="block_title">基本信息</div>
                            <table class="block_body">
                                <tr>
                                    <td width="36%">工单编号：66666666666666666666666666666</td>
                                    <td width="32%">工单名称：大萨达撒多撒</td>
                                    <td width="32%">受理编号：66666666666666666</td>
                                </tr>
                                <tr>
                                    <td width="36%">客服工号：9527-gh</td>
                                    <td width="32%">创建人员：大萨达撒多撒</td>
                                    <td width="32%">创建日期：66666666666666666</td>
                                </tr>
                            </table>
                        </div>

                        <div class="block">
                            <div class="block_title">来电信息</div>
                            <table class="block_body">
                                <tr>
                                    <td width="36%">来电号码：66666666666666666666666666666</td>
                                    <td width="32%">来电客户：大萨达撒多撒</td>
                                    <td width="32%">性<span>性别</span>别：66666666666666666</td>
                                </tr>
                                <tr>
                                    <td width="36%">联系电话：9527-gh</td>
                                    <td width="32%">来电类型：大萨达撒多撒</td>
                                    <td width="32%">用户类别：66666666666666666</td>
                                </tr>
                                <tr>
                                    <td width="36%">事项类型：9527-gh</td>
                                    <td colspan="2">处理级别：大萨达撒多撒</td>
                                </tr>
                                <tr>
                                    <td colspan="3">联系地址：9527-gh</td>
                                </tr>
                                <tr>
                                    <td colspan="3">详细描述：9527-gh</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="block">
                            <div class="block_title">客户档案</div>
                            <table class="block_body">
                                <tr>
                                    <td colspan="3">档案编号：9527-gh</td>
                                </tr>
                                <tr>
                                    <td width="36%">身份证号：66666666666666666666666666666</td>
                                    <td width="32%">户主名称：大萨达撒多撒</td>
                                    <td width="32%">联系电话：66666666666666666</td>
                                </tr>
                                <tr>
                                    <td colspan="3">联系地址：9527-gh</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div class="block">
                            <div class="block_title">派单信息</div>
                            <table class="block_body">
                                <tr>
                                    <td width="36%">回复时间：66666666666666666666666666666</td>
                                    <td width="32%">处理部门：大萨达撒多撒</td>
                                    <td width="32%">是否抄送分领导：是</td>
                                </tr>
                            </table>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="工单流程" name="second">工单流程</el-tab-pane>
                </el-tabs>
            </el-dialog>
      </div>
  </div>
</template>

<script>
export default {
    name: 'JobOrderMange',
    components: {
    },
    data () {
      return {
            radio1: '热线',
            radio2: '全部类型',
            radio3: '处理中',
            startTime:'',
            endTime:'',
            // 工单状态样式字段 danger primary info
            tableData1:[{status:'未处理',statusType:'danger'},{status:'处理中',statusType:'primary'},{status:'已关闭',statusType:'info'}],
            dialogVisible:false,
            activeName: 'first',
            currentPage: 3,
      };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

        handleClose(){

        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },

        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style lang="scss">
    .jobOrderMangePage{
        width: 100%;
        height: 100%;


        .jobOrder_body {
            height: calc(100% - 45px);

            .jobOrder_body_optBar {
                position: relative;
                height: 194px;
                padding: 25px 29px 0;

                .moreOption {
                    position: absolute;
                    right: 29px;
                    bottom: 28px;
                    border: none;
                    background-color: transparent;
                    color: #76e6ff;
                }

                .row {
                    @include clearFix;
                    height: 28px;
                    margin-bottom: 12px;

                    &.tshu {
                        height: 30px;

                        .label {
                            height: 30px;
                            line-height: 30px;
                        }

                        .timeBar{
                            height: 30px;
                            color: #76e6ff;

                            .el-date-editor{
                                width: 118px;
                            }

                            .el-input__inner{
                                width: 118px;
                                height: 30px;
                                padding-left: 7px;
                                padding-right: 16px;
                                line-height: 30px;
                                border-radius: 0;
                                border: 1px solid #054a64;
                                background-color: #0a1c2a;
                                color: #6cd3ea;
                                font-size: 16px;

                                &::-webkit-input-placeholder {
                                    color: rgba(108,211,234,.9);
                                    font-size: 16px;
                                }
                            }

                            .el-input__prefix{
                                left: auto;
                                right: 5px;
                            }
                            .el-input__icon{
                                line-height: 30px;
                                width: 16px;
                                color: #6cd3ea;
                            }
                        }
                    }

                    .label{
                        float: left;
                        height: 28px;
                        line-height: 28px;
                        color: #ffffff;
                        font-size: 16px;
                    }

                    .el-radio-group{
                        float: left;
                    }

                    .el-radio-button {
                        margin-right: 14px;

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
                            width: 81px;
                            height: 28px;
                            line-height: 28px;
                            background-color: #1f3451;
                            font-size: 16px;
                            color: #76e6ff;
                            box-shadow: none;
                        }
                    }

                }
            }

            .jobOrder_body_table {
                padding: 0 20px;

                .table2{
                    width: 100%;
                    border: 1px solid #054a64;
                    background-color: transparent;
                    font-size: 12px;

                    &::before {
                        height: 0;
                    }

                    .el-table__row--striped {
                        td {
                            background-color: #0d213d!important;
                        }
                    }

                    .el-table__header{
                        th,
                        tr{
                            height: 36px;
                            color: #fff;
                            background-color: #112f4b!important;
                            border-right:1px solid #1b4a62!important;
                            .cell {
                                line-height: 1;
                            }
                        }
                        th:nth-last-child(2) {
                            border-right: 0!important;
                        }
                    }

                    .el-table__body-wrapper{
                        th,tr {
                            height: 36px;
                            color: #c3cad9;
                            background-color: transparent;

                            .cell {
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                line-height: 1;

                                .danger{
                                    color: #cc3333;
                                }

                                .primary{
                                    color: #00ffff;
                                }

                                .info{
                                    color: #a3a4a6;
                                }

                                .tishiBtn{
                                    width: 20px;
                                    height: 20px;
                                    border: none;
                                    background: url('../assets/images/icon/gdgl3.png') no-repeat 1.5px 0;
                                    margin-right: 10px;
                                }

                                .infoBtn {
                                    width: 20px;
                                    height: 20px;
                                    border: none;
                                    background: url('../assets/images/icon/gdgl4.png') no-repeat 0 0;
                                } 
                                
                            }

                            &:hover{
                                td{
                                    background: transparent;
                                }
                            }
                        }
                    }

                    td,
                    th.is-leaf{
                        border-right:1px solid #1b4a62!important;
                        border-bottom:1px solid #1b4a62!important;
                        &:last-of-type {
                            border-right: 0!important;
                        }
                    }
                }
            }

            .el-pagination {
                margin-top: 11px;
                text-align: center;
            }

            .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
                background-color: #0a2035;
                border: 1px solid #038e9e;
                color: #76e6ff;
            }

            .el-pager .number.active {
                border: 1px solid #ad8b34!important;
                background-color: transparent!important;
                background: url('../assets/images/icon/gdbtnHover.png');
            }

            .el-input__inner {
                background-color: #0a2035;
                border: 1px solid #038e9e;
                color: #76e6ff;
            }

            .el-pagination__total{
                color: #76e6ff;
                &::after {
                    margin-left: 5px;
                    display: inline;
                    content:',';
                    color: #76e6ff;
                }
            }
            
            .el-pagination__jump{
                margin-left: 0;
                color: #76e6ff;
            }
        }

        .jobOrderDialog{
            .el-dialog{
                position: relative;
                width: 1080px;
                height: 647px;
                background-color: #061d3d;
                border: 1px solid #015e63;
            }

            .el-dialog__header {
                display: none;
            }

            .el-dialog__body{
                padding: 0;

                .dialogCloseBtn{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 18px;
                    height: 18px;
                    border: none;
                    background: url('../assets/images/icon/close.png') no-repeat 0 0;
                    z-index:9;
                }

                .el-tabs__nav {
                    border: 1px solid #02616b;
                    border-left: none;
                    border-bottom: none;
                    border-top: none;
                }

                .el-tabs__header {
                    border-bottom: 1px solid #02616b;
                    background-color: #143655;
                    margin: 0;
                    .el-tabs__item {
                        color: #ccc;
                        border-left: 1px solid #02616b;
                        &:first-child{
                            border-left: none;
                        }
                        &.is-active{
                            border-bottom-color:#00ffff;
                            color: #0ff;
                        }
                    }
                }

                .el-tabs__content{
                    // padding: 10px;
                    color:#fff;

                    .gdxq {
                        padding-left: 20px; 
                        padding-right: 20px;

                        .block {
                            padding: 19px 0 24px 0;
                            font-size: 16px;
                            color:#fff;
                            border-bottom: 1px solid #133b53;

                            &:last-of-type{
                                border-bottom: none;
                            }

                            .block_title{
                                padding-left: 8px;
                                position: relative;
                                &::before{
                                    position: absolute;
                                    top: 50%;
                                    left: -8px;
                                    transform: translateY(-50%);
                                    display: block;
                                    content: '';
                                    height: 14px;
                                    width: 3px;
                                    background-color: #00ffff;
                                }
                            }

                            .block_body {
                                display: block;
                                width: 100%;
                                padding: 0 4px 0 4px;
                                table-layout: fixed;
                                td{
                                    // display: inline-block;
                                    padding: 0 4px;
                                    line-height: 28px;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    span {
                                        opacity: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>