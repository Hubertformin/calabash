import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  p = 1;
  collection = new Array(100);
  events = [];
  tickets = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAllEvents()
    .subscribe((events: any[]) => {
      console.log(events)
    })
  }

}
