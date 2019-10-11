import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  events: any[] = [];
  editIcon = faPencilAlt;

  constructor(public http: HttpService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.getAllEvents()
    .subscribe((events: any[]) => {
      this.events = events;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
