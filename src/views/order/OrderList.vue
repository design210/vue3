<template>
  <section>
    <button @click="cooconAPI">
      쿠콘 API test
    </button>
    <div>{{ res.data }}</div>
    <div>{{ testVuex }}, {{ $name }}</div>
    <div>
      <button @click="handleChange">
        변경
      </button>
    </div>
    <ParentTestVue />
    <button @click="go">
      go
    </button>
  </section>
</template>

<script lang="ts" setup>
import axios from 'axios';
import ParentTestVue from '@/components/ParentTest.vue';
import {ref, defineProps, computed, onMounted, reactive, getCurrentInstance } from 'vue';
import { useStore } from "vuex";
import { useRef } from '@/hooks/hookExample.js';
import { useRouter } from 'vue-router';
const {ex, aaa} = useRef();
console.log(ex.a, aaa.value);


//global property
const global = getCurrentInstance()?.proxy;
console.log('===>', global?.$dayjs().format('YYYY.MM.DD'));


const store = useStore();
const testVuex = computed(() => {return store.getters["common/test"];});
const handleChange = () => {
  store.commit('common/setTestState', 1);
};

const res = reactive({data:null});
const cooconAPI = async() => {
  await axios.post('https://dev2.coocon.co.kr:8443/api/scrap/domestic/public/getRealestatePrice', {
    "API_KEY": "pIFDUcFgeUGafMDEHKhi",
    "API_ID": "0120",
    "SEARCH_GUBUN": "A",
    "TRADE_TYPE": "A",
    "SIDO_NAME": "",
    "GUGN_NAME": "",
    "DONG_NAME": "",
    "DONG_CODE": "1168010300",
    "SEARCH_YEAR": "2017",
    "SEARCH_SEASON": "3",
    "DANJI_NAME": "",
    "BUN_JI": "",
    "BON_NO": "",
    "BU_NO": "",
    "ROAD_NM": "",
    "SPAGE": "1",
    "EPAGE": "5"
  })
    .then(function (response) {      
      res.data = response.data;
      console.log(response.data);
    })
    .catch(function (error) {
      console.log('e', error);
    });  
};

onMounted(() => {  
  //store.commit('common/setTestState', 0); //초기화
});


//router ex
const router = useRouter();
const go = () => {
  router.replace('/RouterComponent');
  
};


const props = defineProps({
  subject1: String,
  subject2: String
});
const subjectA = ref(props.subject1);
const subjectB = ref(props.subject2);
</script>

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
.a:deep(.b){}
</style>
