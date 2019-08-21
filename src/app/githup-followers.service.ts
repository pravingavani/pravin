import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithupFollowersService extends DataService{

  constructor(http: HttpClient) { 
    super('https://www.udemy.com/the-complete-angular-master-class/learn/practice/4208/instructor-solution#overview',http);
  }
}
