import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userData: any;

  constructor(private route: ActivatedRoute,private userService: UserService){}

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    const id: number = this.route.snapshot.params['id'];
    console.log(id)
    this.userService.getUserById(id).subscribe((res) => {
      this.userData = res.data
    })
  }

}
