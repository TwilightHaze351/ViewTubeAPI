import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component'; // Import the VideoPlayerComponent

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'upload', component: VideoUploadComponent },
  { path: 'watch/:id', component: VideoPlayerComponent }, // Added the route for VideoPlayerComponent
  { path: '', redirectTo: '/videos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
