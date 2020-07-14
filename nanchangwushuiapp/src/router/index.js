import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/index/Index';
import My from '../views/my/Index';
import ChangePassword from '../views/changePassword/Index';
import Login from '../views/login/Index';
import AllWaterworks from '../views/allWaterworks/Index';
import RealTimeMonitoring from '../views/realTimeMonitoring/Index';
import EquipmentInfo from '../views/equipmentInfo/Index';
import DeviceList from '../views/deviceList/Index';
import SpareParts from '../views/spareParts/Index';
import Test from '../test/Index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/my',
        name: 'My',
        component: My
    },
    {
        path: '/changePassword',
        name: 'ChangePassword',
        component: ChangePassword
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/allWaterworks',
        name: 'AllWaterworks',
        component: AllWaterworks
    },
    {
        path: '/realTimeMonitoring',
        name: 'RealTimeMonitoring',
        component: RealTimeMonitoring
    },
    {
        path: '/equipmentInfo',
        name: 'EquipmentInfo',
        component: EquipmentInfo
    },
    {
        path: '/deviceList',
        name: 'DeviceList',
        component: DeviceList
    },
    {
        path: '/spareParts',
        name: 'SpareParts',
        component: SpareParts
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
