import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userId: any;
user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
      this.userService.getUserById(this.userId).subscribe((res:any) => {
        this.user = res
        console.log("user data123 = ",res);
      },
      (error) => {
        console.log(error);
      })

    })
  }

}
