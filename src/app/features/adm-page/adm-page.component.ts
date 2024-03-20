import { Component } from '@angular/core';
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-adm-page',
  standalone: true,
  imports: [
    CardButtonComponent,
    HeaderComponent
  ],
  templateUrl: './adm-page.component.html',
  styleUrl: './adm-page.component.css'
})
export class AdmPageComponent {

}
