import { HomePageComponent } from './home-page/home-page.component';
import { GithupFollowersService } from './githup-followers.service';
import { AppErrorHandler } from './app-error-handler';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { T1CasePipe } from './t1-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    T1CasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    ChangePassComponent,
    PostComponentComponent,
    GithubFollowersComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'' ,component: HomePageComponent },
      { path: 'contactform', component:ContactFormComponent},
      { path: 'Posts', component:PostComponentComponent},
      { path: 'changepassword', component:ChangePassComponent},
      { path: 'courseform/:id', component:CourseFormComponent}


    ])
  ],
  providers: [
    PostService,
    GithupFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
