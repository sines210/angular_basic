import { Input } from '@angular/core';
import { Injectable } from '@angular/core';



@Injectable()

export abstract class Book {

    @Input() id!: String;
    @Input() isbn!: String;
    @Input() title!: String;
    @Input() author!: String;
    @Input() description!: String;
    @Input() publisher!: String;
    @Input() publishedYear!: String;
    @Input() updatedAt!: Date;

  }