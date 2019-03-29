import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // como funciona 
  //coloco #lista en el elemento que quiero referenciar
  // coloco en el viewchild ese nombre y digo que lo va a manejar la variable lis
  // que en este caso es de tipo IonList
  // ya puedo referenciar this.lis. ---- los metodos que contiene IonLIst
  @ViewChild('lista') lis: IonList;

  usuarios: Observable<any>;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    // con subscribe
    /*
    this.dataService.getUsers()
    .subscribe(data => {
      console.log(data);
  
    })
    */

    // con pipe async 

    this.usuarios = this.dataService.getUsers();
  }

  favorite(user){
    console.log(user);
    this.lis.closeSlidingItems()

  }
  share(user){
    console.log(user);
    this.lis.closeSlidingItems()
  }
  unread(user){
    console.log(user);
    this.lis.closeSlidingItems()
  }

}
