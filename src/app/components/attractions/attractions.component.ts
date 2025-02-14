import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../interfaces/activity';
import { ActivitiesComponent } from '../activities/activities.component';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [CommonModule, FormsModule, ActivitiesComponent],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
})
export class AttractionsComponent {
  protected readonly nextPage = 'last-page';

  protected readonly noAttractionImg: string =
    'https://static.vecteezy.com/system/resources/thumbnails/053/824/689/small_2x/cute-heart-illustration-with-smiling-face-and-pastel-colors-png.png';

  protected attractions: Activity[] = [
    {
      name: 'Zoo',
      imgUrl:
        'https://zoo.wroclaw.pl/wp-content/uploads/2024/03/Pingwin-przyladkowy-3-scaled-1.webp',
      selected: false,
    },
    {
      name: 'Skates',
      imgUrl:
        'https://szwajcariabaltowska.pl/wp-content/uploads/2022/11/lyzwy-figurowe.webp',
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

  protected addAttraction(newAttraction: Activity): void {
    this.attractions.push(newAttraction);
  }
}
