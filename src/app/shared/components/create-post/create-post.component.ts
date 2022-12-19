import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from '../../model/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  submitPostForm!: FormGroup;
  submitBtnFlag : boolean = true;
  postArray : IPost[] = [];
  constructor(private postService : PostsService,
    private fb : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
    this.createSubmitForm()
  }
  createSubmitForm(){
    this.submitPostForm = this.fb.group({
      title : ['', [Validators.required]],
      body : ['', [Validators.required]]
    })
  }

  onSubmitBtn(){
    console.log(this.submitPostForm.value);
    let userId = Math.floor(Math.random() * 10);
    let obj = {
      userId : userId,
      ...this.submitPostForm.value
    }
     this.postService.createPost(obj)
                  .subscribe(res =>{
                    console.log(res);
                    this.postArray.push(res)
                  })
      this.submitPostForm.reset();

      this.router.navigate(['/dashboard'])
  }
}
