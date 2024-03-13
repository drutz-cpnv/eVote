import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {CardButtonComponent} from "../card-button/card-button.component";

@Component({
  selector: 'app-component-page',
  standalone: true,
  imports: [
    IconComponent,
    CardButtonComponent
  ],
  templateUrl: './component-page.component.html',
  styleUrl: './component-page.component.css'
})
export class ComponentPageComponent {

}
