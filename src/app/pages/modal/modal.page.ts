import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage, // es nuestra modal propiamente dicho
      componentProps: {
        'nombre': 'Alejandro',
        'pais': 'Argentina'
      }
    });
    await modal.present();

    // en data espero los datos que me manda el hijo modal-info

    const { data } = await modal.onDidDismiss();
    console.log('retorno del hijo modal-info');
    // ponemos data en otro console.log para que lo ejecute bien la consola de android studio, ademas lo convertimos a string
    console.log(JSON.stringify(data));
  }


}
