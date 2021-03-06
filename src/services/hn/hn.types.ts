export interface HnItem {
  title: string;
  author: string;
  objectID: number;
  num_of_comments: number;
}

export interface HnList {
  hits: HnItem[];
  page: number;
}

export interface HnSearchPayload {
  page: number;
  query: string;
}

export interface HnPostDetail {
  id: number;
  author: string;
  title: string;
  children: {
    text: string;
  }[];
}
