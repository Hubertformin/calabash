import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {Subject} from 'rxjs';
import { CreateEventComponent } from '../create-event/create-event.component';
import { UpdateEventComponent } from '../update-event/update-event.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  // 
  @ViewChild(CreateEventComponent, {static: false}) createEventComp: CreateEventComponent;
  @ViewChild(UpdateEventComponent, {static: false}) updateEventComp: UpdateEventComponent;
  // datable variables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  events: any[] = [];
  editIcon = faPencilAlt;


  constructor(public http: HttpService) {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.getAllEvents()
    .subscribe((events: any[]) => {
      this.events = events;
      this.dtTrigger.next();
    }, (error) => {

    });
  }

  toggleModal(el, index?: number) {
    $(el).slideToggle('fast');
    // if index is set
    if (index) {
      this.updateEventComp.patchEventForm(this.events[index]);
    }
  }
  // life cycle hook: when the component is destroyed
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  // save event throught view child
  saveEvent() {
    this.createEventComp.saveEvent()
    .subscribe(data => {
      this.events.unshift(data);
      // close modal
      this.toggleModal('#createFormModal');
    })
  }

  updateEvent(){
    this.updateEventComp.updateEvent()
    .subscribe(data => {
        // updating object
        this.events = this.events.map(event => {
          if (event.id === data.id) {
            event = data;
          }
          return event;
        });
        this.toggleModal('#updateFormModal');
    })
  } 
}
