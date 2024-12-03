export type SortButtonsProps = {
  setSortOrder: (order: "asc" | "desc" | "none" | "category") => void;
  categories: string[];
  setSelectedCategory: (category: string) => void;
};
