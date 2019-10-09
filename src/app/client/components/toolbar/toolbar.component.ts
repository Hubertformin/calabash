import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuIcons = faBars;
  constructor() { }

  ngOnInit() {
  }

  slideMenu() {
    $('#right-nav').slideToggle('fast');
  }
}
