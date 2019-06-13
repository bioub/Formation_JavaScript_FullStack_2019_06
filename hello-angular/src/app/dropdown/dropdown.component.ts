import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() items = [];
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.selected = this.items[0] || '';
  }

  selectItem(item) {
    this.selected = item;
    this.selectedChange.emit(item);
  }

}
