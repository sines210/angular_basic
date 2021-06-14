import { Component, Input } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exoBlog';



  posts = [
    {
      title : "Premier Titre",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur quisquam, cupiditate ipsa sapiente officiis tempora non, pariatur magnam ut dolor. Aspernatur, tenetur quis! Qui officiis rem quia quod aperiam!",
      loveIts : 0,
      created_at: new Date()

    },
    {
      title : "Premier Titre",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur quisquam, cupiditate ipsa sapiente officiis tempora non, pariatur magnam ut dolor. Aspernatur, tenetur quis! Qui officiis rem quia quod aperiam!",
      loveIts : 0,
      created_at: new Date()

    },
    {
      title : "Premier Titre",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur quisquam, cupiditate ipsa sapiente officiis tempora non, pariatur magnam ut dolor. Aspernatur, tenetur quis! Qui officiis rem quia quod aperiam!",
      loveIts : 0,
      created_at: new Date()

    }

  ]

}
  