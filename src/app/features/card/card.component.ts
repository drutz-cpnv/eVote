import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

type CardType = 'button' | 'empty' | 'default'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() type: CardType = 'default';
}
