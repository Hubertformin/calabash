import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import * as $ from 'jquery';
import {RingCarouselComponent} from 'ngx-carousels';
import {SITE_NAME} from '../static/static';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(RingCarouselComponent, {static: false}) private carousel: RingCarouselComponent;
  eventTab: any;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('HOME - ' + SITE_NAME.toUpperCase());
    this.eventTab = 'upcoming';
    // this.carousel.next(6500);
    // setInterval(() => {
    //   this.carousel.next();
    // }, 6500);
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.carousel.next();
    }, 6500);
  }

}
