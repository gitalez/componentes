import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>


  constructor(private dataService: DataService) {

    this.componentes = this.dataService.getMenuOps();
   }

  ngOnInit() {}

}
