import { Component, OnInit } from '@angular/core';
import {AdminAuthService} from '../../../providers/admin-auth.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {

  constructor(private authService: AdminAuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOutUser();
  }
}
