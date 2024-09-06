<script setup>
const onClickLeft = () => history.back();
</script>
<template>
    <div>
        <van-nav-bar :fixed="true" :placeholder="true" title="案例详情" left-text="返回" left-arrow
            @click-left="onClickLeft" />
        <div class="w-full bg-#fff ">
            <p class="font-bold m0.5rem mt-0 pt0.5rem">
                中华全国供销合作总社原党组副书记、理事会主任刘士余受到留党察看二年、政务撤职处分
            </p>
            <p class="font-size-0.8rem color-#888 m0.5rem mt-0 pt0.5rem">来源：中央纪委国家监委网</p>
            <div class="w-full flex justify-center">
            <img class="rounded-0.3rem mt0.3rem w96% mb0.5rem" src="https://img2.baidu.com/it/u=1724090465,1850249659&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
            </div>
            <div>
                <p class="font-bold m0.5rem mt-0  color-red-5">立案审查调查</p>
                <p class="m0.5rem mt-0 font-size-0.9rem">日前，经中共中央批准，中央纪委国家监委对第十九届中央委员，中华全国供销合作总社原党组副书记、理事会主任刘士余严重违纪违法问题进行了立案审查调查。</p>
            </div>
            <div>
                <p class="font-bold m0.5rem mt-0  color-red-5">违纪违法行为</p>
                <p class="m0.5rem mt-0 font-size-0.9rem">经查，刘士余同志身为中央委员，背离初心使命，政治立场动摇，党性原则缺失，落实党中央重大决策部署不力，公开发表不当言论，缺乏政治警觉和保密意识；为官不廉，利用职权和职务影响为他人谋取私利，
                违规安排他人到金融系统工作和提拔职务，为亲属违规购房打招呼，收受礼品礼金。</p>
            </div>
            <div>
                <p class="font-bold m0.5rem mt-0  color-red-5">处分决定</p>
                <p class="m0.5rem mt-0 font-size-0.9rem">刘士余同志的行为严重违反党的政治纪律和政治规矩、组织纪律、廉洁纪律、工作纪律，并构成严重职务违法，且在党的十八大后不收敛、不收手，应予严肃处理。同时，鉴于刘士余同志能够主动投案，如实交代违纪违法问题，认错悔错态度较好，按照“惩前毖后，治病救人”的原则，对其可予从轻处理。依据《中国共产党纪律处分条例》《中华人民共和国监察法》等有关规定，经中央纪委常委会会议研究并报中央政治局会议审议，决定给予刘士余同志留党察看二年处分，由国家监委给予其政务撤职处分，降为一级调研员；终止其党的十九大代表资格；收缴其违纪违法所得。依据《中国共产党章程》第四十二条第三款的规定，给予刘士余同志留党察看二年的处分，待召开中央委员会全体会议时予以追认。</p>
            </div>
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

:deep(.van-action-bar) {
    height: 4rem;
}
</style>
