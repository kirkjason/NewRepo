import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
menu:any = [
  {
    "menu_id": "1",
    "image": "lesson.png",
    "title": "View Assignments"
  },
  {
    "menu_id": "2",
    "image": "q.png",
    "title": "Answer Quiz"

  },
  {
    "menu_id": "3",
    "image": "student.png",
    "title": "View Classmates"
  },
  

]
  constructor() { }

  ngOnInit() {
  }

}
