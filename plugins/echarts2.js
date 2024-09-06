import * as echarts from 'echarts';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('echarts2', echarts);
});
