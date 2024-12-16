import React from "react";
import { CardArticle } from "../articlecard";
import Image from "next/image";
import { ICategory } from "@/interfaces/icategory";

export function Categoriesdet(props: ICategory) {
  const [isContentVisible, setContentVisible] = React.useState(false);
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="categoriespg-list-1">
      <div
        className="categoriespg-list-1-title"
        onClick={toggleContentVisibility}
      >
        <h3>{props.category}</h3>
        <span>
          <Image
            src="/assets/images/down-icon.svg"
            width={30}
            height={30}
            alt="arrow"
          />
        </span>
      </div>
      {isContentVisible && (
        <div className="categoriespg-list-1-content">
          <div className="categoriespg-list-desc">
            <p>
              {props.description}
            </p>
          </div>
          <div className="categoriespg-list-rec">
            <h4>Recent Articles</h4>
          </div>
          <div className="categoriespg-list-rec-arc">
            {props._content_blog_category && 
             props._content_blog_category.map((articles) => (
              <CardArticle key={articles.id} {...articles}/>
             ))}
          </div>
        </div>
      )}
    </div>
  );
}
