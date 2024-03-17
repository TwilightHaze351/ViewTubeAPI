import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent {
  constructor(private videoService: VideoService) { }

  uploadVideo(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('video', file);

    this.videoService.uploadVideo(formData).subscribe({
      next: (response) => {
        console.log('Video uploaded successfully', response);
      },
      error: (error) => {
        console.error('Error uploading video', error);
      }
    });
  }
}
