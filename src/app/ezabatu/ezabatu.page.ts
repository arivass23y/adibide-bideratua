import { Component, OnInit } from '@angular/core';
import { NiremoduluakModule } from "../konponenteak/niremoduluak.module";
import { HomeService } from '../zerbitzuak/home.service';

@Component({
  selector: 'app-ezabatu',
  templateUrl: './ezabatu.page.html',
  styleUrls: ['./ezabatu.page.scss'],
  standalone:false,  
})
export class EzabatuPage implements OnInit {

  id!:string;

  constructor(private zerbitzuak:HomeService) { }

  onClick(){
    this.zerbitzuak.pertsonaEzabatu(this.id);
  }

  ngOnInit() {
  }

}
