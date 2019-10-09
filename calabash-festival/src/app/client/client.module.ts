import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../modules/shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';


@NgModule({
  declarations: [HomeComponent, ToolbarComponent, FooterComponent, BuyTicketComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
