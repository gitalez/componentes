import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {


  title: string;

  constructor() { }

  ngOnInit() {

    this.title = 'avatar page'
  }

  presentAvatar(){

  }
}
