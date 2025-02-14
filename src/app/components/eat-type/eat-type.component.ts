import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { Activity } from '../../interfaces/activity';
import { AppointmentService } from '../../services/appointment.service';
import { FireabseService } from '../../services/fireabse.service';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-eat-type',
  standalone: true,
  imports: [CommonModule, FormsModule, ActivitiesComponent],
  templateUrl: './eat-type.component.html',
  styleUrl: './eat-type.component.scss',
})
export class EatTypeComponent implements OnInit, OnDestroy {
  protected readonly nextPage: string = 'attractions';

  protected readonly title = 'Add new food';

  protected readonly noFoodImg =
    'https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Panecake-Food-Graphics-8601102-1.png';

  protected eatOptions: Activity[] = [];

  private firebaseService = inject(FireabseService);

  private appointmentService = inject(AppointmentService);

  private readonly destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.firebaseService
      .getFoods()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.eatOptions = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected addFood(newFood: Activity) {
    this.firebaseService
      .addFood(newFood)
      .pipe(take(1))
      .subscribe((id) => {
        console.log(id);
        this.eatOptions.push(newFood);
      });
  }

  protected submitSelectedFoods(foods: Activity[]): void {
    this.appointmentService.setAppointmentFoods(foods);
  }
}
