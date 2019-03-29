import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  // async regresa una promesa
  async presentActionSheet() {

    // await espera hasta que this.actionSheetCtrl crea el objeto
    const actionSheet = await this.actionSheetCtrl.create({

      header: 'Albums',
      backdropDismiss: false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => { // se dispara cuando se hace click en el 
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    // muestra el actionSheet
    await actionSheet.present();
  }


  
}
