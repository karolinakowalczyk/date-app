import { Routes } from '@angular/router';
import { AcceptComponent } from './components/accept/accept.component';
import { AppointmentDateComponent } from './components/appointment-date/appointment-date.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { EatTypeComponent } from './components/eat-type/eat-type.component';
import { HomeComponent } from './components/home/home.component';
import { LastPageComponent } from './components/last-page/last-page.component';
import { RefusalComponent } from './components/refusal/refusal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yes', component: AcceptComponent },
  { path: 'plan', component: AppointmentDateComponent },
  { path: 'eat', component: EatTypeComponent },
  { path: 'attractions', component: AttractionsComponent },
  { path: 'last-page', component: LastPageComponent },
  { path: 'no', component: RefusalComponent },
];
