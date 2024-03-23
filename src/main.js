import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
import './assets/style.css';
import { ElLoading } from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(ElLoading).mount('#app')
