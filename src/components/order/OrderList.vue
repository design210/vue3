<template>
  <table class="basic">
    <caption>
      출판사별 주문리스트
    </caption>
    <thead>
      <tr>
        <th>출판사</th>
        <th>종수</th>
        <th>{{ subjectA }}</th>
        <th>{{ subjectB }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
    </tbody>
    <tfoot v-if="list.length === 0">
      <tr>
        <td colspan="4">
          주문 리스트가 없습니다.
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts" setup>
import {ref, defineProps} from 'vue';
const list = ref();
const props = defineProps({
  subject1: String,
  subject2: String
});
const subjectA = ref(props.subject1);
const subjectB = ref(props.subject2);
</script>

<style lang="scss" scoped></style>
