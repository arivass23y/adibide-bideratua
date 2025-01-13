import { Component } from '@angular/core';

export interface IBalioa {
  id: string
  izena: string
  abizena: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  valoresLista: IBalioa[] = [
    {
      id: "AR",
      izena: "Alejandro",
      abizena: "Rivas",
    },
    {
      id: "OM",
      izena: "Oier",
      abizena: "Miranda",
    },
    {
      id: "BA",
      izena: "Borja",
      abizena: "Atutxa",
    }
  ]

  constructor() {}

}
