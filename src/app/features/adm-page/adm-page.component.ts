import { Component } from '@angular/core';
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeaderComponent} from "../header/header.component";
import {Subject} from "../../../graphql/generated/graphql";
import {HeroRowComponent} from "../hero-row/hero-row.component";
import {AsyncPipe} from "@angular/common";
import {SubjectListComponent} from "../main-page/subject-list/subject-list.component";

@Component({
  selector: 'app-adm-page',
  standalone: true,
    imports: [
        CardButtonComponent,
        HeaderComponent,
        HeroRowComponent,
        AsyncPipe,
        SubjectListComponent
    ],
  templateUrl: './adm-page.component.html',
  styleUrl: './adm-page.component.css'
})
export class AdmPageComponent {

}
