import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-component-page',
  standalone: true,
    imports: [
        IconComponent
    ],
  templateUrl: './component-page.component.html',
  styleUrl: './component-page.component.css'
})
export class ComponentPageComponent {

}
