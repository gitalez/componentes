import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //components: Componente[] = [];
  components: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, public dataService: DataService) { }

  ngOnInit() {

    this.components = this.dataService.getMenuOps();
  }

  toggleMenu(){

    this.menuCtrl.toggle();

  }

}
