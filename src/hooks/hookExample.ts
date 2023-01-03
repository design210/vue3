import {ref, reactive} from 'vue';
interface User {
  a:Number, 
  b:Number
}
export const useRef = () => {
  const aaa = ref<Number>(222);    
  const ex = reactive<User>({
    a:1,
    b:2,
  });
  return {ex, aaa};
};