import { Request, Response, NextFunction } from 'express';
import {  Input } from '@angular/core';

import Book from '../models/Book';

export class BookRoute {


    public bookRoute(app:any):void{
        
  
    
        
        app.route('/book/').get((req:Request, res:Response, next:NextFunction
        )=>{
            Book.find((err:any, books:any)=>{
                if(err){return next(err)}
                res.json(books)
            })
        })
        app.route('/book/:id').get((req:Request, res:Response, next:NextFunction)=>{
            Book.findById(req.params.id, (err:any, book:any)=>{
                if(err){return next(err)}
                res.json(book)
            })
        })
        app.route('/book/').post((req:Request, res:Response, next:NextFunction)=>{
            Book.create(req.body, (err:any, book:any)=>{
                if(err){return next(err)}
                res.json(book)
            })
        })
        app.route('/book/:id').put((req:Request, res:Response, next:NextFunction)=>{
            Book.findByIdAndUpdate(req.params.id, req.body, (err:any, book:any)=>{
                if(err){return next(err)}
                res.json(book)
            })
        })
        app.route('/book/:id').delete((req:Request, res:Response, next:NextFunction)=>{
            Book.findByIdAndRemove(req.params.id, req.body, (err:any, book:any)=>{
                if(err){return next(err)}
                res.json(book)
            })
        })
    }
}