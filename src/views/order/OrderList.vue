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
    <button @click="setArr">
      setArr
    </button>
    <div>{{ arr }}</div>
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

const arr = ref<Array<Number>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const setArr = () => {
  arr.value.splice(4, 1);
  arr.value.splice(0, 0, 5);
  console.log(arr.value);
};

// 맵핑 함수의 첫 번째 인자 언더스코어(_) 는 특별한 인자가 아니라,
// 불필요한 인자의 공간을 채우기 위한 용도입니다.
const currYear = new Date().getFullYear();
const lastYear = 2020;

const year = Array.from({ length: currYear - lastYear + 1 }, (_, index) => lastYear + index).reverse();
console.log('year', year);


</script>

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
.a:deep(.b){}
</style>
