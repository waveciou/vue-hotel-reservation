import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import HeyUI from 'heyui'

require('heyui/themes/index.css');

Vue.use(HeyUI)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: require('../public/img/error.svg'),
    // loading: require('../public/img/loading.gif'),
    attempt: 1
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
