import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  @Input() nextPage = '';
  @Input() noActivityImg = '';
  @Input() submitBtnText = 'Submit';
  @Input() title = '';
  @Input() activities: Activity[] = [];

  @Output() newActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() selectedActivites: EventEmitter<Activity[]> = new EventEmitter();

  protected activityName: string = '';
  protected activityImgUrl: string = '';

  private router = inject(Router);

  protected selectOption(attraction: any) {
    attraction.selected = !attraction.selected;
  }

  protected addNewActivity(): void {
    this.newActivity.emit({
      id: this.activities.length + 1,
      name: this.activityName,
      imgUrl: this.activityImgUrl,
      selected: false,
    });
    this.activityName = '';
    this.activityImgUrl = '';
  }

  private getSelectedActivities(): Activity[] {
    let selected: Activity[] = this.activities.filter((act) => act.selected);
    return selected;
  }

  protected goToNextPage(): void {
    this.selectedActivites.emit(this.getSelectedActivities());
    this.router.navigate([`/${this.nextPage}`]);
  }
}
