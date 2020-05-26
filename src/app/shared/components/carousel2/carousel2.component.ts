import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component implements OnInit, AfterViewInit {
  @Input() width: number;
  @Input() images: string[] = [];
  imageUrls: string[];
  index = 0;
  @ViewChild('track') track: ElementRef;

  constructor(
    private render2: Renderer2
  ) {
  }

  ngOnInit(): void {
    if (this.images?.length >= 2) {
      const first = this.images[0];
      const last = this.images[this.images.length - 1];
      this.imageUrls = [last, ...this.images, first];
    }
  }

  move(distance: number) {
    this.render2.addClass(this.track.nativeElement, 'animate');
    this.index += distance;
    const value = `${-(this.index + 1) * this.width}px`;
    console.log(value, 'distance');
    this.render2.setStyle(this.track.nativeElement, 'left', value);
    if (this.index === -1 || this.index === this.images.length) {
      this.touchBoundary();
    }
  }

  touchBoundary() {
    const len = this.images.length;
    let val;
    if (this.index === -1) {
      val = `${-this.width * len}px`;
      this.index = len - 1;
      console.log(val, 'distance');
    } else if (this.index === len) {
      val = `${-this.width}px`;
      this.index = 0;
      console.log(val, 'distance');
    }
    setTimeout(() => {
      this.render2.removeClass(this.track.nativeElement, 'animate');
      this.render2.setStyle(this.track.nativeElement, 'left', val);
    }, 200);
  }

  ngAfterViewInit() {
    console.log(this.track);
  }

}
