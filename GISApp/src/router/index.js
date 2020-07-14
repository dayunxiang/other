import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/index/Index';
import NearbyFacilities from '../views/nearbyFacilities/Index';
import RealTimeMonitoring from '../views/realTimeMonitoring/Index';
import AnalysedDMA from '../views/analysedDMA/Index';
import RepairRecord from '../views/repairRecord/Index';
import EventSearch from '../views/eventSearch/Index';
import EventList from '../views/eventList/Index';
import AlarmLog from '../views/alarmLog/Index';
import MonitoringHistory from '../views/monitoringHistory/Index';
import EventDetails from '../views/eventDetails/Index';
import IncidentReport from '../views/incidentReport/Index';
import Search from '../views/search/Index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/nearbyFacilities',
        name: 'NearbyFacilities',
        component: NearbyFacilities
    },
    {
        path: '/realTimeMonitoring',
        name: 'RealTimeMonitoring',
        component: RealTimeMonitoring,
    },
    {
        path: '/analysedDMA',
        name: 'AnalysedDMA',
        component: AnalysedDMA
    },
    {
        path: '/repairRecord',
        name: 'RepairRecord',
        component: RepairRecord
    },
    {
        path: '/eventSearch',
        name: 'EventSearch',
        component: EventSearch
    },
    {
        path: '/eventList',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/alarmLog',
        name: 'AlarmLog',
        component: AlarmLog
    },
    {
        path: '/monitoringHistory',
        name: 'MonitoringHistory',
        component: MonitoringHistory
    },
    {
        path: '/eventDetails',
        name: 'EventDetails',
        component: EventDetails
    },
    {
        path: '/incidentReport',
        name: 'IncidentReport',
        component: IncidentReport
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
