import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Chart} from '@antv/g2';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  tasks: string[] = ['Sales Reports', 'Client Meeting', 'Generate Charts', 'Pay Invoices', 'Save the World'];
  sales: Sales[] = sales;
  displayedColumns = ['avatar', 'country', 'sales', 'change', 'direction'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      buildChart1();
    }, 500);

    setTimeout(() => {
      buildChart2();
    }, 600);
  }

}

interface Sales {
  avatar: string;
  country: string;
  sales: number;
  change: string;
  direction: string;
}

const sales: Sales[] = [
  {avatar: 'china', country: 'CHINA', sales: 6723, change: '23%', direction: 'up'},
  {avatar: 'brazil', country: 'BRAZIL', sales: 5237, change: '16%', direction: 'up'},
  {avatar: 'belgium', country: 'BELGIUM', sales: 3279, change: '12%', direction: 'down'},
  {avatar: 'france', country: 'FRANCE', sales: 2671, change: '16%', direction: 'up'},
  {avatar: 'uk', country: 'UK', sales: 1762, change: '19%', direction: 'down'},
];

function buildChart1() {
  const data = [
    {country: 'Asia', year: '1800', value: 635},
    {country: 'Asia', year: '1850', value: 809},
    {country: 'Asia', year: '1900', value: 5268},
    {country: 'Asia', year: '1950', value: 4400},
    {country: 'Asia', year: '1999', value: 3634},
    {country: 'Asia', year: '2050', value: 947},
    {country: 'Africa', year: '1800', value: 107},
    {country: 'Africa', year: '1850', value: 111},
    {country: 'Africa', year: '1900', value: 1766},
    {country: 'Africa', year: '1950', value: 221},
    {country: 'Africa', year: '1999', value: 767},
    {country: 'Africa', year: '2050', value: 133},
    {country: 'Europe', year: '1800', value: 203},
    {country: 'Europe', year: '1850', value: 276},
    {country: 'Europe', year: '1900', value: 628},
    {country: 'Europe', year: '1950', value: 547},
    {country: 'Europe', year: '1999', value: 729},
    {country: 'Europe', year: '2050', value: 408},
    {country: 'Oceania', year: '1800', value: 200},
    {country: 'Oceania', year: '1850', value: 200},
    {country: 'Oceania', year: '1900', value: 460},
    {country: 'Oceania', year: '1950', value: 230},
    {country: 'Oceania', year: '1999', value: 300},
    {country: 'Oceania', year: '2050', value: 300},
  ];
  const chart = new Chart({
    container: 'chart1',
    autoFit: true,
    height: 300,
  });

  chart.data(data);
  chart.scale('year', {
    type: 'linear',
    tickInterval: 50,
  });
  chart.scale('value', {
    nice: true,
  });

  chart.tooltip({
    showCrosshairs: true,
    shared: true,
  });

  chart
    .area()
    .adjust('stack')
    .position('year*value')
    .color('country');
  chart
    .line()
    .adjust('stack')
    .position('year*value')
    .color('country');

  chart.interaction('element-highlight');

  chart.render();
}

function buildChart2() {
  const data = [
    { year: '2015', population: 33 },
    { year: '2016', population: 46 },
    { year: '2017', population: 38.3 },
    { year: '2018', population: 28 },
    { year: '2019', population: 42.5 },
    { year: '2020', population: 30.3 },
  ];

  const chart = new Chart({
    container: 'chart2',
    autoFit: true,
    height: 300,
  });
  chart.data(data);
  chart.coordinate('polar');
  chart.legend('year', {
    position: 'right',
  });
  chart.axis(false);
  chart.tooltip({
    showMarkers: false
  });
  chart.interaction('element-highlight');
  chart
    .interval()
    .position('year*population')
    .color('year')
    .style({
      lineWidth: 1,
      stroke: '#fff',
    });
  chart.render();
}
