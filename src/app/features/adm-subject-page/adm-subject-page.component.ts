import {Component, Inject} from '@angular/core';
import {ApolloQueryResult, Observable} from "@apollo/client/core";
import {DeleteSubjectGQL, GetCurrentVotationGQL} from "../../../graphql/generated/graphql";
import {SubjectNumber} from "../header/subject-number";
import { NetworkStatus } from '@apollo/client/core/networkStatus';
import {AsyncPipe} from "@angular/common";
import {SubjectListComponent} from "./subject-list/subject-list.component";
import {lastValueFrom} from "rxjs";


@Component({
  selector: 'app-adm-subject-page',
  standalone: true,
  imports: [
    AsyncPipe,
    SubjectListComponent,
    SubjectListComponent
  ],
  templateUrl: './adm-subject-page.component.html',
  styleUrl: './adm-subject-page.component.css'
})
export class AdmSubjectPageComponent {
  @Inject('title')
  public votation?: Observable<ApolloQueryResult<GetCurrentVotationGQL>>;

  public getVotationResult$

  constructor(getCurrentVotationGQL: GetCurrentVotationGQL, private deleteSubjectGQL:DeleteSubjectGQL) {
    this.getVotationResult$ = getCurrentVotationGQL.fetch();
  }

  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;
  public NetworkStatus:typeof NetworkStatus = NetworkStatus;
}
