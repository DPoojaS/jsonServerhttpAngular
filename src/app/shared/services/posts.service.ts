import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl : string = `${environment.postBaseUrl}`
  constructor(private _http : HttpClient) { }

  fetchAllPosts():Observable<IPost[]>{
    let httpHeaders = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'JWT Token'
    })
    return this._http.get<IPost[]>(this.baseUrl, {
      headers : httpHeaders
    })
  }
  getSinglePost(id : string):Observable<IPost>{
    let singlePosturl = `${this.baseUrl}/${id}`;
  return   this._http.get<IPost>(singlePosturl)
  }
  createPost(form : IPost):Observable<IPost>{
    return this._http.post<IPost>(this.baseUrl, form)
  }
  editPost(id : number):Observable<IPost>{
      let editUrl = `${this.baseUrl}/${id}`;
    return  this._http.get<IPost>(editUrl)
  }
  updatePost(id : number, obj : IPost):Observable<IPost>{
    let updateUrl = `${this.baseUrl}/${id}`;
    return this._http.patch<IPost>(updateUrl, obj)
  }
  deletePost(id : number):Observable<IPost>{
    let deleteurl = `${this.baseUrl}/${id}`;
   return  this._http.delete<IPost>(deleteurl)
  }
}
