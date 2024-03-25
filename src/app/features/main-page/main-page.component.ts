import { Component, Inject } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeroRowComponent } from "../hero-row/hero-row.component";
import { CardComponent } from "../card/card.component";
import {
  GetCurrentVotationGQL,
  GetCurrentVotationQuery,
  MyQueryGQL,
  Subject,
  Votation
} from '../../../graphql/generated/graphql';
import { HeaderComponent } from "../header/header.component";
import {SubjectNumber} from "../header/subject-number";
import { ApolloQueryResult, Observable } from '@apollo/client/core';
import {AsyncPipe, JsonPipe} from "@angular/common";
import { NetworkStatus } from '@apollo/client/core/networkStatus';
import {SubjectListComponent} from "./subject-list/subject-list.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    IconComponent,
    HeroRowComponent,
    CardComponent,
    HeaderComponent,
    AsyncPipe,
    JsonPipe,
    SubjectListComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Inject('title')
  public title: string = 'Main Page';

  @Inject('title')
  public votation?: Observable<ApolloQueryResult<GetCurrentVotationGQL>>;

  public getVotationResult$

  constructor(getCurrentVotationGQL: GetCurrentVotationGQL) {
    this.getVotationResult$ = getCurrentVotationGQL.fetch();
  }

  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;
  public NetworkStatus:typeof NetworkStatus = NetworkStatus;
}
