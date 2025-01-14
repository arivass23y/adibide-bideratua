import { Component, OnInit } from '@angular/core';
import { HomeService, IPertsona } from '../zerbitzuak/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage implements OnInit{

  constructor(private zerbitzua:HomeService) {}
  pertsonak: IPertsona[] = [];

  ngOnInit(){
    this.pertsonak = this.zerbitzua.pertsonak;
  }
}
