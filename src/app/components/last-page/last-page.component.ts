import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-last-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './last-page.component.html',
  styleUrl: './last-page.component.scss',
})
export class LastPageComponent {}
