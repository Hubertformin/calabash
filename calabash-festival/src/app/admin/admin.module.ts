import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { AdminToolbarComponent } from './@components/admin-toolbar/admin-toolbar.component';
import {SharedModule} from '../modules/shared/shared.module';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';


@NgModule({
  declarations: [AuthComponent, DashboardComponent, AdminToolbarComponent, EventsComponent, TicketsComponent, CreateEventComponent, UpdateEventComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DataTablesModule
  ]
})
export class AdminModule { }
