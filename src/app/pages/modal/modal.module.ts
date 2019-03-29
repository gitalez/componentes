import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents:[
    ModalInfoPage // nuestro modal se compila cuando se necesita , tiene que estar declarado en entrycomponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ModalInfoPageModule // tambien importo el module del modal-info
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
