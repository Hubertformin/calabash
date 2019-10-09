import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-carousels';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    FontAwesomeModule
  ],
  exports: [
    CarouselModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
