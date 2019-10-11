import { Component, OnInit } from '@angular/core';
import {SITE_NAME} from '../../static/static';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteTitle = SITE_NAME;

  constructor() { }

  ngOnInit() {
  }

}
