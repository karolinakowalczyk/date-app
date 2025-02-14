import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-date',
  standalone: true,
  imports: [NgbModule, FormsModule],
  templateUrl: './appointment-date.component.html',
  styleUrl: './appointment-date.component.scss',
})
export class AppointmentDateComponent {
  protected selectedDate: Date = new Date();
  protected selectedTime = { hour: 18, minute: 0 };
  private router = inject(Router);

  goToEatType() {
    this.router.navigate(['/eat']);
  }
}
