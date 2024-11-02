import { getCategoryAPI } from '@/apis/category';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id);
    console.log(res);
    categoryData.value = res.result;
  };

  watchEffect(() => {
    getCategory();
  });

  return{
    categoryData
  }
}
