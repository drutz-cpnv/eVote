import {Component} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeroRowComponent} from "../hero-row/hero-row.component";

@Component({
  selector: 'app-component-page',
  standalone: true,

  imports: [
    IconComponent,
    CardButtonComponent,
    HeroRowComponent
  ],
  templateUrl: './component-page.component.html',
  styleUrl: './component-page.component.css'
})

export class ComponentPageComponent {

}
