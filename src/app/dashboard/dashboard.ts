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

  ngOnInit() {
    //console.log("in dashboard component", this.usersList())
    //this.usersList.update(obj => { obj.name = "Dashboard Modified Name" });
    console.log("in dashboard component", this.user);
    this.user.name = "Dashboard Modified Name";
    console.log("after modification in dashboard component", this.user);
  }
}
