import * as mongoose from 'mongoose';
import  { Schema } from 'mongoose';

const bookSchema : Schema = new Schema({
    id : {type:String, required:true},
    isbn : {type:String, required:true},
    title : {type:String, required:true},
    author : {type:String, required:true},
    description : {type:String, required:true},
    publisher : {type:String, required:true},
    publishedYear : {type:String, required:true},
    updatedAt : {type:Date, default:Date.now}
    
}

)

export default mongoose.model('book', bookSchema)