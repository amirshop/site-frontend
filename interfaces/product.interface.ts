import type { ButtonColor } from "../node_modules/@nuxt/ui/dist/runtime/types/button";
export interface ProductInterface {
  id: string;
  title: string;
  slug: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  colors: ButtonColor[];
}
