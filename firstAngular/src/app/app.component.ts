import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nle sélecteur permet de créer une balise pour le component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  isAuth = false;

  // lastUpdate = new Date();

lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
  //ici le date entre balise représente le type de donnée attendue, ca pourrait être string ou number
      const date = new Date();
      setTimeout(() => {
      resolve(date);
      }, 2000);
    }
  )

appareils = [
  {
    name : 'Machine à laver',
    status: 'éteint'
  },
  {
    name : 'Frigo',
    status: 'allumé'
  },
  {
    name : 'Ordinateur',
    status: 'allumé'
  },
  {
    name : 'Télévision',
    status: 'éteint'
  }
  

]

  // appareilOne = "Machine à laver";
  // appareilTwo = "ordinateur";
  // appareilThree = "télévision";
  // appareilFour = "frigo";

  constructor() {
    setTimeout(() => {
      this.isAuth = true
    }, 4000);
  }

  onAllumer() {
    console.log('on allume tout')
  }
}
