<template>
   <div class="diTuPage">
       <div class="echart-ditu"></div>

       <div class="psTop">
           <div class="topSort">地图分类</div>
           <div class="psSort first  xz">供水</div>
           <div class="psSort second">供排</div>
           <div class="psSort thirdly">排水</div>
       </div>

       <div class="psBottomM">
           <div class="block selected"><img class="img" src="../assets/images/icon/u1.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u2.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u3.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u4.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u5.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u6.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u7.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u8.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u9.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u10.png" alt=""></div>
           <div class="block"><img class="img" src="../assets/images/icon/u11.png" alt=""></div>
       </div>

       <div class="psBottomR">
            <img src="../assets/images/icon/map_icon1.png" alt="">
            <img src="../assets/images/icon/map_icon2.png" alt="">
       </div>
   </div>
</template>

<script>
export default {
    name: 'diTu',
    components: {
    },
}
</script>

<style lang='scss'>
    .diTuPage {
        position: relative;
        width: 100%;
        height: 100%;
        .echart-ditu {
            width: 100%;
            height: 100%;
            background-color: #101e38;
        }
        .psTop {
            @include clearFix;
            position: absolute;
            background: url('../assets/images/icon/xzbg.png') no-repeat 100% 100%;
            top: 0;
            left: 0;
            width: 527px;
            height: 63px;
            display: flex;
            .topSort{
                line-height: 63px;
                text-align: center;
                width: 100px;
                color: #a3cbff;
                font-size: 18px;
                margin-right: 32px;
            }
            .psSort{
                color: #ffffff;
                background: url('../assets/images/icon/fxz.png') no-repeat 100% 100%;
                width: 148px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                position: absolute;
                &.first{
                   left: 115px;
                }
                &.second{
                    right: 130px;
                }
                &.thirdly{
                    right: 0;
                }
                &.xz{
                    background: url('../assets/images/icon/xz_03.png') no-repeat 100% 100%;
                }
            }
        }


        .psBottomM {
            @include clearFix;
            position: absolute;
            bottom: 21px;
            left: 50%;
            transform: translateX(-50%);

            .block {
                float: left;
                width: 92px;
                height: 92px;
                background: url('../assets/images/icon/uxz.png') no-repeat;
                margin-right: 10px;
                &.selected{
                      background: url('../assets/images/icon/ufxz.png') no-repeat;
                }
                .img{
                    width: 48px;
                    height: 45px;
                    margin-top: 24px;
                    margin-left: 24px;
                }
            }
        }

        .psBottomR {
            position: absolute;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            img {
                margin-top: 12px;
                margin-left: 15px;
                width: 180px;
                height: 120px;
            }
        }
    }
</style>