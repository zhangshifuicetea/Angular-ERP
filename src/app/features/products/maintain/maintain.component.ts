import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit {

  cascade = [
    {key: 'aa', val: 'aaa111'},
    {
      key: 'bb', val: 'bbb111',
      children: [
        {key: 'cc', val: 'ccc111'},
        {key: 'dd', val: 'ddd111'},
        {key: 'ee', val: 'eee111', children: [
            {key: 'ff', val: 'fff111'},
            {key: 'gg', val: 'ggg111'},
          ]},
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  log(msg: any) {
    window.console.log(msg);
  }


}
