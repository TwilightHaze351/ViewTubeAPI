export interface Comment {
  id: number;
  author: string; // Name or username of the comment author
  text: string;
  createdAt: Date;
  videoId: number; // Associate comment with a video
  likes: number; // Number of likes on the comment
}
