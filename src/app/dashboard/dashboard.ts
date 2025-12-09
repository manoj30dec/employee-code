import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  // public usersList = input();
  @Input() public user: any;
  @Input() public title: any;

  ngOnInit() {

  }
}
