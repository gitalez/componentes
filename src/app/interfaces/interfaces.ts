export interface Componente {

    icon: string;
    name: string;
    redirecTo: string;
    submenu?: Submenu[];
  
  }

export interface Submenu {

  name: string;
  url: string;

}
  