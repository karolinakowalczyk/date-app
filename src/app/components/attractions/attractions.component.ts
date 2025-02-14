import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, switchMap, take, takeUntil } from 'rxjs';
import { Activity } from '../../interfaces/activity';
import { AppointmentService } from '../../services/appointment.service';
import { FireabseService } from '../../services/fireabse.service';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [CommonModule, FormsModule, ActivitiesComponent],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
})
export class AttractionsComponent implements OnInit, OnDestroy {
  protected readonly nextPage = 'last-page';

  protected readonly title = 'Add new couple activities';

  protected readonly noAttractionImg: string =
    'https://static.vecteezy.com/system/resources/thumbnails/053/824/689/small_2x/cute-heart-illustration-with-smiling-face-and-pastel-colors-png.png';

  protected attractions: Activity[] = [];

  private firebaseService = inject(FireabseService);

  private appointmentService = inject(AppointmentService);

  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.firebaseService
      .getAttractions()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.attractions = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected addAttraction(newAttraction: Activity): void {
    this.firebaseService
      .addAttraction(newAttraction)
      .pipe(take(1))
      .subscribe((id) => {
        console.log(id);
        this.attractions.push(newAttraction);
      });
  }

  protected submitSelectedAttractions(attractions: Activity[]): void {
    this.appointmentService.setAppointmentAttractions(attractions);
    this.appointmentService
      .getAppointment()
      .pipe(
        switchMap((newAppointment) =>
          this.firebaseService.addAppointment(newAppointment)
        ),
        take(1)
      )
      .subscribe((id) => {
        console.log(id);
      });
  }
}
