import { BadInput } from './../Bad-input';
import { AppError } from './../app-error';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { NotFoundError } from '../not-found-error';


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
   this.service.getAll()
    .subscribe(posts => {
     this.posts = posts;
     console.log(posts);
    }
    );
  }
  createPost(input: HTMLInputElement){ 
   let post = { title: input.value };
   this.posts.splice(0, 0, post);
   input.value='';
   this.service.create(post)
    .subscribe(posts => {
      post['id'] = posts;

      console.log(posts);
    },(error: AppError) =>{
      this.posts.splice(0,1);
      if(error instanceof BadInput)
      {
        // this.form.setError(error.originalError)
      }
      else{
      throw error;
      }
    });
}

  updatePost(post){
    this.service.update(post)
    .subscribe(posts => {
      post= posts;
      console.log(posts);
    });
    
  }
  deletePost(post){
    let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      
    this.service.delete(99)
    .subscribe(posts => {
      
    },(error: AppError) =>{
this.posts.splice(index,0,  post);

    if(error instanceof NotFoundError){
      alert(' this data already deleted');
    }
    else
      throw error;
  });
    
  }
 

}
