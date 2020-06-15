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
        (input)="onSearchChange($event.target.value)"
      />
    </form>
    <ul>
      <li *ngFor="let item of items | async">
        {{ item | json}}
      </li>
    </ul>
  </div>
  `,
})
export class AppComponent {
  items;
  public onSearchChange(value){
    this.items = this._todoS.search(value);
  }

  constructor(private _todoS : TodoService){ }

}

