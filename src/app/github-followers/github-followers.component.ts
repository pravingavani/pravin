import { GithupFollowersService } from './../githup-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
 followers;
  constructor(private service: GithupFollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(followers => this.followers = followers);

  }

}
