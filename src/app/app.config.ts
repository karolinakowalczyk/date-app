import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAlwZ7kbyMy9OuX-35iabiO1UREaO2XhcM',
  authDomain: 'date-app-416bb.firebaseapp.com',
  projectId: 'date-app-416bb',
  storageBucket: 'date-app-416bb.firebasestorage.app',
  messagingSenderId: '705246004173',
  appId: '1:705246004173:web:8c3fba5c25a0f3589a7a84',
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
