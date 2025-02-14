import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept',
  standalone: true,
  imports: [],
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.scss',
})
export class AcceptComponent {
  private router = inject(Router);

  goToDate() {
    this.router.navigate(['/plan']);
  }
}
