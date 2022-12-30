import {ref, reactive} from 'vue';
export const useRef = () => {
  const aaa = ref(222);    
  const ex = reactive({
    a:1,
    b:2,
  });
  return {ex, aaa};
};