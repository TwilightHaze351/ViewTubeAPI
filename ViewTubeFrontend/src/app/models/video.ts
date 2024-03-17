export interface video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string; // URL to a thumbnail image
  uploadDate: Date;
  duration: number; // Length of the video in seconds
  views: number; // Number of views
  uploader: string; // Username of the uploader or channel name
}
