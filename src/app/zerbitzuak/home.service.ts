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
  constructor() { }
}
