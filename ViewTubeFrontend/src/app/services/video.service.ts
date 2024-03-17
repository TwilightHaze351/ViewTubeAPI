import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { video } from '../models/video'; // Import the Video model if you have one

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'https://localhost:5001/api/videos';  // Adjust to your API's URL

  constructor(private http: HttpClient) { }

  getVideos(): Observable<video[]> {
    return this.http.get<video[]>(this.apiUrl);
  }

  getVideoById(id: string): Observable<video> {
    return this.http.get<video>(`${this.apiUrl}/${id}`);
  }

  uploadVideo(videoData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, videoData);
  }
}
