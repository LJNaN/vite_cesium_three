import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as THREE from 'three'
import * as CESIUM from 'cesium'

console.log('THREE: ', THREE);
console.log('CESIUM: ', CESIUM);


createApp(App).mount('#app')
