import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Activity } from '../interfaces/activity';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root',
})
export class FireabseService {
  firestore = inject(Firestore);
  appointmentsCollection = collection(this.firestore, 'appointments');
  attractionsCollection = collection(this.firestore, 'attractions');
  foodsCollection = collection(this.firestore, 'foods');

  getFoods(): Observable<Activity[]> {
    return collectionData(this.foodsCollection, {
      idField: 'id',
    }) as Observable<Activity[]>;
  }

  getAttractions(): Observable<Activity[]> {
    return collectionData(this.attractionsCollection, {
      idField: 'id',
    }) as Observable<Activity[]>;
  }

  addFood(food: Activity): Observable<string> {
    const promise = addDoc(this.foodsCollection, food).then(
      (response) => response.id
    );

    return from(promise);
  }

  addAttraction(attraction: Activity): Observable<string> {
    const promise = addDoc(this.attractionsCollection, attraction).then(
      (response) => response.id
    );

    return from(promise);
  }

  addAppointment(appointment: Appointment): Observable<string> {
    const promise = addDoc(this.appointmentsCollection, appointment).then(
      (response) => response.id
    );

    return from(promise);
  }
}
