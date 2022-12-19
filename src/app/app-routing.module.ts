import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './shared/components/all-posts/all-posts.component';
import { CreatePostComponent } from './shared/components/create-post/create-post.component';
import { UpdatePostComponent } from './shared/components/update-post/update-post.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'dashboard', pathMatch : 'full'
  },
  {
    path : 'dashboard', component : AllPostsComponent
  },
  {
    path : 'createpost', component :CreatePostComponent
  },
  {
    path : 'updatepost/:id', component : UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
