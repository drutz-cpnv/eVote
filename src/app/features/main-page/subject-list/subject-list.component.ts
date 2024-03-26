import {Component, Input} from '@angular/core';
import {Subject} from "../../../../graphql/generated/graphql";
import {HeroRowComponent} from "../../hero-row/hero-row.component";
import {SubjectNumber} from "../../header/subject-number";
import {VoteResult} from "./vote-result/vote-result";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [
    HeroRowComponent,
    VoteResult,
    JsonPipe,
    VoteResult
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {

  @Input() subjects: any;

  public getSubjects(): Array<Subject> {
    return this.subjects[0].federal_subject.subjects;
  }

  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;
}
