import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { AllPostsComponent } from './shared/components/all-posts/all-posts.component';
import { UpdatePostComponent } from './shared/components/update-post/update-post.component';
import { CreatePostComponent } from './shared/components/create-post/create-post.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    UpdatePostComponent,
    CreatePostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
