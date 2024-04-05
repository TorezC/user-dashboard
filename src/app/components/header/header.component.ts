import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() searchQuery = new EventEmitter<any>();

  search(event: any) {
    if (event.target) {
      this.searchQuery.emit(event.target.value);
    }}
}
