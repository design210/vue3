<template>
  <div class="selects">
    <v-select
      v-model="select"
      :items="itemList"
      item-title="item"
      item-value="value"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, reactive } from "vue";
//props
const props = defineProps({
  list: Array,
});
const itemList = ref(props.list);
const select = ref('');

</script>

<style lang="scss" scoped>
.selects{
  max-width: 150px;
}
.selects:deep(.v-input){
  height:30px;
  .v-field{
    height:30px;
  }
}
.selects:deep(.v-text-field--outlined){
  fieldset {
    border: 1px solid #000;
    border-radius: 0;
    background-color: #fff;
    height: 35px !important;
  }
  .v-select__slot {
    height: 29px !important;
  }
}
.selects:deep(.v-input__append-inner){
  i {
    background: url(../../assets/images/arrow_down.svg);
    width: 15px;
    height: 9px;

    &:after {
      content: "" !important;
    }

    &:before {
      content: "" !important;
    }
  }
}
.selects {
  .v-select__selections {
    padding: 0 !important;
    .v-select__selection {
      @include NotoSans(1.6, 500, #000);
    }
  }
  .v-text-field__details {
    display: none;
  }
  .v-input__append-inner {
    margin-top: 4px !important;
  }
  .v-select__selection--comma {
    margin: 3px 4px 3px 0 !important;
  }
}
@include mobile {
  .selects {
    min-width: 110px;
  }
}
</style>
