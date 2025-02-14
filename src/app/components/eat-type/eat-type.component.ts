import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../interfaces/activity';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-eat-type',
  standalone: true,
  imports: [CommonModule, FormsModule, ActivitiesComponent],
  templateUrl: './eat-type.component.html',
  styleUrl: './eat-type.component.scss',
})
export class EatTypeComponent {
  protected readonly nextPage: string = 'attractions';
  protected readonly noFoodImg =
    'https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Panecake-Food-Graphics-8601102-1.png';

  protected eatOptions: Activity[] = [
    {
      name: 'kaczapuri adżuri & georgia',
      imgUrl:
        'https://bartekwpodrozy.pl/wp-content/uploads/2019/07/P1060394_1glowna.jpg',
      selected: false,
    },
    {
      name: 'Asia & Tantam ramen',
      imgUrl:
        'https://mochiko.pl/wp-content/uploads/2020/05/Ramen-7-scaled.jpg',
      selected: false,
    },
    {
      name: 'kaczapuri adżuri & georgia',
      imgUrl:
        'https://bartekwpodrozy.pl/wp-content/uploads/2019/07/P1060394_1glowna.jpg',
      selected: false,
    },
    {
      name: 'Asia & Tantam ramen',
      imgUrl:
        'https://mochiko.pl/wp-content/uploads/2020/05/Ramen-7-scaled.jpg',
      selected: false,
    },
    {
      name: 'kaczapuri adżuri & georgia',
      imgUrl:
        'https://bartekwpodrozy.pl/wp-content/uploads/2019/07/P1060394_1glowna.jpg',
      selected: false,
    },
    {
      name: 'Asia & Tantam ramen',
      imgUrl:
        'https://mochiko.pl/wp-content/uploads/2020/05/Ramen-7-scaled.jpg',
      selected: false,
    },
  ];

  protected addFood(newFood: Activity) {
    this.eatOptions.push(newFood);
  }
}
