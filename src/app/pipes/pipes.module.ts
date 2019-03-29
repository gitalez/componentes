import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';


@NgModule({
  declarations: [FiltroPipe],
  imports: [],
  exports: [FiltroPipe]
})
export class PipesModule { }



// el pipe es una forma de transformar una data/arreglo pero sin modificar los valores del arreglo
// solo para la renderizacion
// creamos un modulo de pipes  ionic g m pipes
// para agrupar los pipes 

