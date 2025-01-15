import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-ezabatu',
  templateUrl: './alert-ezabatu.component.html',
  styleUrls: ['./alert-ezabatu.component.scss'],
  standalone:false,  
})
export class AlertEzabatuComponent  implements OnInit {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      name: 'id',
      type: 'text',
      placeholder: 'ID',
    },
    {
      name: 'izena',
      type: 'text',
      placeholder: 'Izena',
    },
    {
      name: 'abizena',
      type: 'text',
      placeholder: 'Abizena',
    },
  ];
  constructor() { }

  ngOnInit() {}

}
