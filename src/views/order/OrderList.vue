<template>
  <section>
    <div>{{ testVuex }}</div>
    <div>
      <button @click="handleChange">
        변경
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {ref, defineProps, computed} from 'vue';
import { useStore } from "vuex";
const store = useStore();
const testVuex = computed(() => {return store.getters["common/test"];});
const handleChange = () => {
  store.commit('common/setTestState', 1);
};

const props = defineProps({
  subject1: String,
  subject2: String
});
const subjectA = ref(props.subject1);
const subjectB = ref(props.subject2);
</script>

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
</style>
