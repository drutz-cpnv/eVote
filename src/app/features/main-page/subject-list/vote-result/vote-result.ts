import {Component, Inject, Input} from '@angular/core';
import {Choice, GetVotationCountGQL, Subject} from "../../../../../graphql/generated/graphql";
import {HeroRowComponent} from "../../../hero-row/hero-row.component";
import {Observable} from "rxjs";
import {AsyncPipe, JsonPipe, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-vote-result',
  standalone: true,
  imports: [
    HeroRowComponent,
    AsyncPipe,
    JsonPipe,
    PercentPipe
  ],
  templateUrl: './vote-result.html',
})

export class VoteResult {

  public subjectResultYes$
  public subjectResultNo$
  @Input() subject!: string;

  constructor(subjectResultYes: GetVotationCountGQL, subjectResultNon: GetVotationCountGQL) {
    this.subjectResultYes$ = subjectResultYes.subscribe({id: this.subject, vote: 'Oui' as Choice})
    this.subjectResultNo$ = subjectResultNon.subscribe({id: this.subject, vote: 'Non' as Choice})
  }

  public getNoCount() {
    const data = this.subjectResultNo$ as any
    return data.data?.votationCount.length()
  }

  protected readonly Math = Math;
}
