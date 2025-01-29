export const useProductStore = defineStore("product", () => {
  const product = ref({});
  const products = ref({});
  const carts = ref([]);
  const getProducts = async()=>{
    const { data } = await useFetch("/api/products");
    products.value = data.value
  }
  return { product, products, carts, getProducts };
});
