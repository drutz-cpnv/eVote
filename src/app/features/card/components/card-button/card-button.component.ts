import {Component, Input} from '@angular/core';
import {IconComponent} from "../../../icon/icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-button',
  standalone: true,
    imports: [
        IconComponent,
        RouterLink
    ],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {
  @Input() iconName!: string;
  @Input() text!: string;
  @Input() linkPath!: string;


}
