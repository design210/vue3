<template>
  <ChildTestVue ref="child">
    <template #title>
      <div>
        <h1>제목입니다</h1>
        <button @click="childCall">
          호출
        </button>
      </div>
    </template>    
  </ChildTestVue>  
</template>
    
<script setup lang='ts'>
import ChildTestVue from './ChildTest.vue';
import { ref, getCurrentInstance } from "vue";
const global = getCurrentInstance()?.proxy;
console.log(global?.$route);

const child = ref(null);
const childCall = () => {
  child?.value?.childrenFunc();
};
</script>
    
<style>
    
</style>