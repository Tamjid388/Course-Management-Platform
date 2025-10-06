export type Video = {
  id: number;
  documentId: string;
  title: string;
  duration: string;
  videoUrl: {
    type: string;
    children: { type: string; text?: string; url?: string }[];
  }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Module = {
  id: number;
  documentId: string;
  title: string;
  description: {
    type: string;
    children: { type: string; text: string }[];
  }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  videos: Video[];
};

export type Course = {
  id: number;
  documentId: string;
  title: string;
  description: {
    type: string;
    children: { type: string; text: string }[];
  }[];
  instructor: string;
  category: string;
  level: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  module: Module[];
};

export type CoursesResponse = {
  data: Course[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type RichTextChild = {
  type: string;
  text?: string;
  url?: string;
  children?: RichTextChild[];
};

export type RichTextBlock = {
  type: string;
  children: RichTextChild[];
};