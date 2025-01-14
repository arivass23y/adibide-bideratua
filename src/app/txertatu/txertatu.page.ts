import { IPertsona } from './../zerbitzuak/home.service';
import { Component, OnInit } from '@angular/core';
import { NiremoduluakModule } from "../konponenteak/niremoduluak.module";
import { HomeService } from '../zerbitzuak/home.service';

@Component({
  selector: 'app-txertatu',
  templateUrl: './txertatu.page.html',
  styleUrls: ['./txertatu.page.scss'],
  standalone:false,
})
export class TxertatuPage implements OnInit {

  id!:string;
  izena!:string;
  abizena!:string;

  zenbakiak:number[]=[1,2,3,4,5,6,7,8,9];

  constructor(zerbitzua:HomeService) { }

  onClick(){
    let pertsonaBerria:IPertsona
    { this.id= "",
      this.izena= "",
      this.abizena=""
    }
    
    
  }

  ngOnInit() {
  }

}

