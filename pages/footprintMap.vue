<script setup>
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';

const chartContainer = ref(null);

onMounted(() => {
  const { $echarts } = useNuxtApp();

  const chart = $echarts.init(chartContainer.value);

  const option = {
    title: {
      text: '中国地图示例'
    },
    tooltip: {},
    geo: {
      map: 'china', // 设置地图类型
      roam: true,
      label: {
        show: true
      }
    },
    series: [
      {
        type: 'map',
        map: 'china', // 设置地图类型
        label: {
          show: true
        }
      }
    ]
  };

  chart.setOption(option);
});
</script>
<template>
    <div ref="chartContainer" style="width: 600px; height: 400px;"></div>
  </template>


