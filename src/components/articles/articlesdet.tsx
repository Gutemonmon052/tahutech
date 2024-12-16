import Image from "next/image";
import { IArticle } from "@/interfaces/iarticle";

export function ArticlesDet(props:IArticle) {

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
      <div className="articledet">
        <div className="articledet-title">
          <h2>{props.title_blog}</h2>
        </div>
        <div className="articledet-identity">
          <div className="articledet-identity-1">
            <div className="bullet-v2"></div>
            <div className="date-v2">
              <span> {convertDate(parseInt(props.time_release))}</span>
            </div>
            <div className="time-v2">
              <span>{convertTime(parseInt(props.time_release))}</span>
            </div>
          </div>
          <div className="Author-v2">
            <span>{props._blog_author.name}</span>
          </div>
          <div className="article-ctg-v2">{props._blog_category.category}</div>
        </div>
        <div className="articledet-media">
        {props.blog_pic && (
            <Image
              src={props.blog_pic.url}
              width={342}
              height={200}
              alt="article"
            />
          )}
        </div>
        <div className="articledet-desc">
          <p>
            {props.blog_content}
          </p>
        </div>
      </div>
    </div>
  );
}
