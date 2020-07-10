import  Vue from 'vue'
import Button from './button'
import icon from './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',icon)

new Vue({
    el: '#app',
    data: {
        loading1:false,
        loading2:false,
        loading3:false,
    }
})