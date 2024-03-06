import { Component } from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
}
