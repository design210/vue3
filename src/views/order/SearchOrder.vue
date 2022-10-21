<template>
  <section>
    <h2 class="sub-title">
      책 검색
    </h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup :items="items.list" />
      <!-- //책 검색 -->

      <!-- 책 리스트 -->
      <BookList />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script setup>
import {reactive} from 'vue';
import BookList from '@/components/search/BookList.vue';
import SearchBasicGroup from "@/components/form/SearchBasicGroup.vue";
const items = reactive({
  list: [
    { item: "책 제목", value: "01" },
    { item: "ISBN", value: "02" },
    { item: "저자", value: "03" },
    { item: "출판사", value: "04" },
  ],
});
</script>
