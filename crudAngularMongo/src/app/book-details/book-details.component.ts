import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book:Book = {
    id: '',
    isbn : '',
    title : '',
    author : '',
    description : '',
    publisher : '',
    publishedYear : '',
    updatedAt : new Date
  }

  isLoadingResults = true;

  constructor(private route:ActivatedRoute, private router:Router, private api:ApiService ){}

  ngOnInit():void{ 
    this.getBookDetails(this.route.snapshot.paramMap.get('id'))
  }

  getBookDetails(id:any):void{
    this.api.getBook(id)
    .subscribe((data:any)=>{
      this.book = data;
      console.log(this.book);
      this.isLoadingResults = false;
    })

  }

  deleteBook(id:any):void{
    this.isLoadingResults = true;
    this.api.deleteBook(id)
    .subscribe(()=>{
      this.isLoadingResults = false;
      this.router.navigate(['/books']);
    },
    (err)=>{
      console.log(err);
      this.isLoadingResults = false;
    }
    )
  }

}