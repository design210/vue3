<template>
  <ChildTestVue ref="child">
    <template #title>
      <div>
        <h1>{{ auth.name }}, {{ cut }}</h1>
        <button @click="handlenameChange">
          이름변경
        </button>
        <button @click="childCall">
          자식 호출
        </button>
      </div>
    </template>    
  </ChildTestVue>  
</template>
    
<script setup lang='ts'>
import ChildTestVue from './ChildTest.vue';
import { ref, reactive, getCurrentInstance } from "vue";
const global = getCurrentInstance()?.proxy;
console.log(global?.$route);

const auth = reactive({name:'Jone'});
const handlenameChange = () => {
  auth.name = 'Kyle';
};
const cut = auth.name; //반응성 끊기


const child = ref(null);
/**
 * @description 자식 컴포넌트 함수 호출
 */
const childCall = () => {
  child?.value?.childrenFunc();
};
</script>
    
<style>
    
</style>