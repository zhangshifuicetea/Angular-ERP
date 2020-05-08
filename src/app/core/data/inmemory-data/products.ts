export const products: Product[] = [
  {
    id: 'pp111',
    name: '游骑兵',
    brand: 'AKIRA',
    category: '载具/20世纪',
    description: '一种趣味性十足的交通工具，也是体验人生乐趣的游乐工具',
    mainImage: 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_1280.jpg',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['内燃机', '电机']}],
    skuCode: 'motor',
    price: 60000,
    skuList: [
      {
        skuCode: 'motor-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '内燃机'}],
        attributeValues: '地球,内燃机',
        price: 60000,
        image: 'https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909_1280.jpg'
      },
      {
        skuCode: 'motor-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '电机'}],
        attributeValues: '地球,电机',
        price: 30000,
        image: 'https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_1280.jpg',
      },
      {
        skuCode: 'motor-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '内燃机'}],
        attributeValues: '火星,内燃机',
        price: 120000,
        image: 'https://cdn.pixabay.com/photo/2014/09/24/21/30/harley-davidson-459594_1280.jpg',
      },
      {
        skuCode: 'motor-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '电机'}],
        attributeValues: '火星,电机',
        price: 1600000,
        image: 'https://cdn.pixabay.com/photo/2014/09/24/21/30/harley-davidson-459594_1280.jpg',
      },
    ]
  },
  {
    id: 'pp222',
    name: '守望者',
    brand: 'TESLA',
    category: '载具/21世纪',
    description: '由动力驱动，具有多个车轮的非轨道承载的车辆',
    mainImage: 'https://cdn.pixabay.com/photo/2015/12/08/00/28/car-1081742_1280.jpg',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['磁力', '电机']}],
    skuCode: 'car',
    price: 120000,
    skuList: [
      {
        skuCode: 'car-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '磁力'}],
        attributeValues: '地球,磁力',
        price: 160000,
        image: 'https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424_1280.jpg',
      },
      {
        skuCode: 'car-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '电机'}],
        attributeValues: '地球,电机',
        price: 120000,
        image: 'https://cdn.pixabay.com/photo/2015/12/08/00/28/car-1081742_1280.jpg',
      },
      {
        skuCode: 'car-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '磁力'}],
        attributeValues: '火星,磁力',
        price: 260000,
        image: 'https://cdn.pixabay.com/photo/2019/09/09/07/17/racing-car-4462878_1280.jpg',
      },
      {
        skuCode: 'car-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '电机'}],
        attributeValues: '火星,电机',
        price: 300000,
        image: 'https://cdn.pixabay.com/photo/2019/09/09/07/17/racing-car-4462878_1280.jpg',
      },
    ]
  },
  {
    id: 'pp333',
    name: '黄金时代',
    brand: 'COWBOY BEBOP',
    category: '载具/23世纪',
    description: '星际交通工具',
    mainImage: 'https://cdn.pixabay.com/photo/2017/10/12/10/56/spaceship-2844248_1280.png',
    attributes: [{type: '产地', values: ['地球', '火星']}, {type: '动力', values: ['反物质', '曲率驱动']}],
    skuCode: 'space',
    price: 3000,
    skuList: [
      {
        skuCode: 'space-1',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '反物质'}],
        attributeValues: '地球,反物质',
        price: 1200,
        image: 'https://cdn.pixabay.com/photo/2017/10/10/15/31/spaceship-2837606_1280.png',
      },
      {
        skuCode: 'space-2',
        attributes: [{type: '产地', value: '地球'}, {type: '动力', value: '曲率驱动'}],
        attributeValues: '地球,曲率驱动',
        price: 3000,
        image: 'https://cdn.pixabay.com/photo/2017/10/12/10/56/spaceship-2844248_1280.png',
      },
      {
        skuCode: 'space-3',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '反物质'}],
        attributeValues: '火星,反物质',
        price: 5000,
        image: 'https://cdn.pixabay.com/photo/2017/09/18/16/06/spaceship-2762214_1280.png',
      },
      {
        skuCode: 'space-4',
        attributes: [{type: '产地', value: '火星'}, {type: '动力', value: '曲率驱动'}],
        attributeValues: '火星,曲率驱动',
        price: 6000,
        image: 'https://cdn.pixabay.com/photo/2017/09/18/16/06/spaceship-2762214_1280.png',
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
