import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

   @Input() postTitle!: string;
   @Input() postContent!: string;
   @Input() postLoveIts!: number;
   @Input() postCreatedAt!: Date;



  posted = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addLike() {
    this.postLoveIts++
  }

  addDislike() {
    this.postLoveIts--
  }

}
