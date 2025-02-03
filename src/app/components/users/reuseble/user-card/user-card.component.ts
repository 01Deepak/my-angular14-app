import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: any

  constructor(private router: Router) { }

  viewDetails(userId: any) {
    console.log("id = ",userId);
    this.router.navigate(['users', userId])
  }

  ngOnInit(): void {
  }

}
