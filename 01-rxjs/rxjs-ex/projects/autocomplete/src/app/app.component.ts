import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <form>
      <input
        name="search"
        type="search"
        placeholder="Search..."
        [(ngModel)]="value"
      />
    </form>
    <ul>
        {{ item | json}}
      <li *ngFor="let item of items() | async">
      </li>
    </ul>
  </div>
  `,
})
export class AppComponent {
  public items(){
    return this._todoS.search(this.value);
  }
  value: string;

  constructor(private _todoS : TodoService){ }

}

