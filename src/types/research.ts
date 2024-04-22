import type { I_User } from "~/types/user";
import type { UploadFile } from "ant-design-vue";

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

export interface I_PostResearch {
  title: string;
  description: string;
  file: UploadFile[];
  categories: I_Category[];
}
