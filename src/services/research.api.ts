import { iFetch } from "@/services/instance";

// Types
import type { I_Research } from "@/types/research";

export const API_GetResearchList = (
  searchText: string,
  categoryIds: string[]
) =>
  iFetch.get<I_Research[]>("/research/", {
    searchText,
    categoryIds: categoryIds.join(","),
  });

export const API_PostResearch = (research: I_Research) => {
  const formData = new FormData();
  // formData.append("xxx", xxXxx.toString());
  console.log("research: ", research);

  return iFetch.post<I_Research>("/research/", formData);
};
