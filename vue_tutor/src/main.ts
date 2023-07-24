import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'


const app = createApp(App)
app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriend)


app.use(createPinia())

app.mount('#app')
