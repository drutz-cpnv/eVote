import {Component, Input} from '@angular/core';
import {IconComponent} from "../../../icon/icon.component";
import { RouterLink } from '@angular/router';
import {CardComponent} from "../../card.component";

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [
    IconComponent,
    RouterLink,
    CardComponent
  ],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent extends CardComponent{
  @Input() iconName!: string;
  @Input() text!: string;
  @Input() linkPath!: string;
  @Input() bottomIconName: string = 'arrow_forward';

  constructor() {
    super();
    this.type = 'button';
  }
}
