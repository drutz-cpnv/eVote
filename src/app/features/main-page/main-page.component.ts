import { Component, Inject } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeroRowComponent } from "../hero-row/hero-row.component";
import { CardComponent } from "../card/card.component";
import {MyQueryGQL, Subject} from '../../../graphql/generated/graphql';
import { HeaderComponent } from "../header/header.component";
import {SubjectNumber} from "../header/subject-number";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IconComponent,
    HeroRowComponent,
    CardComponent,
    HeaderComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Inject('title')
  public title: string = 'Main Page';

  public subjects: Subject[] = [
    {
      id: "1",
      title: "Initiative populaire « Mieux vivre à la retraite (initiative pour une 13e rente AVS) »",
      description: "Description 1",
    },
    {
      id: "2",
      title: "Initiative populaire « Pour une prévoyance vieillesse sûre et pérenne (initiative sur les rentes) »",
      description: "Description 2",
    },
  ]

/*  constructor(private myQueryGQL: MyQueryGQL) {
    this.myQueryGQL.fetch().subscribe(result => {
      console.log(result);
    });
  }*/
  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;
}
