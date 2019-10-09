import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('HOME - CALABASH FESTIVALS');
    setInterval(() => {
      // @ts-ignore
      document.querySelector('#carouselNextBtn').click();
    }, 6500);
  }

}
