import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eat-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eat-type.component.html',
  styleUrl: './eat-type.component.scss',
})
export class EatTypeComponent {
  protected foodName: string = '';
  protected foodImgUrl: string = '';

  readonly noFoodImg =
    'https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Panecake-Food-Graphics-8601102-1.png';

  protected eatOptions = [
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

  private router = inject(Router);

  protected selectOption(food: any) {
    food.selected = !food.selected;
  }

  protected addNewFood(): void {
    //add to database
    this.eatOptions.push({
      name: this.foodName,
      imgUrl: this.foodImgUrl,
      selected: false,
    });
  }

  protected goToAttractions(): void {
    this.router.navigate(['/attractions']);
  }
}
