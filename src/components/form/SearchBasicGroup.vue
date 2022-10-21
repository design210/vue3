<template>
  <section class="search-group">
    <Selects :list="itemList" />
    <input
      type="text"
      class="basic"
    />
    <button class="basic">
      검색
    </button>
  </section>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Selects from "@/components/form/Selects.vue";
//props
const props = defineProps({
  items: Array,
});
const itemList = ref(props.items);
</script>

<style lang="scss" scoped>
.search-group {
  display: flex;
  input[type="text"] {
    width: 100%;
    max-width: 380px;
  }
  .basic {
    margin-left: 8px;
  }
}
@include mobile {
  .search-group {
    input[type="text"] {
      max-width: calc(100% - 100px);
    }
    .basic {
      margin-left: 5px;
    }
  }
}
</style>

