import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this .userService.getUsers().subscribe((res:any) => {
      this.users = res.users;
      console.log("user data = ",res);
      
    },
    (error) => {
      console.log(error)
    })
  }

}
