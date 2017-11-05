import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ { provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class CarouselComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/1.jpg' },
      { name: 'assets/images/2.jpg' },
      { name: 'assets/images/3.jpg' },
    ];
  }

  ngOnInit() {
  }

}


