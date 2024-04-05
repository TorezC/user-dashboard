import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { PageEvent } from '@angular/material/paginator';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('rowAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition(':enter', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class UserListComponent implements OnInit {
  // Table options
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];
  dataSource = new MatTableDataSource<any>();

  // Pagination options
  pageSizeOptions: number[] = [6];
  pageSize: number = 6;
  totalItems: number = 0;

  loading: boolean = false
  searchValue: string = '';
  users: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  // Get all users by pagination
  getAllUsers(pageNumber: number = 1) {
    this.loading = true
    this.userService.getUsers(pageNumber).subscribe((res) => {
      this.loading = false
      this.totalItems = res.total;
      this.dataSource = res.data;
      this.users = res.data;
    })
  }

  // To go back between page on pagination
  onPageChange(event: PageEvent) {
    const pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getAllUsers(pageIndex);
    this.loading = false
  }

  // Search User By Id
  searchUserById(query: string) {
    this.dataSource = this.users.filter((user: User) => user.id.toString().includes(query));
  }
}
