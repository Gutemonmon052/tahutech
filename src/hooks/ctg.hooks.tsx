import { useState, useEffect } from "react";
import { ICategory } from "@/interfaces/icategory";

export function useSortedCategories(apiUrl: string) {
  const [data, setData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const result = await response.json();

  
        const filteredCategories = (result || []).filter(
          (category: ICategory) => category.category.toLowerCase() !== "all"
        );

        const sortedCategories = filteredCategories
          .map((category: ICategory) => {
            const articles = category._content_blog_category || [];


            const sortedArticles = articles
              .sort(
                (a, b) =>
                  new Date(b.time_release).getTime() - new Date(a.time_release).getTime()
              )
              .slice(0, 2); 

            return {
              ...category,
              _content_blog_category: sortedArticles,
            };
          })
          .filter((category:ICategory) => category._content_blog_category.length > 0); 

        setData(sortedCategories); 
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]); 

  return { data, loading, error };
}
