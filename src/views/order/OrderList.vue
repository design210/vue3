<template>
  <section>
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
