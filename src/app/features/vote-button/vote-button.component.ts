import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {IconComponent} from "../icon/icon.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-votation-button',
  standalone: true,
    imports: [
        CardComponent,
        IconComponent,
        RouterLink
    ],
  templateUrl: './vote-button.component.html',
  styleUrl: './votation-button.component.css'
})
export class VoteButtonComponent {

}
