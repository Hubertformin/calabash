import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {PressReleaseComponent} from './press-release/press-release.component';
import {IndustryDicoveryComponent} from './industry-dicovery/industry-dicovery.component';


const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'press-release', component: PressReleaseComponent},
  {path: 'industry-discovery', component: IndustryDicoveryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
