<template>
  <section class="lnb-wrap">
    <aside
      class="side-bar"
      :class="{ active: isActive }"
    >
      <div class="pt26 logo">
        <img
          src="@/assets/images/logo.svg"
          alt="instaPay"
        />
      </div>
      <div class="system-name">
        서점용 도서 주문 시스템
      </div>
      <nav class="lnb">
        <ul @click="close">
          <li :class="{ active: activeStatus === 1 }">
            <router-link to="/SearchOrder">
              책 검색
            </router-link>
          </li>
          <li :class="{ active: activeStatus === 2 }">
            <router-link to="/Cart">
              장바구니
            </router-link>
          </li>
          <li :class="{ active: activeStatus === 3 }">
            <router-link to="/OrderList">
              주문 목록 보기
            </router-link>
          </li>
          <li :class="{ active: activeStatus === 4 }">
            <router-link to="/OrderResult">
              내역서 확인
            </router-link>
          </li>
          <li :class="{ active: activeStatus === 5 }">
            <router-link to="/ReleaseList">
              출고 목록 보기
            </router-link>
          </li>
          <li :class="{ active: activeStatus === 6 }">
            <router-link to="/ReleaseStatus">
              출고 현황 보기
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <div
      class="dim"
      :class="{ active: isActive }"
      @click="close"
    ></div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, onMounted } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
//props
const props = defineProps({
  show: Boolean,
});
//emit
const emit = defineEmits(['close']);
//data
const activeStatus = ref(0);
const routeName = ref("");
const isActive = ref(false);
//watch
watch(() => props.show, (status) => {
  status ? (isActive.value = true) : (isActive.value = false);
});
watch(
  () => route, (to) => {
    routeName.value = to.name;
  },
  {
    immediate:true,
    deep: true
  }
);
watch(() => routeName.value, () => {
  menuDefaultSetup();
});
//mounted
onMounted(() => {
  menuDefaultSetup();
});
//function
const close = () => {emit('close', true);};
const menuDefaultSetup = () => {
  switch (routeName.value) {
  case "SearchOrder":
    activeStatus.value = 1;
    break;
  case "Cart":
    activeStatus.value = 2;
    break;
  case "OrderList":
    activeStatus.value = 3;
    break;
  case "OrderResult":
    activeStatus.value = 4;
    break;
  case "ReleaseList":
    activeStatus.value = 5;
    break;
  case "ReleaseStatus":
    activeStatus.value = 6;
    break;
  }
};
</script>
<style lang="scss" scoped>
.lnb-wrap {
  min-height: 100vh;
  height: 100%;
  background: #000;
  .side-bar {
    position: relative;
    z-index: 1000;
    background: #000;
    min-height: 100vh;
    height: 100%;
    .logo {
      text-align: center;
    }
    .system-name {
     @include NotoSans(1.4, 700, #fff);
      text-align: center;
    }
    nav {
      padding-top: 30px;
      ul {
        li {
          cursor: pointer;
          text-align: center;
          &:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
          a {
           @include NotoSans(1.4, 700, #fff);
            height: 40px;
            line-height: 40px;
            width: 100%;
          }
          &.active {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
  .dim {
    display: none;
  }
}

@include lnb {
  //모바일
  .side-bar {
    position: fixed;
    width: 266px;
    top: 0;
    left: -266px;
    transition: left 0.3s ease-in;
    &.active {
      left: 0;
      z-index: 1000;
    }
  }
  .dim {
    &.active {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
    }
  }
}
</style>
