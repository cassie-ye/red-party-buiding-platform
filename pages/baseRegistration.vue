<script setup>
const onClickLeft = () => history.back();
// "提交材料", "等待审核", "入驻成功" 第几步
const activeIndex = ref(0)
const stepList = ref([
    "提交材料", "等待审核", "入驻成功"
])

const active = ref(0);
const checked = ref('1');
// 基地图片数组
const fileList = ref([]);
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="入驻申请" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div
            class="w-full h3rem bg-red-50 p0.5rem px1.5rem flex justify-between items-center font-size-0.7rem color-#babdc4">
            <div v-for="(item, index) in stepList" :key="index">
                <div :class="index == activeIndex ? 'color-red-5 font-size-1rem font-bold' : ''">
                    {{ index + 1 }}&nbsp;&nbsp;{{ item }}
                </div>
            </div>
        </div>
        <div v-if="activeIndex == 0">
            <van-steps :active="active">
                <van-step>基地信息</van-step>
                <van-step>资质认证</van-step>
                <van-step>联系方式</van-step>
                <van-step>签署协议</van-step>
            </van-steps>
            <!--
            基地信息
            基地名称、地址、设施情况、基地红色背景简介、实地照片
         -->
            <div v-if="active == 0" class=" relative w-vw h-vh bg-#fff">
                <van-field v-model="text" label="基地名称" />
                <van-field v-model="text" label="基地地址" />
                <van-field name="radio" label="设施情况">
                    <template #input>
                        <van-radio-group v-model="checked" direction="horizontal">
                            <van-radio name="1">良好</van-radio>
                            <van-radio name="2">需要维修</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field v-model="message" rows="1" autosize label="红色背景简介" type="textarea" placeholder="请输入留言" />
                <div class="bg-#fff pl1rem font-size-0.9rem">
                    <p class="py1rem">上传基地照片(最多5张)</p>
                    <van-uploader v-model="fileList" multiple :max-count="5" />
                </div>
                <div class="absolute left-0.5% top-24rem w99% flex px0.5rem justify-between items-center ">
                    <div
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        上一步</div>
                    <div @click="active = 1"
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        下一步
                    </div>
                </div>
            </div>
            <div v-if="active == 1" class="w-vw h-vh bg-#fff relative">
                <div
                    class="bg-#fff  font-size-0.9rem py0.5rem w90% ml5% border-b-solid border-b-0.05rem border-b-#DEDEDE">
                    <p class="pb0.5rem">基地营业执照拍照上传</p>
                    <van-uploader v-model="fileList" multiple :max-count="5" />
                </div>
                <div class="bg-#fff  font-size-0.9rem py0.5rem w90% ml5% ">
                    <p class="pb0.5rem">基地安全管理证书拍照上传</p>
                    <van-uploader v-model="fileList" multiple :max-count="5" />
                </div>
                <div class="absolute left-0.5% top-24rem w99% flex px0.5rem justify-between items-center ">
                    <div @click="active = 0"
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        上一步</div>
                    <div @click="active = 2"
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        下一步</div>
                </div>
            </div>
            <div v-if="active == 2" class="w-vw h-vh bg-#fff relative">
                <van-field v-model="value" label="联系人" placeholder="请输入联系人" />
                <van-field v-model="value" label="电话" placeholder="请输入联系电话" />
                <van-field v-model="value" label="身份证" placeholder="请输入身份证" />
                <div class="bg-#fff  font-size-0.9rem py0.5rem w90% ml5% ">
                    <p class="pb0.5rem">身份证正反面拍照上传</p>
                    <van-uploader v-model="fileList" multiple :max-count="5" />
                </div>
                <div class="absolute left-0.5% top-24rem w99% flex px0.5rem justify-between items-center ">
                    <div @click="active = 1"
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        上一步</div>
                    <div @click="active = 3"
                        class="px3.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                        下一步</div>
                </div>
            </div>
            <div v-if="active == 3" class="w-vw h-vh bg-#fff relative">
                <div class="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
                    <h1 class="text-2xl font-bold mb-4">用户协议</h1>
                    <div class="h-80 overflow-y-auto scrollbar-custom">
                        <p>
                            <!-- 在这里插入用户协议的内容 -->
                            1. 双方旨在通过合作，共同推进红色文化的传承与发展，利用甲方的平台资源和乙方的红色资源，为广大学员提供高质量的红色党建研学服务，实现资源共享、优势互补、互利共赢。
                            <br />
                            2. 双方共同策划和组织红色党建研学活动，包括但不限于现场教学、专题讲座、互动体验等，具体活动内容和形式由双方协商确定。
                            <br />
                            3. 乙方同意入驻甲方平台，甲方为乙方提供专属页面或板块，用于展示乙方的红色资源、活动信息及研究成果等。
                            <br />
                            4. 乙方承诺向甲方提供真实、准确、丰富的红色资源信息，甲方则利用平台优势进行宣传推广，吸引更多学员参与研学活动
                            <br />
                            5. 甲方为乙方提供必要的技术支持和客户服务，确保乙方在平台上的正常运营和学员的良好体验。
                            <br />
                            6. 双方应对合作过程中获取的对方商业秘密、技术资料等保密信息严格保密，未经对方书面同意，不得向任何第三方披露或用于其他用途。
                            <br />
                            7. 双方因执行本协议发生的任何争议，应首先通过友好协商解决；协商不成时，可提交甲方所在地人民法院诉讼解决。
                            <!-- 更多内容 -->
                        </p>
                    </div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <form>
                        <div class="flex items-center mb-4">
                            <input id="agree" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                            <label for="agree" class="ml-2 text-sm font-medium text-gray-900">我同意并签署用户协议</label>
                        </div>
                        <div class="absolute left-0.5% top-29rem w99% flex px0.5rem justify-between items-center ">
                            <div @click="active = 1"
                                class="px2.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                                上一步</div>
                            <div @click="activeIndex = 1"
                                class="px2.7rem py0.3rem rounded-1rem bg-red-5 flex justify-center items-center color-#fff font-size-0.9rem">
                                提交入驻申请</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div v-if="activeIndex == 1" class="w-80% ml10% flex flex-col items-center mt5rem ">
            <div class="w8rem h8rem bg-green rounded-50% flex justify-center items-center">
                <van-icon name="success" size="50" color="#fff"/>
            </div>
            <p class="mt2rem">您提交的基地资料已经成功上传，正在等待系统管理员审核，请耐心等待~</p>
        </div>
    </div>
</template>
<style scoped>
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
