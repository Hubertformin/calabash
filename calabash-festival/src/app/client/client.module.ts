import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../modules/shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import {RingCarouselComponent} from 'ngx-carousels';
import { GalleryComponent } from './gallery/gallery.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import { IndustryDicoveryComponent } from './industry-dicovery/industry-dicovery.component';


@NgModule({
  declarations: [HomeComponent, ToolbarComponent, FooterComponent, BuyTicketComponent, GalleryComponent, PressReleaseComponent, IndustryDicoveryComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
