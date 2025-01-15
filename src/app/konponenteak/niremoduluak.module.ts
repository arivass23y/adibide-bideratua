import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoiburukoaComponent } from './goiburukoa/goiburukoa.component';
import { RouterModule } from '@angular/router';
import { AlertEzabatuComponent } from './alert-ezabatu/alert-ezabatu.component';



@NgModule({
  declarations: [GoiburukoaComponent, AlertEzabatuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[GoiburukoaComponent, AlertEzabatuComponent]
})
export class NiremoduluakModule { }
