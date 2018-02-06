import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';
import { User } from '../../user';

@Component({
  selector: 'app-my-user',
  templateUrl: '../user.component.html',
  styleUrls: ['../user.component.css']
})
export class MyUserComponent extends UserComponent {

  constructor() {
    super();
    this.title = this.title + ' + myUser';
    this.user.name = this.user.name + ' + myName';
  }
  ngOnInit() {
  }
}
