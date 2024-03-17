import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the components
import { HeaderComponent } from './components/header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';  // Assuming you have a Comments component

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent,
    VideoPlayerComponent,
    RegisterComponent,
    LoginComponent,
    VideoUploadComponent,
    FooterComponent,
    CommentsComponent  // Add CommentsComponent to the declarations
  ],
  imports: [
    BrowserModule,
    RoutingModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

