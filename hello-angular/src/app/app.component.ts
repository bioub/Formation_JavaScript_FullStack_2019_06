import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello></app-hello>
    <app-hello [name]="color"></app-hello>
    <app-hello [name]="'Romain'"></app-hello>
    <app-hello name="Romain"></app-hello>
    <app-counter></app-counter>
    <app-dropdown [items]="['Orange', 'Bleu']" (selectedChange)="color = $event"></app-dropdown>
  `,
  styles: []
})
export class AppComponent {
  color = 'Orange';
}
