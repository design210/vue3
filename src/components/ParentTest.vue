<template>
  <ChildTestVue>
    <template #title>
      <div>
        <h1>제목입니다</h1>
      </div>
    </template>    
  </ChildTestVue>  
</template>
    
<script setup lang='ts'>
import ChildTestVue from './ChildTest.vue';
</script>
    
<style>
    
</style>