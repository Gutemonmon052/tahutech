"use client";

import { CardArticle } from "../articlecard";
import { useArticles } from "@/hooks/blog.hooks";
import { ArticlesSkeleton } from "./article.skeleton";

export function ArticlesJumbo() {
  const {
    data,
    loading,
    error,
    pendingSearchQuery,
    selectedCategories,
    filterTime,
    setPendingSearchQuery,
    handleCategoryChange,
    handleFilterChange,
    applySearch,
    resetFilters,
  } = useArticles("https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_content");

  return (
    <div>
      <div className="articlejumbo-title">
        <h2>ARTICLE</h2>
      </div>
      <div className="arjumbo-content">
        <div className="ctg-sidebar">
          <div className="ctg-sidebar-title">
            <h2>Categories</h2>
          </div>
          <div className="ctg-sidebar-list">
            {["Social Media", "ERP", "Digital Literation", "Artificial Intelegence"].map(
              (category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    name={category}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) =>
                      handleCategoryChange(category, e.target.checked)
                    }
                  />
                  {category}
                </label>
              )
            )}
          </div>
          <button onClick={resetFilters}>Reset Categories</button>
        </div>
        <div className="arjumbo-core">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full" 
              value={pendingSearchQuery}
              onChange={(e) => setPendingSearchQuery(e.target.value)}
            />
            <select
              name="filter"
              id="filters-time"
              value={filterTime}
              className="select select-ghost w-full max-w-xs"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="month1">1 Month Ago</option>
              <option value="month3">3 Month Ago</option>
              <option value="oldest">Oldest</option>
            </select>
            
            <button onClick={applySearch}>Search</button>
          </div>
          <div className="arjumbo-main">
            <div className="arjumbo-list-ar">
              {loading ? (
                <>
                  {Array.from({ length: 4 }, (_, i) => (
                      <ArticlesSkeleton key={i}/>
                  ))}
                </>
              ) : error ? (
                <div className="error">Error: {error.message}</div>
              ) : data.length === 0 ? (
                <div className="no-data">No articles found.</div>
              ) : (
                data.map((article) => (
                  <CardArticle key={article.id} {...article} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}