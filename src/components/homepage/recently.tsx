"use client"
import { CardArticle } from "../articlecard";
import { IArticle } from "@/interfaces/iarticle";
import { useFetchBlogData } from "@/hooks/fetchblog.hooks";
import { ArticlesSkeleton } from "../articles/article.skeleton";

export function Recently() {
  const { data, loading, error } = useFetchBlogData("https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_content");
  
 const filteredArticle = (data || [])
  .sort((a: IArticle, b: IArticle) => 
    new Date(b.time_release).getTime() - new Date(a.time_release).getTime()
  )
  .slice(0, 3);
  
  return (
    <div>
      <div className="recently">
        <div className="recently-title">
          <h2>Recent Articles</h2>
        </div>
        <div className="recently-list">
        {loading ? (
          <>
           {Array.from({ length: 3 }, (_, i) => (
            <ArticlesSkeleton key={i}/>
          ))}
          </>
          ) : error ? (
            <div className="error">Error: {error.message}</div>
          ) : filteredArticle.length > 0 ? (
            filteredArticle.map((e: IArticle) => (
              <CardArticle key={e.id} {...e}/>
            ))
          ) : (
            <div className="no-data">No categories available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
