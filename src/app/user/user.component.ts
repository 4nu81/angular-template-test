import { Component, OnInit } from '@angular/core';
import { User } from '../user';

export class UserComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'commonName'
  }
  title= "Common Title";
  constructor(){}
  ngOnInit() {}
}
