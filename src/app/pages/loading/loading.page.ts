import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {

    this.presentLoading('espere');
    setTimeout(() => {
      this.loading.dismiss();
    },2000)
  }

async presentLoading(mensaje: string) {

    this.loading = await this.loadingCtrl.create({

      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();

  }
}
