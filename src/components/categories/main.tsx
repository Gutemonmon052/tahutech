"use client"
import React from "react";
import { Categoriesdet } from "./categoriesdet";
import { useSortedCategories } from "@/hooks/ctg.hooks"; 
import { ICategory } from "@/interfaces/icategory";
import CategoriesSkeleton from "./categories.skl";

export function CategoriesPage() {

  const { data, loading, error } = useSortedCategories(
    "https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_category"
  );

  return (
    <div>
      <div className="categoriespg">
        <div className="categoriespg-title">
          <h2>Categories</h2>
        </div>
        <div className="categoriespg-list">
          {loading ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                  <CategoriesSkeleton key={i}/>
              ))}
            </>
          ) : error ? (
            <div className="error">Error: {error.message}</div>
          ) : data.length > 0 ? (
            data.map((category: ICategory) => (
              <Categoriesdet key={category.id} {...category} />
            ))
          ) : (
            <div className="no-data">No categories available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
