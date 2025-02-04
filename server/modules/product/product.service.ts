import type { ProductInterface } from "~/interfaces/product.interface";
import { ProductModel } from "./product.model";
import { connectDB } from "../../db";

export class ProductService {
  constructor() {
    this.setupDB().then(() => console.log());
  }

  async setupDB() {
    await connectDB();
  }
  async createProduct(productData: ProductInterface) {
    const product = new ProductModel(productData);
    return await product.save();
  }

  async findProductList() {
    return await ProductModel.find();
  }

  async findProductById(id: string) {
    return await ProductModel.findById(id);
  }
  async findProductBySlug(slug: string) {
    return await ProductModel.findOne({ slug });
  }

  async updateProductById(id: string, updateData: ProductInterface) {
    return await ProductModel.findByIdAndUpdate(id, updateData);
  }

  async deleteProductById(id: string) {
    return await ProductModel.findByIdAndDelete(id);
  }
}
