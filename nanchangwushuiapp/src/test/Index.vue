<template>
    <div class="main-test">
        <p class="test-tit">页面跳转按钮</p>

        <router-link class="test-router" to='/'><p>Index</p></router-link>
        <router-link class="test-router" to='/my'><p>My</p></router-link>
        <router-link class="test-router" to='/changePassword'><p>ChangePassword</p></router-link>
        <router-link class="test-router" to='/login'><p>Login</p></router-link>
        <router-link class="test-router" to='/allWaterworks'><p>AllWaterworks</p></router-link>
        <router-link class="test-router" to='/realTimeMonitoring'><p>RealTimeMonitoring</p></router-link>
        <router-link class="test-router" to='/equipmentInfo'><p>EquipmentInfo</p></router-link>
        <router-link class="test-router" to='/deviceList'><p>DeviceList</p></router-link>
        <router-link class="test-router" to='/spareParts'>SpareParts</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Test',
    };
</script>

<style lang="scss" scoped>
    .main-test {
        padding: 10px 20px;

        .test-tit {
            font-size: 24px;
            color: #26a2ff;
            text-align: center;
            font-weight: bold;
        }
    }
    .test-router {
        margin: 10px;
        display: block;
        padding: 10px 0;
        text-align: center;
        color: #fff;
        background: #26a2ff;
        border-radius: 10px;

        &:active {
            opacity: .7;
        }
    }
</style>
