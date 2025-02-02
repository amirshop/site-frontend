import type { ProductInterface } from "~/interfaces/product.interface";

export const useProductStore = defineStore("product", () => {
  const product = ref<ProductInterface>({} as ProductInterface);
  const products = ref<ProductInterface[]>([]);
  const carts = ref([]);
  const getProducts = async () => {
    const { data } = await useFetch<ProductInterface[]>("/api/products");
    products.value.push(...(data.value ?? []));
  };
  return { product, products, carts, getProducts };
});
