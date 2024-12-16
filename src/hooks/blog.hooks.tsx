import { useState, useMemo, useCallback } from "react";
import { useFetchBlogData } from "./fetchblog.hooks";
import { IArticle } from "@/interfaces/iarticle";

export const useArticles = (url: string) => {
  const { data: rawData, loading, error } = useFetchBlogData(url);

  const [pendingSearchQuery, setPendingSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filterTime, setFilterTime] = useState("newest");


  const filteredData = useMemo(() => {
    if (!rawData) return [];

    let filtered : IArticle[] = rawData;

    // Filter berdasarkan search query
    if (searchQuery) {
      filtered = filtered.filter((article: IArticle) =>
        article.title_blog.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter berdasarkan kategori
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((article: IArticle) =>
        selectedCategories.includes(article._blog_category.category)
      );
    }

    // Filter berdasarkan waktu
    if (filterTime) {
      const currentTime = new Date().getTime();
      filtered = filtered.sort((a: IArticle, b: IArticle) => {
        const dateA = new Date(a.time_release).getTime();
        const dateB = new Date(b.time_release).getTime();

        if (filterTime === "newest") return dateB - dateA;
        if (filterTime === "oldest") return dateA - dateB;
        if (filterTime === "month1")
          return dateB >= currentTime - 30 * 24 * 60 * 60 * 1000 ? -1 : 1;
        if (filterTime === "month3")
          return dateB >= currentTime - 90 * 24 * 60 * 60 * 1000 ? -1 : 1;
        return 0;
      });
    }

    return filtered;
  }, [rawData, searchQuery, selectedCategories, filterTime]);

  // Fungsi untuk menerapkan search
  const applySearch = useCallback(() => {
    setSearchQuery(pendingSearchQuery);
  }, [pendingSearchQuery]);

  // Fungsi untuk mereset filter
  const resetFilters = useCallback(() => {
    setPendingSearchQuery("");
    setSearchQuery("");
    setSelectedCategories([]);
    setFilterTime("newest");
  }, []);

  return {
    data: filteredData,
    loading,
    error,
    pendingSearchQuery,
    searchQuery,
    selectedCategories,
    filterTime,
    setPendingSearchQuery,
    handleCategoryChange: (category: string, isChecked: boolean) => {
      setSelectedCategories((prev) =>
        isChecked
          ? [...prev, category]
          : prev.filter((cat) => cat !== category)
      );
    },
    handleFilterChange: setFilterTime,
    applySearch,
    resetFilters,
  };
};
