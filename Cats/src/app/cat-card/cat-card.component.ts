import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Cat } from '../app.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cat-card',
  imports: [MatCardModule, MatButtonModule, NgForOf],
  standalone: true,
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  @Input() cat!: Cat;

}
