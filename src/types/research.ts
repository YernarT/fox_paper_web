import type { I_User } from "~/types/user";

export interface I_Category {
  id: number;
  name: string;
}

export interface I_Research {
  id: number;
  title: string;
  description: string;
  status: "Submited" | "Under review" | "Rejected" | "Published";
  isPublished: boolean;
  file: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: I_User;
  categories: I_Category[];
}
