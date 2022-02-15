export type NotesListType = {
  id: string;
  title: string;
  body: string;
  updated_at: string;
  summary: string;
}[];


export type CommentType = {
    id: string;
    comments: string[];
}