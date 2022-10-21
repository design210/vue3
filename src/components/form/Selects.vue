<template>
  <div class="selects">
    <v-select
      :items="[{item:'11', value:11},{item:'22', value:22}]"
      item-text="item"
      item-value="value"
      persistent-hint
      return-object
      single-line
    />
    <!--    <span-->
    <!--      v-for="(item, i) in itemList"-->
    <!--      :key="i"-->
    <!--    >-->
    <!--      {{ item.item }} {{ item.value }}-->
    <!--    </span>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { item: "책 제목", value: "01" },
        { item: "ISBN", value: "02" },
        { item: "저자", value: "03" },
        { item: "출판사", value: "04" },
      ],
    };
  },
};
</script>
<!--<script lang="ts" setup>-->
<!--import { ref, defineProps, reactive } from "vue";-->
<!--//props-->
<!--const props = defineProps({-->
<!--  list: Array,-->
<!--});-->
<!--const itemList = ref(props.list);-->
<!--const select = ref('');-->
<!--interface kkk {-->
<!--  list: any,-->
<!--}-->
<!--const test = reactive<{ list: Array }>({-->
<!--  list: [-->
<!--    { item: "책 제목", value: "01" },-->
<!--    { item: "ISBN", value: "02" },-->
<!--    { item: "저자", value: "03" },-->
<!--    { item: "출판사", value: "04" },-->
<!--  ],-->
<!--});-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.selects::v-deep {-->
<!--  max-width: 150px;-->
<!--  .v-input__slot {-->
<!--    margin-bottom: 0;-->
<!--    min-height: 30px !important;-->
<!--  }-->
<!--  .v-text-field&#45;&#45;outlined {-->
<!--    fieldset {-->
<!--      border: 1px solid #000;-->
<!--      border-radius: 0;-->
<!--      background-color: #fff;-->
<!--      height: 35px !important;-->
<!--    }-->
<!--    .v-select__slot {-->
<!--      height: 29px !important;-->
<!--    }-->
<!--  }-->
<!--  .v-select__selections {-->
<!--    padding: 0 !important;-->
<!--    .v-select__selection {-->
<!--      @include NotoSans(1.6, 500, #000);-->
<!--    }-->
<!--  }-->
<!--  .v-text-field__details {-->
<!--    display: none;-->
<!--  }-->
<!--  .v-input__append-inner {-->
<!--    margin-top: 4px !important;-->
<!--  }-->
<!--  .v-select__selection&#45;&#45;comma {-->
<!--    margin: 3px 4px 3px 0 !important;-->
<!--  }-->
<!--  .v-input__append-inner {-->
<!--    i {-->
<!--      background: url(../../assets/images/arrow_down.svg);-->
<!--      width: 15px;-->
<!--      height: 9px;-->
<!--      &:after {-->
<!--        content: "" !important;-->
<!--      }-->
<!--      &:before {-->
<!--        content: "" !important;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--@include mobile {-->
<!--  .selects::v-deep {-->
<!--    min-width: 110px;-->
<!--  }-->
<!--}-->
<!--</style>-->
