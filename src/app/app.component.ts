import { Component } from '@angular/core';
import { Item } from './item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = "Mainak's To Do List";
  constructor() { }

  ngOnInit(): void {
  }
}
