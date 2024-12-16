import { IAuthor } from "./iauthor";
import { ICategoryChild } from "./icategory.child";

export interface ICategory {
  id: number;
  category: string;
  description:string;
  _content_blog_category:{
    id:number,
    title_blog:string;
    date_release:string;
    blog_content:string;
    time_release:string;
    blog_pic:{
      url: string;
    }
    _blog_author: IAuthor;
    _blog_category: ICategoryChild;
  }[];
}