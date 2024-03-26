import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    IconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() type: string = 'solo';

}
