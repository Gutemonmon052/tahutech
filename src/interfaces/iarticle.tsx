import { IAuthor } from "./iauthor";
import { ICategoryChild } from "./icategory.child";

export interface IArticle{
  id:number;
  title_blog:string;
  date_release:string;
  blog_content:string;
  time_release:string;
  blog_pic:{
    url: string;
  }
  _blog_category: ICategoryChild;
  _blog_author: IAuthor;
}