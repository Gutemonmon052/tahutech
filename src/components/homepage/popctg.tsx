"use client"
import { useSortedCategories } from "@/hooks/ctg.hooks";
import { Categoriesdet } from "../categories/categoriesdet";
import { ICategory } from "@/interfaces/icategory";
import CategoriesSkeleton from "../categories/categories.skl";

export function PopularCtg() {
  const { data, loading, error } = useSortedCategories(
    "https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_category"
  );

  const recomendedCtg = data.slice(0,3);

  return (
    <div>
      <div className="popularctg">
        <div className="popularctg-title">
          <h2>Popular Categories</h2>
        </div>
        <div className="popularctg-list">
           {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                  <CategoriesSkeleton key={i}/>
              ))}
            </>
            ) : error ? (
              <div className="error">Error: {error.message}</div>
            ) : recomendedCtg.length > 0 ? (
              recomendedCtg.map((category: ICategory) => (
                 <Categoriesdet key={category.id} {...category} />
              ))
            ) : (
              <div className="no-data">No categories available.</div>
            )}
          {/* <PopctgCard/>
          <div className="popularctg-list-2">
          <PopctgCard/>
          <PopctgCard/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
