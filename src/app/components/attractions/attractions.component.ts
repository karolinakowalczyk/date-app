import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
})
export class AttractionsComponent {
  protected attractionName: string = '';
  protected attractionImgUrl: string = '';

  readonly noAttractionImg =
    'https://static.vecteezy.com/system/resources/thumbnails/053/824/689/small_2x/cute-heart-illustration-with-smiling-face-and-pastel-colors-png.png';

  protected attractions = [
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

  private router = inject(Router);

  protected selectOption(attraction: any): void {
    attraction.selected = !attraction.selected;
  }

  protected addNewAttraction(): void {
    //add to database
    this.attractions.push({
      name: this.attractionName,
      imgUrl: this.attractionImgUrl,
      selected: false,
    });
  }

  protected goToLastPage(): void {
    this.router.navigate(['/last-page']);
  }
}
