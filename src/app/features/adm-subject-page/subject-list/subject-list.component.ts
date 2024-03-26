import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DeleteSubjectGQL, Subject, UpdateRemoveSubjectGQL} from "../../../../graphql/generated/graphql";
import {HeroRowComponent} from "../../hero-row/hero-row.component";
import {SubjectNumber} from "../../header/subject-number";
import {CardButtonComponent} from "../../card/components/card-button/card-button.component";
import {lastValueFrom} from "rxjs";
import * as console from "console";
import {JsonPipe} from "@angular/common";
import {HeaderComponent} from "../../header/header.component";
import {IconComponent} from "../../icon/icon.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-adm-subject-list',
  standalone: true,
  imports: [
    HeroRowComponent,
    CardButtonComponent,
    JsonPipe,
    HeaderComponent,
    IconComponent,
    RouterLink
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {


  @Input() subjects: Array<Subject> = [];

  constructor(private deleteSubjectGQL:DeleteSubjectGQL, private updateRemoveSubjectGQL:UpdateRemoveSubjectGQL) {

  }

  protected readonly SubjectNumber = SubjectNumber;

  async onDeleteClicked(subjectId: string) {
    await lastValueFrom(this.updateRemoveSubjectGQL.mutate({subjectId: subjectId}))
    await lastValueFrom(this.deleteSubjectGQL.mutate({subjectId: subjectId}))
  }
}
