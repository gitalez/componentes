import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {


  // el viewchild se usa cuando quiero obtener de TS algun elemento del html
  // tenemos que poner la clase del elemento IonInfiniteScroll y no el componnete Ion-Infinite-Scroll 
  // infiniteScroll nombre de la propiedad que quiero usar dentor de la clase 


@ViewChild(IonInfiniteScroll) infinteScroll: IonInfiniteScroll

   data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }


  loadData(event){

    console.log('cargando datos');

    setTimeout(()=>{

      if(this.data.length >50){
        event.target.complete(); // cancelamos 
        // este disable lo hago con el view child del elemento 
        this.infinteScroll.disabled = true; // si mi base de datos es de 50 elementos , le digo que haga un disable al scroll del loading 
        return
      }
        const nuevoArr = Array(20);
        this.data.push(...nuevoArr);
        event.target.complete();//cancela el infinite scroll cuando no tiene mas elementos 
    },1000)

  }
}
