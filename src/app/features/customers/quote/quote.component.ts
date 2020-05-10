import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  partials: Partial[] = partials;
  displayedColumns = ['index', 'name', 'usage', 'width', 'height', 'count', 'factor', 'price', 'totalPrice', 'remark', 'action'];
  usageOptions = ['机体', '动力总成', '外机装甲'];

  constructor() {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Partial[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addPartial(name: string, price: string) {
    const p: number = +price;
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
  index: number;
  name: string;
  count: number;
  factor: number;
  height: number;
  price: number;
  totalPrice: number;
  width: number;
  remark?: string;
  usage?: string;

  constructor() {

  }

  calTotalPrice() {

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
    height: 6000,
    count: 1,
    factor: 1.1,
    price: 233,
    totalPrice: 0,
    remark: '标准件',
    usage: '机体'
  },
  {
    id: 222,
    index: 2,
    name: '部件3',
    width: 1600,
    height: 2300,
    count: 3,
    factor: 1.6,
    price: 67,
    totalPrice: 0,
    remark: '',
    usage: '外机装甲'
  },
];
