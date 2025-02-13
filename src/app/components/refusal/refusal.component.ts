import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refusal',
  standalone: true,
  imports: [],
  templateUrl: './refusal.component.html',
  styleUrl: './refusal.component.scss',
})
export class RefusalComponent implements OnInit {
  protected counter: number = 3;

  ngOnInit(): void {
    this.startAutoDecrement();
  }

  private startAutoDecrement() {
    let intervalId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
