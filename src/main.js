import { createApp } from 'vue';
import App from './App.vue';
import SectionTemplate from "./components/SectionTemplate.vue";

const app = createApp(App);

app.component("section-template", SectionTemplate);

app.mount('#app')