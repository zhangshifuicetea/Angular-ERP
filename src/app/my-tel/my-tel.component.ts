import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-tel',
  templateUrl: './my-tel.component.html',
  styleUrls: ['./my-tel.component.scss']
})
export class MyTelComponent implements OnInit {
  parts: FormGroup;

  @Input()
  get value(): MyTel | null {
    const n = this.parts.value;
    if (n.area.length === 3 && n.exchange.length === 3 && n.subscriber.length === 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }

  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({
      area: tel.area,
      exchange: tel.exchange,
      subscriber: tel.subscriber
    });
  }

  constructor(
    fb: FormBuilder,
  ) {
    this.parts = fb.group({
      area: '',
      exchange: '',
      subscriber: '',
    });
  }

  ngOnInit(): void {
  }

}

class MyTel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {
  }
}
