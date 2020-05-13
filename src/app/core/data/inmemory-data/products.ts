export const products: Product[] = [
  {
    id: 'pp111',
    name: 'Earth Ranger',
    brand: 'AKIRA',
    category: '载具/20世纪',
    description: '一种趣味性十足的交通工具，也是体验人生乐趣的游乐工具',
    mainImage: 'assets/images/motor/1.jpg',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['内燃机', '电机']}],
    skuCode: 'motor',
    price: 60000,
    skuList: [
      {
        skuCode: 'motor-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '内燃机'}],
        attributeValues: '地球,内燃机',
        price: 60000,
        image: 'assets/images/motor/1.jpg'
      },
      {
        skuCode: 'motor-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '电机'}],
        attributeValues: '地球,电机',
        price: 30000,
        image: 'assets/images/motor/2.jpg',
      },
      {
        skuCode: 'motor-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '内燃机'}],
        attributeValues: '火星,内燃机',
        price: 120000,
        image: 'assets/images/motor/3.jpg',
      },
      {
        skuCode: 'motor-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '电机'}],
        attributeValues: '火星,电机',
        price: 160000,
        image: 'assets/images/motor/4.jpg',
      },
    ]
  },
  {
    id: 'pp222',
    name: 'Watcher',
    brand: 'TEDA',
    category: '载具/21世纪',
    description: '由动力驱动，具有多个车轮的非轨道承载的车辆',
    mainImage: 'assets/images/car/1.jpg',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['磁力', '电机']}],
    skuCode: 'car',
    price: 120000,
    skuList: [
      {
        skuCode: 'car-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '磁力'}],
        attributeValues: '地球,磁力',
        price: 160000,
        image: 'assets/images/car/1.jpg',
      },
      {
        skuCode: 'car-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '电机'}],
        attributeValues: '地球,电机',
        price: 120000,
        image: 'assets/images/car/2.jpg',
      },
      {
        skuCode: 'car-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '磁力'}],
        attributeValues: '火星,磁力',
        price: 260000,
        image: 'assets/images/car/3.jpg',
      },
      {
        skuCode: 'car-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '电机'}],
        attributeValues: '火星,电机',
        price: 300000,
        image: 'assets/images/car/4.jpg',
      },
    ]
  },
  {
    id: 'pp333',
    name: 'Golden Time',
    brand: 'COWBOY BEBOP',
    category: '载具/23世纪',
    description: '星际交通工具',
    mainImage: 'assets/images/ship/1.jpg',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['反物质', '曲率驱动']}],
    skuCode: 'space',
    price: 3000,
    skuList: [
      {
        skuCode: 'space-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '反物质'}],
        attributeValues: '地球,反物质',
        price: 1200,
        image: 'assets/images/ship/1.jpg',
      },
      {
        skuCode: 'space-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '曲率驱动'}],
        attributeValues: '地球,曲率驱动',
        price: 3000,
        image: 'assets/images/ship/2.jpg',
      },
      {
        skuCode: 'space-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '反物质'}],
        attributeValues: '火星,反物质',
        price: 5000,
        image: 'assets/images/ship/3.jpg',
      },
      {
        skuCode: 'space-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '曲率驱动'}],
        attributeValues: '火星,曲率驱动',
        price: 6000,
        image: 'assets/images/ship/4.jpg',
      },
    ]
  }
];

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description?: string;
  mainImage?: string;
  attributes: AttributeValues[];
  skuCode: string;
  price: number;
  skuList: ProductSku[];
}

export const brands = ['品牌a', '品牌b', '品牌c'];
export const categories = ['品类a', '品类b', '品类c'];
export const attributes = ['规格', '颜色', '工艺'];

export interface AttributeValues {
  type: string;
  values: string[];
  selectedValue?: string;
}

export interface AttributeValuePair {
  type: string;
  value: string;
}

export interface ProductSku {
  skuCode: string;
  attributes: AttributeValuePair[];
  attributeValues: string;
  price: number;
  image?: string;

  [key: string]: any;
}
