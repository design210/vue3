<template>
  <section>
    <h2 class="sub-title">
      책 검색
    </h2>
    <section class="sub-container">
      <!--      &lt;!&ndash; 책 검색 &ndash;&gt;-->
      <!--      <SearchBasicGroup :itemList="itemList" />-->
      <!--      &lt;!&ndash; //책 검색 &ndash;&gt;-->

      <!--      &lt;!&ndash; 책 리스트 &ndash;&gt;-->
      <!--      <BookList />-->
      <!--      &lt;!&ndash; //책 리스트 &ndash;&gt;-->
    </section>
  </section>
</template>

<script>
// import BookList from "@/components/search/BookList";
// import SearchBasicGroup from "@/components/form/SearchBasicGroup";
export default {
  //components: { SearchBasicGroup, BookList },
  data() {
    return {
      itemList: [
        { item: "책 제목", value: "01" },
        { item: "ISBN", value: "02" },
        { item: "저자", value: "03" },
        { item: "출판사", value: "04" },
      ],
    };
  },
};
</script>
