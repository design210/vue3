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
<script setup>
import { ref, defineProps, reactive } from "vue";
//props
const props = defineProps({
  list: Array,
});
const itemList = ref(props.list);
const select = ref(props.list[0].value);

</script>

<style lang="scss" scoped>
.selects{
  max-width: 150px;
  min-width:100px;
}
.selects:deep(.v-input){
  height:30px;
  .v-input__control{
    border: 1px solid #000;
    height:30px;
    background-color:#fff;
    .v-field{
      height:30px;
      padding-right:8px;
      .v-field__overlay{
        background-color:#fff;
      }
      .v-field__outline{
        display:none;
      }
      .v-field__field{
        .v-field__input{
          padding:3px 6px 0 16px;
        }
      }
      .v-field__append-inner{
        padding-top:10px;
        height:30px;
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
    }
  }
}
@include mobile {
  .selects {
    min-width: 110px;
  }
}
</style>
