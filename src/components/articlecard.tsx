import * as React from "react";
import Image from "next/image";
import { IArticle } from "@/interfaces/iarticle";
import Link from "next/link";

// export interface IAppProps {
// }

export function CardArticle(props: IArticle) {
  const titleToSlug = (title?: string): string => {
    if (!title) return "";
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  const convertDate = (time?: number): string => {
    if (!time) return "";
    const date = new Date(time);
    return `${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    })}`;
  };

  const convertTime = (time?: number): string => {
    if (!time) return "";
    const date = new Date(time);
    return `${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div>
      <Link href={`/articles/${titleToSlug(props.title_blog)}`} target="blank">
        <div className="article-card">
          <div className="article-datetime">
            <div className="datetime-dt">
              <div className="bullet"></div>
              <div className="date">
                {convertDate(parseInt(props.time_release))}
              </div>
              <div className="time">
                <span>{convertTime(parseInt(props.time_release))}</span>
              </div>
            </div>
            <div className="author">
              {props._blog_author && <p>{props._blog_author.name}</p>}
            </div>
          </div>
          <div className="article-media">
            {props.blog_pic && (
              <Image
                src={props.blog_pic.url}
                width={342}
                height={200}
                alt="article"
              />
            )}
          </div>
          <div className="article-title">
            <h3>{props.title_blog}</h3>
          </div>
          <div className="article-ctg">
            <span>
              {props._blog_category && <b>{props._blog_category.category}</b>}
            </span>
          </div>
          <div className="article-desc">
            <p>{props.blog_content}</p>
          </div>
          <div className="article-link">
            <span>Read More</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
