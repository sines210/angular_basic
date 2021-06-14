import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})  
export class AppareilComponent implements OnInit {

// appareilName = "Machine à laver";
// appareilStatus = "éteint";

@Input() appareilName!: string;
@Input() appareilStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    return this.appareilStatus === 'éteint' ? 'red' : 'green';
    //ici j'utilise le ternaire car si je fais un if else en dure il ne me retourne pas la valeur il faut un return prédominant pour faire marcher la méthode de cette manière ds le stylez
  }



}
