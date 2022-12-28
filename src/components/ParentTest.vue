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
import { ref } from "vue";
const child = ref(null);
const childCall = () => {
  child?.value?.childrenFunc();
};
</script>
    
<style>
    
</style>