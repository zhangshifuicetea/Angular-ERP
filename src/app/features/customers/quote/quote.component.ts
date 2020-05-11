import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  partials: ProductPartial[] = partials.map(p =>
    (new ProductPartial(p.name, p.index, p.price, p.width, p.height, p.count, p.factor, p.remark, p.usage)));
  displayedColumns = ['index', 'name', 'usage', 'width', 'height', 'count', 'factor', 'price', 'totalPrice', 'remark', 'action'];
  usageOptions = ['机体', '动力总成', '外机装甲'];

  get totalPrice() {
    return this.partials.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.partials.forEach((p) => {
      p.calTotalPrice();
    });
  }

  drop(event: CdkDragDrop<ProductPartial[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addPartial(name: string, price: string) {
    if (!name || !price) {
      return;
    }
    const p: number = +price;
    const len = (this.partials || []).length + 1;
    const newPartial = new ProductPartial(name, len, p);
    newPartial.calTotalPrice();
    this.partials = this.partials.concat(newPartial);
  }

  removePartial(id: number) {
    this.partials = this.partials.filter(p => p.id !== id);
  }

}


interface Partial {
  id: number;
  index: number;
  name: string;
  width: number;
  height: number;
  count: number;
  factor: number;
  price: number;
  totalPrice: number;
  remark?: string;
  usage?: string;
}

export class ProductPartial implements Partial {
  id: number = +Date.now();
  totalPrice = 0;

  constructor(
    public name: string,
    public index: number,
    public price = 0,
    public width = 0,
    public height = 0,
    public count = 1,
    public factor = 1,
    public remark?: string,
    public usage?: string) {
  }

  calTotalPrice() {
    const totalPrice = this.width * this.height * this.count * this.factor * this.price * 100 * 100 / 1000 / 1000 / 100 / 100;
    this.totalPrice = Math.floor(totalPrice * 100) / 100;
  }

}

const partials: Partial[] = [
  {
    id: 111,
    index: 1,
    name: '部件1',
    width: 1200,
    height: 3000,
    count: 2,
    factor: 2.1,
    price: 123,
    totalPrice: 0,
    remark: '标准件',
    usage: '动力总成'
  },
  {
    id: 222,
    index: 2,
    name: '部件2',
    width: 3200,
    height: 1231,
    count: 1,
    factor: 1.1,
    price: 233,
    totalPrice: 0,
    remark: '标准件',
    usage: '机体'
  },
  {
    id: 333,
    index: 3,
    name: '部件3',
    width: 1600,
    height: 2300,
    count: 3,
    factor: 12,
    price: 1367,
    totalPrice: 0,
    remark: '',
    usage: '外机装甲'
  },
];
