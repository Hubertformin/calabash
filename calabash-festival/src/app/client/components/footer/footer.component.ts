import { Component, OnInit } from '@angular/core';
import {SITE_NAME} from '../../static/static';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteTitle = SITE_NAME;
  // social icons
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;
  emailIcon = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
