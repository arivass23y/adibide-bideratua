import { Injectable } from '@angular/core';

export interface IPertsona {
  id:string;
  izena:string;
  abizena:string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
pertsonak:IPertsona[]=[
    { id: "ba",
      izena:"borja",
      abizena:"atutxa"
    },
    {
      id:"jb",
      izena:"jon",
      abizena:"barrutia"
    }
  ]

  datuakTxertatu(pertsona:IPertsona){
    this.pertsonak.push(pertsona);
  }

  pertsonaEzabatu(id:string){
    let position = this.pertsonak.findIndex(pertsona => pertsona.id === id);
    if (position !== -1) {
      this.pertsonak.splice(position,1);
    }
  }
  constructor() { }
}
