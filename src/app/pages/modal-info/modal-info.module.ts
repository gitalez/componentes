import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';
import { ComponentsModule } from 'src/app/components/components.module';

// le quitamos la ruta, porque no quiero que se vea como una pagina 

/*
const routes: Routes = [
  {
    path: '',
    component: ModalInfoPage
  }
];
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
   // RouterModule.forChild(routes)
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
