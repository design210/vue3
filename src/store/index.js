import { createStore } from "vuex";
import { common } from "@/store/modules/common/common";
import { adb } from "@/store/modules/common/adb";
import { bbb } from "@/store/modules/common/bbb";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: { common },
  plugins: [
    createPersistedState({
      //여기에 쓴 모듈만 저장됩니다.
      //key:'VuexStore',
      storage: window.sessionStorage, //session storage
      
      //paths: ["common.windowWidth"], // local storage
      //paths:['common', 'adb'],
      // storage:{
      //   getItem: (key) => {
      //     const item =  JSON.parse(localStorage.getItem(key));
      //     console.log(item);
      //   },
      //   setItem: (key, value) => {   
      //     const obj = JSON.parse(value);
      //     const result = Object.keys(obj).map((key) => {
      //       const k = key;
      //       return {[k]:obj[key]};
      //     });
      //     // 
      //     let session = {};
      //     let storage = {};          
      //     result.forEach(ele => {
      //       const key = Object.keys(ele);
      //       ele[key[0]].session ? session = {...session, ...ele}:  storage = {...storage, ...ele};
      //     });
      //     Object.keys(session).length !== 0 ? sessionStorage.setItem(key, JSON.stringify(session)) : null;
      //     Object.keys(storage).length !== 0 ? localStorage.setItem(key, JSON.stringify(storage)) : null;   
      //   },
      //   removeItem: (key) => console.log('3', key)
      // }
    }),
  ],
});
