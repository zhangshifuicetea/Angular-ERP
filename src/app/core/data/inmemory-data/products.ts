export const products: Product[] = [
  {id: 11, name: '初号机', brand: 'Eva', category: ''},
];

export interface Product {
  id?: number;
  name?: string;
  brand?: string;
  category?: string;
  // price?: number;
  description?: string;
  imageUrls?: string[];
  // attributeTypes?: TypeValueModel[];
  // skuList?: ProductSkuModel[];
}

export interface Sku {
  sku: string;
  price: number;

}

export const brands = ['品牌a', '品牌b', '品牌c'];
export const categories = ['品类a', '品类b', '品类c'];
export const attributes = ['规格', '颜色', '工艺'];
