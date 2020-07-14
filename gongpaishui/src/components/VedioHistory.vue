<template>
  <div class="vedioHistoryPage">
        <div class="vedioHistory_body">
            <div class="vedioHistory_optBar">
              <div class="row">
                    <div class="label">监控对象：</div>
                    <el-select class="small" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select class="big" v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
              </div>

              <div class="row">
                    <div class="label">是否大用户：</div>
                    <el-radio-group v-model="radio1">
                        <el-radio-button label="全部"></el-radio-button>
                        <el-radio-button label="大用户"></el-radio-button>
                        <el-radio-button label="非大用户"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label">时间刻度：</div>
                    <el-radio-group v-model="radio2">
                        <el-radio-button label="5分钟"></el-radio-button>
                        <el-radio-button label="30分钟"></el-radio-button>
                        <el-radio-button label="1小时"></el-radio-button>
                        <el-radio-button label="1天"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label"> <span>状态态</span> 状态：</div>
                    <el-radio-group v-model="radio3">
                        <el-radio-button label="全部状态"></el-radio-button>
                        <el-radio-button label="正常"></el-radio-button>
                        <el-radio-button label="告警"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label">监控日期：</div>
                    <el-radio-group v-model="radio4">
                        <el-radio-button label="2020/1/1"></el-radio-button>
                        <el-radio-button label="2020/1/2"></el-radio-button>
                        <el-radio-button label="2020/1/3"></el-radio-button>
                        <el-radio-button label="2020/1/4"></el-radio-button>
                        <el-radio-button label="2020/1/5"></el-radio-button>
                    </el-radio-group>
              </div>

              <div class="row">
                    <div class="label">自定义时间：</div>
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

              <div class="row">
                    <div class="label">监控指标：</div>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="瞬时流量"></el-checkbox>
                        <el-checkbox label="间隔流量"></el-checkbox>
                        <el-checkbox label="压力夜间"></el-checkbox>
                        <el-checkbox label="最小流量"></el-checkbox>
                        <el-checkbox label="水质"></el-checkbox>
                    </el-checkbox-group>
              </div>
            </div>

            <div class="vedioHistory_table" v-show="showTable">
                <el-table
                    :data="tableData1"
                    class="table2"
                    height="1070"
                    size="small"
                    stripe
                >
                    <el-table-column
                        prop="address"
                        label="监控对象"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="监控指标"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="采集时间"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="上报时间"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="监控值"
                    > 
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="单位"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="状态"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="上限值"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="下限值"
                    >
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

            <div class="vedioHistory_echart" v-show="!showTable">
                图表位置
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'vedioHistory',
    components: {
    },
    props: ['showTable'],// 控制展示图标或表格
    data(){
        return {
            radio1: '全部',
            radio2: '30分钟',
            radio3: '全部状态',
            radio4: '2020/1/1',
            startTime:'',
            endTime:'',
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
            checkList: [],
            // 工单状态样式字段 danger primary info
            tableData1:[{},{},{},{},{},{},{},{},{},{},{},{},{}],
            dialogVisible:false,
            activeName: 'first',
            currentPage: 3,
        }
    },
    methods:{
        
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

<style lang='scss'>
    .vedioHistoryPage{

        .vedioHistory_body {

            .vedioHistory_optBar {
                @include clearFix;
                position: relative;
                height: 194px;
                padding: 25px 29px 0;

                .row {
                    @include clearFix;
                    float: left;
                    height: 28px;
                    width: 50%;
                    margin-bottom: 12px;

                    .label{
                        @include clearFix;
                        float: left;
                        height: 28px;
                        line-height: 28px;
                        color: #ffffff;
                        font-size: 16px;
                        span {
                            float: left;
                            opacity: 0;
                        }
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
                
                    .el-input__inner{
                        height: 28px;
                        padding-left: 7px;
                        padding-right: 16px;
                        line-height: 28px;
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
                    
                    .small {
                        margin-right: 10px;

                        .el-input__inner{
                            width: 150px;
                        }
                    }

                    .big .el-input__inner{
                        width: 264px;
                    }

                    .el-input__prefix{
                        left: auto;
                        right: 5px;
                    }

                    .el-input__icon{
                        line-height: 28px;
                        width: 16px;
                        color: #6cd3ea;
                    }

                    .timeBar{
                        height: 28px;
                        color: #76e6ff;

                        .el-date-editor{
                            width: 126px;
                        }

                        .el-input__inner{
                            width: 126px;
                            height: 28px;
                            padding-left: 7px;
                            padding-right: 16px;
                            line-height: 28px;
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
                            line-height: 28px;
                            width: 16px;
                            color: #6cd3ea;
                        }
                    }

                    .el-checkbox {
                        color: #76e6ff;
                    }

                    .el-checkbox__input.is-checked+.el-checkbox__label {
                        color: #ad8b34;
                    }
                    
                    .el-checkbox__inner {
                        background-color: #1f3451;
                        border: 1px solid #054a64;
                    }

                    .el-checkbox__inner:hover,.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                        border: 1px solid #ad8b34;  
                        color: #ad8b34;
                        background: url('../assets/images/icon/gdbtnHover.png');

                        &::after {
                            border-color: #ad8b34;
                        }
                    }

                }
            }

            .vedioHistory_table {
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

            .vedioHistory_echart{
                height: 1100px;
                padding: 20px;
                color: #fff;
                text-align: center;
            }
        }
    }
</style>