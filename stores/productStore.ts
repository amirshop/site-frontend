export const useProductStore = defineStore("product", () => {
  const product = ref({});
  const products = ref({});
  const carts = ref([]);
  return { product, products, carts };
});
