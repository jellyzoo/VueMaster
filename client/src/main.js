import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import vuetify from './plugins/vuetify'
import {
  loadFonts
} from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(store)
app.use(vuetify)
app.mount('#app')

window.Kakao.init('6f2322b3d18a7c34deb4352c1ca34f3a')