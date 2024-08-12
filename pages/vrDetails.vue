<script setup>
const onClickLeft = () => history.back();
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="VR演示厅" left-text="返回" left-arrow
        @click-left="onClickLeft" />
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
.van-nav-bar {
    background-color: #fff;
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
}

:deep(.van-nav-bar__arrow) {
    color: black;
}

:deep(.van-nav-bar__text) {
    color: black;
}

:deep(.van-ellipsis) {
    color: black
}
</style>
