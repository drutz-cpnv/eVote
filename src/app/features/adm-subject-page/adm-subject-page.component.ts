import {Component, Inject} from '@angular/core';
import {ApolloQueryResult} from "@apollo/client/core";
import {Observable} from "rxjs";
import {GetCurrentVotationGQL, GetSubjectsGQL, GetSubjectsSubscription} from "../../../graphql/generated/graphql";
import {SubjectNumber} from "../header/subject-number";
import { NetworkStatus } from '@apollo/client/core/networkStatus';
import {AsyncPipe, JsonPipe} from "@angular/common";
import {SubjectListComponent} from "./subject-list/subject-list.component";
import {SubscriptionResult} from "apollo-angular";
import {HeaderComponent} from "../header/header.component";
import {IconComponent} from "../icon/icon.component";
import {RouterLink} from "@angular/router";
import {HeroRowComponent} from "../hero-row/hero-row.component";


@Component({
  selector: 'app-adm-subject-page',
  standalone: true,
  imports: [
    AsyncPipe,
    SubjectListComponent,
    SubjectListComponent,
    JsonPipe,
    HeaderComponent,
    IconComponent,
    RouterLink,
    HeroRowComponent
  ],
  templateUrl: './adm-subject-page.component.html',
  styleUrl: './adm-subject-page.component.css'
})
export class AdmSubjectPageComponent {
  @Inject('title')
  public votation?: Observable<ApolloQueryResult<GetCurrentVotationGQL>>;

  public getSubjects$: Observable<SubscriptionResult<GetSubjectsSubscription>>

  constructor(getSubjectsGQL: GetSubjectsGQL) {
    this.getSubjects$ = getSubjectsGQL.subscribe()
  }

  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;
  public NetworkStatus:typeof NetworkStatus = NetworkStatus;
}
