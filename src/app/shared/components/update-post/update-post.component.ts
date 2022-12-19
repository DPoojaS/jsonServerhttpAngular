import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../../model/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  postArray : IPost[] = []
  updateForm!: FormGroup;
  constructor(private route : ActivatedRoute,
    private postService : PostsService,
    private fb : FormBuilder) { }

  ngOnInit(): void {

    this.createUpdateForm()
    this.route.params
        .subscribe((params : Params) =>{
          console.log(params);
          let getId = params['id'];
          localStorage.setItem('postId', getId)
          this.postService.getSinglePost(getId)
              .subscribe(res =>{
                console.log(res);
                this.updateForm.setValue({
                  title : res.title,
                  body : res.body
                })
              })
        })

      
  }
  createUpdateForm(){
    this.updateForm = this.fb.group({
      title : ['', Validators.required],
      body : ['', Validators.required]
    })
  }
  onUpdatePost(){
    console.log(this.updateForm.value);
    let id =  +(localStorage.getItem('postId')!)
    // console.log(localStorage.getItem('postId'));
    
    this.postService.updatePost(id, this.updateForm.value)
                      .subscribe(res =>{
                        console.log(res);
                        this.postArray.push(res);
                        console.log(this.postArray);
                        this.updateForm.reset()
                      })
  }
}
