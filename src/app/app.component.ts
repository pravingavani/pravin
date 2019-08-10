
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  t1: string ;
  post=  {
    title : 'favorite',
    isfavorite: true
  }
  onFavoriteChanged(eventArgs){
    console.log("Favorite changed: ", eventArgs);
  }
  tweet =  {
    body: '...',
    likesCount: 0,
    isLiked: true
  }
    courses=[1,3];
    course =[1,3];

    viewMode = 'map';

    Courses;
    loadCourses(){ 
      this.Courses = [
      { id: 1,name: 'course1 '},
      { id: 2,name: 'course2 '},
      { id: 3,name: 'course3 '}
    ];
  }
    onAdd(){
      this.Courses.push({ id: 4, name: 'course4' });
    }
    onChange(Course){
      Course.name = "UPDATE";

    }
    
  
}
   