import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomTime } from '../../interfaces/custom-time';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-date',
  standalone: true,
  imports: [NgbModule, FormsModule],
  templateUrl: './appointment-date.component.html',
  styleUrl: './appointment-date.component.scss',
})
export class AppointmentDateComponent {
  protected selectedDate: Date = new Date();
  protected selectedTime: CustomTime = { hour: 18, minute: 0 };
  private router = inject(Router);

  private appointmentService = inject(AppointmentService);

  goToEatType() {
    this.router.navigate(['/eat']);
    this.appointmentService.setAppointmentDateTime(
      this.selectedDate,
      this.selectedTime
    );
  }
}
