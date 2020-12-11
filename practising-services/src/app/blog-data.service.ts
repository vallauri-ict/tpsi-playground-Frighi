import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http: HttpClient) { }
  getPosts(){
    let postsUrl='http://localhost:3000/posts/'
    return this.http.get(postsUrl);
  }
}
