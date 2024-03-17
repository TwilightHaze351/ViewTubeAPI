import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'upload', component: VideoUploadComponent },
  { path: 'watch/:id', component: VideoPlayerComponent }, // Route for watching a specific video
  { path: '', redirectTo: '/videos', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RoutingModule]
})
export class RoutingModule {
    static forRoot(arg0: never[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
        throw new Error('Method not implemented.');
    }
}
