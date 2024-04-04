import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = ['id', 'first_name', 'last_name',  'email'];
  dataSource:any
  userData:any;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.getAllUsers()
  }

  
  getAllUsers(){
    this.userService.getUsers().subscribe((res) => {
      console.log(res.data)
      this.userData = res.data
      this.dataSource = new MatTableDataSource(this.userData)
    })
  }
}
