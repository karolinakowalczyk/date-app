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
  protected activityName: string = '';
  protected activityImgUrl: string = '';

  private router = inject(Router);

  protected selectOption(attraction: any) {
    attraction.selected = !attraction.selected;
  }

  protected addNewActivity(): void {
    this.newActivity.emit({
      name: this.activityName,
      imgUrl: this.activityImgUrl,
      selected: false,
    });
  }

  protected goToNextPage(): void {
    this.router.navigate([`/${this.nextPage}`]);
  }
}
