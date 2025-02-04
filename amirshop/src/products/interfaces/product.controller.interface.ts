import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

export interface IProductController {
  createProduct(dto: CreateProductDto): Promise<void>;
  findProductList(): Promise<ProductEntity[]>;
  findProductById(id: string): Promise<ProductEntity>;
  findProductBySlug(id: string): Promise<ProductEntity>;
  updateProductById(id: string, dto: UpdateProductDto): Promise<void>;
  deleteProductById(id: string): Promise<void>;
}
