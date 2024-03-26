import {Component} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {CardButtonComponent} from "../card/components/card-button/card-button.component";
import {HeroRowComponent} from "../hero-row/hero-row.component";
import {HeaderComponent} from "../header/header.component";
import {VoteSheetComponent} from "../vote-sheet/vote-sheet.component";
import {Subject, Town_Subjects} from "../../../graphql/generated/graphql";

@Component({
  selector: 'app-component-page',
  standalone: true,

  imports: [
    IconComponent,
    CardButtonComponent,
    HeroRowComponent,
    HeaderComponent,
    VoteSheetComponent
  ],
  templateUrl: './component-page.component.html',
  styleUrl: './component-page.component.css'
})

export class ComponentPageComponent {

  objects: Subject[] = [
    {
      id: "1",
      title: "Object 1",
      description: "Description 1",
    },
    {
      id: "2",
      title: "Object 2",
      description: "Description 2",
    },
    {
      id: "3",
      title: "Object 3",
      description: "Description 3",
    },
    {
      id: "4",
      title: "Object 4",
      description: "Description 4",
    },
    {
      id: "5",
      title: "Object 5",
      description: "Description 5",
    },
    {
      id: "6",
      title: "Object 6",
      description: "Description 6",
    },
    {
      id: "7",
      title: "Object 7",
      description: "Description 7",

    },
    {
      id: "8",
      title: "Object 8",
      description: "Description 8",
    },
    {
      id: "9",
      title: "Object 9",
      description: "Description 9",
    },
    {
      id: "10",
      title: "Object 10",
      description: "Description 10",
    },
  ]
}
