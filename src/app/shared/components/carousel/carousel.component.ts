import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0.1,
      })),
      transition('* => *', [
        animate('0.5s')
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() images: string[] = [];
  @Input() selectedIndex = 0;

  selectedImage: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectPic(this.selectedIndex);
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.selectPic(this.selectedIndex);
    // });
  }

  selectPic(index: number) {
    const len = (this.images || []).length;
    const idx = (index) % len;
    this.selectedIndex = idx >= 0 ? idx : (len - 1);
    this.selectedImage = (this.images || [])[this.selectedIndex];
  }
}
