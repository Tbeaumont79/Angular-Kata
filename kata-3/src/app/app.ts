import { Component } from '@angular/core';
import { User } from './components/user/user';
@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
