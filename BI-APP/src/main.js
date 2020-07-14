import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import Vant from 'vant';
import 'vant/lib/index.css';

import './assets/style/_commonReset.scss';
import './assets/style/_resetMobile.scss';
import './assets/iconfont/iconfont.css';

Vue.config.productionTip = false;
Vue.use(Vant);

const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
const recalc = function () {
    const clientWidth = document.documentElement.clientWidth;

    if (!clientWidth) {
        return false;
    }

    if (clientWidth >= 750) {
        document.documentElement.style.fontSize = '100px';
    } else {
        document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
};

// 添加事件句柄
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
document.body.addEventListener('touchstart', function () { }, false);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
