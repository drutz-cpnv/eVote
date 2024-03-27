import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NetworkStatus} from "@apollo/client/core/networkStatus";
import {AsyncPipe} from "@angular/common";
import {SubjectListComponent} from "../main-page/subject-list/subject-list.component";
import {AddVoteGQL, GetCurrentVotationGQL, GetCurrentVotationQuery} from "../../../graphql/generated/graphql";
import {VoteSheetComponent} from "../vote-sheet/vote-sheet.component";

@Component({
  selector: 'app-votation-page',
  standalone: true,
  imports: [
    HeaderComponent,
    AsyncPipe,
    SubjectListComponent,
    VoteSheetComponent
  ],
  templateUrl: './vote-page.component.html',
})
export class VotePageComponent {

  public getVotationResult$

  constructor(getVotationResult: GetCurrentVotationGQL) {
    this.getVotationResult$ = getVotationResult.fetch();
  }



  protected readonly NetworkStatus = NetworkStatus;
}
