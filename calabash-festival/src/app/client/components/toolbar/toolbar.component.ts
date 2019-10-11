import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { isPlatformServer } from '@angular/common';
import * as $ from 'jquery';
import {SITE_NAME} from '../../static/static';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuIcons = faBars;
  siteTitle = SITE_NAME;

  constructor() { }

  ngOnInit() {
  }

  slideMenu() {
    $('#right-nav').slideToggle('fast');
  }
}
