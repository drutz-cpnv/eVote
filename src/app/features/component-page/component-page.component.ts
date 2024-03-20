import {Component} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeroRowComponent} from "../hero-row/hero-row.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-component-page',
  standalone: true,

  imports: [
    IconComponent,
    CardButtonComponent,
    HeroRowComponent,
    HeaderComponent
  ],
  templateUrl: './component-page.component.html',
  styleUrl: './component-page.component.css'
})

export class ComponentPageComponent {

}
