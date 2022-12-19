import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../model/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  postArray : IPost[] = [];
  errorMsg : string = '';
  constructor(private postService : PostsService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.fetchAllPosts() 
                .subscribe( (res) =>{
                  console.log(res);
                  this.postArray = res
                },
                (err) => {
                  console.log(err?.message)     
                    this.errorMsg = err.message             
                }
                
                 )
  }

  onDeletePost(id : number){
    this.postService.deletePost(id)
            .subscribe(res =>{
              this.postArray = this.postArray.filter(ele => ele.id !== id)
            })
  }
}
