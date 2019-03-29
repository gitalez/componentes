import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  // soy el hijo modal-info ,recibimos del padre modal:
  // el input nombre, esta propiedad tiene que ser identica a nombre de  componentProps de modal.page
  // el input pais, esta propiedad tiene que ser identica a nombre de  componentProps de modal.page

  @Input() nombre;
  @Input() pais;


  constructor(private modalCtrl: ModalController) { 


  }



  ngOnInit() {
  }

  salirSinArgumentos(){

    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){

    // esta info se la mando al padre modal.ts
    
    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'de españa'
    })
  }
}
