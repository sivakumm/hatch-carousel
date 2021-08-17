import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User[]>('/assets/users.json').subscribe(users => this.users = users);
  }
}
