import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  textoBuscar = '';

  constructor(private dataService: DataService) { }

  albunes: any = [];

  ngOnInit() {

    this.dataService.getAlbums()
    .subscribe( albunes => {

      console.log(albunes);
      this.albunes = albunes;
    })
  }

  buscar(evento){
    console.log(evento);
    console.log(evento.detail.value);// es lo que se escribe en el input del searchbar
    this.textoBuscar = evento.detail.value;

  }
}



