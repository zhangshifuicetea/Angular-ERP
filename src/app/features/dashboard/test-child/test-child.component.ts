import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit, AfterViewInit {
  @Input() par: { key: string };
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.par.key = 'bb';
  }

}
