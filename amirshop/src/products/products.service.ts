import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IProductService } from './interfaces/product.service.interface';
import { IdParam, SlugParam } from './dto/params.dto';

@Injectable()
export class ProductsService implements IProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}
  async createProduct(dto: CreateProductDto): Promise<void> {
    const newProduct = this.productsRepository.create(dto);
    await this.productsRepository.save(newProduct);
  }
  async findProductList(): Promise<ProductEntity[]> {
    return await this.productsRepository.find();
  }
  async findProductById(id: string): Promise<ProductEntity> {
    return await this.productsRepository.findOneBy({ id });
  }
  async findProductBySlug(slug: SlugParam): Promise<ProductEntity> {
    return await this.productsRepository.findOneBy({ slug });
  }
  async updateProductById(id: string, dto: UpdateProductDto): Promise<void> {
    await this.productsRepository.update(id, dto);
  }
  async deleteProductById(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
