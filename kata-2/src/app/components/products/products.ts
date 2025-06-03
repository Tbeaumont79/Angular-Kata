import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  protected count = signal(0);
}
