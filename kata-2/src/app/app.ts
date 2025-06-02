import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
