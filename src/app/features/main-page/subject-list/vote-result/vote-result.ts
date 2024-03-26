import {Component, Input, OnInit} from '@angular/core';
import {Choice, GetVotationCountGQL} from "../../../../../graphql/generated/graphql";
import {HeroRowComponent} from "../../../hero-row/hero-row.component";
import {AsyncPipe, JsonPipe, PercentPipe} from "@angular/common";
import {VoteProgressComponent} from "./vote-progress/vote-progress.component";

@Component({
  selector: 'app-vote-result',
  standalone: true,
  imports: [
    HeroRowComponent,
    AsyncPipe,
    JsonPipe,
    PercentPipe,
    VoteProgressComponent
  ],
  templateUrl: './vote-result.html',
})

export class VoteResult implements OnInit {

  protected readonly Math = Math;
  public subjectResultYes$
  public subjectResultNo$
  @Input() subject!: string;
  private subjectResultYes: GetVotationCountGQL;
  private subjectResultNon: GetVotationCountGQL;

  constructor(subjectResultYes: GetVotationCountGQL, subjectResultNon: GetVotationCountGQL) {
    this.subjectResultYes = subjectResultYes;
    this.subjectResultNon = subjectResultNon;
    this.subjectResultYes$ = this.subjectResultYes.subscribe({id: this.subject, vote: 'Oui' as Choice})
    this.subjectResultNo$ = this.subjectResultNon.subscribe({id: this.subject, vote: 'Non' as Choice})
  }

  ngOnInit(): void {
    this.subjectResultYes$ = this.subjectResultYes.subscribe({id: this.subject, vote: 'Oui' as Choice})
    this.subjectResultNo$ = this.subjectResultNon.subscribe({id: this.subject, vote: 'Non' as Choice})
  }

  getSubjectResultYes() {
    //return Math.floor((this.subjectResultYes$?.data?.queryCitizen_Subject_Vote?.length ?? 0) / ((this.subjectResultNo$?.data?.queryCitizen_Subject_Vote?.length ?? 0) + (this.subjectResultYes$?.data?.queryCitizen_Subject_Vote?.length ?? 0)) * 100)
  }
}
