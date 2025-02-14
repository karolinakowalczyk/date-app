import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Activity } from '../interfaces/activity';
import { Appointment } from '../interfaces/appointment';
import { CustomTime } from '../interfaces/custom-time';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointment$: BehaviorSubject<Appointment> = new BehaviorSubject({});

  public setAppointmentDateTime(date: Date, time: CustomTime): void {
    this.appointment$.pipe(take(1)).subscribe((currAppointment) => {
      const newAppointment: Appointment = {
        ...currAppointment,
        date: date,
        time: time,
      };
      this.appointment$.next(newAppointment);
    });
  }

  public setAppointmentFoods(foods: Activity[]): void {
    this.appointment$.pipe(take(1)).subscribe((currAppointment) => {
      const newAppointment: Appointment = {
        ...currAppointment,
        foods: foods,
      };
      this.appointment$.next(newAppointment);
    });
  }

  public setAppointmentAttractions(attractions: Activity[]): void {
    this.appointment$.pipe(take(1)).subscribe((currAppointment) => {
      const newAppointment: Appointment = {
        ...currAppointment,
        attractions: attractions,
      };
      this.appointment$.next(newAppointment);
    });
  }

  public getAppointment(): Observable<Appointment> {
    return this.appointment$.asObservable();
  }
}
