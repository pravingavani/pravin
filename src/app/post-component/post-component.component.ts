import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';


@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {
posts;


  constructor(private service: PostService) { 
    
  }
  ngOnInit() {
   this.service.getPosts()
    .subscribe(response => {
     this.posts = response;
     console.log(response);
    });
  }
  createPost(input: HTMLInputElement){ 
   let post = { title: input.value };
   input.value='';
   this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response;
      this.posts.splice(0, 0, post);
      console.log(response);
    });

  }
  updatePost(post){
    this.service.updatePost(post)
    
  }
  deletePost(post){
    this.service.deletePost(post)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
    
  }
 

}
