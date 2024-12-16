"use client"
import { ArticlesDet } from "@/components/articles/articlesdet";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useFetchBlogData } from "@/hooks/fetchblog.hooks";
import { usePathname } from "next/navigation";
import { IArticle } from "@/interfaces/iarticle";
import ArticleDetSkl from "@/components/articles/articlesdet.skl";

export default function Articles() {
  
  const path = usePathname().split("/")
  let slug_dt = path[path.length - 1];

  // Hilangkan tanda "-" dan ubah slug ke huruf kecil
  slug_dt = slug_dt.replace(/-/g, " ").toLowerCase();

  const { data, loading, error } = useFetchBlogData("https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_content");
  
  const filteredData = (data || []).filter((item:IArticle) => {
    const modifiedTitle = item.title_blog?.toLowerCase() || ""; 
    return modifiedTitle === slug_dt;
  });
  
  
  console.log(filteredData);
  return (
   <div>
    <Navbar/>
            {loading ? (
              <ArticleDetSkl/>
            ) : error ? (
              <div className="error">Error: {error.message}</div>
            ) : filteredData.length > 0 ? (
              filteredData.map((e: IArticle) => (
                <ArticlesDet key={e.id} {...e} />
              ))
            ) : (
              <div className="no-data">No categories available.</div>
            )}
    {/* <ArticlesDet/> */}
    <Footer/>
   </div>
  );
}