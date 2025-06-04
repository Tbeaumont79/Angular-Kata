import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './components/message/message';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Message],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'kata-3';
}
