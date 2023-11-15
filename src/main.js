import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

window.CESIUM_BASE_URL = '/Cesium/'
import * as THREE from 'three'
import * as Cesium from 'cesium'

console.log('THREE: ', THREE);
console.log('Cesium: ', Cesium);
window.THREE = THREE
window.Cesium = Cesium


createApp(App).mount('#app')
