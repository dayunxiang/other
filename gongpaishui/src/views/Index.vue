<template>
    <div class="component-content">
        <header class="header">
             <div class="head_left">
                <img src="../assets/images/icon/weather.png">
                <div class="weatherInfo">
                    <span class="nowWD">20℃</span>
                    <span>16~26℃</span>
                    <span>无持续风向，微风</span>
                </div>
            </div>
            <div class="head_mid">嘉善智慧水务供排水调度管理中心</div>
            <div class="head_right">
                <span>2019年12月12日</span>
                <span>星期三</span>
                <span>上午11:05</span>
            </div>
        </header>

        <div class="content-wrap">
            <LeftSide></LeftSide>
            <CenterSide></CenterSide>
            <RightSide></RightSide>
        </div>
    </div>
</template>

<script>
    import LeftSide from '../components/LeftSide';
    import CenterSide from '../components/CenterSide';
    import RightSide from '../components/RightSide';

    export default {
        name: 'Index',
        components: {
            LeftSide,
            CenterSide,
            RightSide
        }
    }
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
        width: 5520px;
        height: 100vh;
        min-height: 2430px;
        overflow: hidden;
        background: url("../assets/images/background.jpg") no-repeat center / 100% 100%;
    }
    .header {
        display: flex;
        height: 200px;
        background: url("../assets/images/head-background.png") no-repeat center / 100% 100%;
        .head_left {
            height: 100px;
            width: 30%;
            padding-left: 80px;
            display: flex;
            align-items: center;
            img{
                width: 36px;
                height: 36px;
            }
            .weatherInfo {
                span {
                    font-size: 36px;
                    color: #fff;
                    margin-right: 40px;
                }
                .nowWD {
                    color: #00ffff;
                    font-size: 40px;
                    font-weight: bold;
                    margin-left: 15px;
                }
            }
        }
        .head_mid {
            color: #00d5ff;
            font-size: 80px;
            font-weight: bold;
            line-height: 200px;
            width: 40%;
            text-align: center;
        }
        .head_right {
            width: 30%;
            height: 100px;
            line-height: 100px;
            padding-right: 110px;
            text-align: right;
            span {
                font-size: 36px;
                color: #fff;
                margin-left: 20px;
            }
        }
    }
    .content-wrap {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        padding: 20px;
        height: calc(100% - 200px);
    }
    .left-side-wrap {
        width: 25%;
    }
    .center-side-wrap {
        width: 50%;
    }
    .right-side-wrap {
        width: 25%;
    }
</style>
