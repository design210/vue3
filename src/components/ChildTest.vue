<template>
  <div>
    <slot name="title"></slot> 
  </div>
</template>
    
<script setup lang='ts'>
import {defineExpose} from 'vue';
const childrenFunc = () => {
  alert('자식함수 호출');
};
defineExpose({childrenFunc});
</script>
    
<style>
    
</style>