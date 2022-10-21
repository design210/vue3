<template>
  <v-app>
    <v-main class="main-container">
      <div class="layout-wrap">
        <div class="layout-right">
          <router-view
            name="lnb"
            :show="show"
            @close="close"
          />
        </div>
        <div class="layout-left">
          <div
            class="hamburg-menu"
            @click="showLnb"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <router-view name="contents" />
          <router-view name="footer" />
        </div>
      </div>
      <router-view />
      <v-progress-circular
        v-if="loadingStatus"
        :size="70"
        :width="7"
        color="amber"
        indeterminate
        class="spinner"
      />
    </v-main>
  </v-app>
</template>

<script setup>
import { mobileBreakPoint } from "@/utils/mobileBreakPoint";
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

//data
const show = ref(false);
const loadingStatus = computed(() => store.getters["common/loading"]);
const windowWidth = computed(() => store.getters["common/windowWidth"]);
const mobile = computed(() => store.getters["common/mobile"]);

//윈도우 가로사이즈 계산
let docWidth = window.innerWidth;
store.commit("common/setWindowWidth", docWidth); //초기값 설정
window.addEventListener(
  "resize",
  () => {
    let docWidth = window.innerWidth;
    store.commit("common/setWindowWidth", docWidth);
    windowWidth.value > mobileBreakPoint ? store.commit("common/setDeviceStatus", false) : store.commit("common/setDeviceStatus", true);//모바일상태
  },
  true,
);
windowWidth.value > mobileBreakPoint ? store.commit("common/setDeviceStatus", false) : store.commit("common/setDeviceStatus", true); //모바일상태

//모바일 : Lnb view 상태 변경
const showLnb = () => show.value = true;
const close = () => show.value = false;
</script>
<style lang="scss">
.spinner {
  position: fixed !important;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//margin, padding setting
@for $i from 0 through 200 {
  .mt#{$i} {
    margin-top: 0.1rem * $i !important;
  }
  .ml#{$i} {
    margin-left: 0.1rem * $i !important;
  }
  .mr#{$i} {
    margin-right: 0.1rem * $i !important;
  }
  .mb#{$i} {
    margin-bottom: 0.1rem * $i !important;
  }
  .pt#{$i} {
    padding-top: 0.1rem * $i !important;
  }
  .pl#{$i} {
    padding-left: 0.1rem * $i !important;
  }
  .pr#{$i} {
    padding-right: 0.1rem * $i !important;
  }
  .pb#{$i} {
    padding-bottom: 0.1rem * $i !important;
  }
}
//width setting
@for $i from 1 through 500 {
  .w#{$i} {
    width: 0.1rem * $i !important;
  }
}
</style>

<style lang="scss">
.spinner {
  position: fixed !important;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//margin, padding setting
@for $i from 0 through 200 {
  .mt#{$i} {
    margin-top: 0.1rem * $i !important;
  }
  .ml#{$i} {
    margin-left: 0.1rem * $i !important;
  }
  .mr#{$i} {
    margin-right: 0.1rem * $i !important;
  }
  .mb#{$i} {
    margin-bottom: 0.1rem * $i !important;
  }
  .pt#{$i} {
    padding-top: 0.1rem * $i !important;
  }
  .pl#{$i} {
    padding-left: 0.1rem * $i !important;
  }
  .pr#{$i} {
    padding-right: 0.1rem * $i !important;
  }
  .pb#{$i} {
    padding-bottom: 0.1rem * $i !important;
  }
}
//width setting
@for $i from 1 through 500 {
  .w#{$i} {
    width: 0.1rem * $i !important;
  }
}
</style>
