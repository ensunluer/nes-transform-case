export interface IPostItem {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export type PostReturnType = IPostItem[];