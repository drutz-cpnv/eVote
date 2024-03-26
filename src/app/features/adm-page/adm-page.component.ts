import { Component } from '@angular/core';
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeaderComponent} from "../header/header.component";
import {Subject} from "../../../graphql/generated/graphql";
import {HeroRowComponent} from "../hero-row/hero-row.component";

@Component({
  selector: 'app-adm-page',
  standalone: true,
  imports: [
    CardButtonComponent,
    HeaderComponent,
    HeroRowComponent
  ],
  templateUrl: './adm-page.component.html',
  styleUrl: './adm-page.component.css'
})
export class AdmPageComponent {

}
