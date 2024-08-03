<script setup>
const onClickLeft = () => history.back();
definePageMeta({
    layout: 'hideFooter'
})
</script>
<template>
    <div>
        <van-nav-bar title="VR演示厅" left-text="返回" left-arrow @click-left="onClickLeft" />
        <iframe id="inlineFrameExample" title="Inline Frame Example"
            src="https://www.720yun.com/t/a9vkcefyOiw?scene_id=60336613">
        </iframe>
    </div>
</template>
<style scoped>
iframe {
  width: 100%; /* takes precedence over the width set with the HTML width attribute */
  height: 43rem;
}

</style>
