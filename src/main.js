import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import MapApiW from './components/MapApiW.vue'
import MapApiD from './components/MapApiD.vue'
import PetCard from './components/MapApiD.vue'
import  { useKakao } from 'vue3-kakao-maps'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.component(
    'MapApiW', MapApiW,
    'MapApiD', MapApiD,
    'PetCard', PetCard
)

app.use(pinia)
app.use(router)
useKakao('a3cae2c82574531e0fea0affe81cf396', ['clusterer', 'services', 'drawing'])

app.mount('#app')