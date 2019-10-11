import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-carousels';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxDatePickerModule} from 'ngx-date-picker-fns';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  exports: [
    CarouselModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ]
})
export class SharedModule { }
