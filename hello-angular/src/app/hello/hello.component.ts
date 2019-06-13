import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name = 'unknown';

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.name = 'Romain';
    // }, 2000);
  }

}
