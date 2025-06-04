import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  firstname = input<string>('firstname');
  lastname = input<string>('lastname');
}
