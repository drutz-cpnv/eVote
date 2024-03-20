import {Component, Inject} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {HeroRowComponent} from "../hero-row/hero-row.component";
import {CardComponent} from "../card/card.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IconComponent,
    HeroRowComponent,
    CardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Inject('title')
  public title: string = 'Main Page';
}
