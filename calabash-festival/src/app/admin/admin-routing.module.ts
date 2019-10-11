import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminAuthGuardService} from '../providers/admin-auth-guard.service';
import {TicketsComponent} from './tickets/tickets.component';
import {EventsComponent} from './events/events.component';


const routes: Routes = [
  {path: '', redirectTo: 'login'},
  {path: 'login', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuardService]},
  {path: 'events', component: EventsComponent, canActivate: [AdminAuthGuardService]},
  {path: 'tickets', component: TicketsComponent, canActivate: [AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
