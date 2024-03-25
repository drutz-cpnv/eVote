import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DeleteSubjectGQL, Subject} from "../../../../graphql/generated/graphql";
import {HeroRowComponent} from "../../hero-row/hero-row.component";
import {SubjectNumber} from "../../header/subject-number";
import {CardButtonComponent} from "../../card/components/card-button/card-button.component";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-adm-subject-list',
  standalone: true,
  imports: [
    HeroRowComponent,
    CardButtonComponent
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {

  constructor(private deleteSubjectGQL:DeleteSubjectGQL) {

  }
  @Input() subjects: any;

  @Output()
  deleteUser = new EventEmitter<string>();

  public getSubjects(): Array<Subject> {
    return this.subjects[0].federal_subject.subjects;
  }

  protected readonly SubjectNumber = SubjectNumber;
  protected readonly parseInt = parseInt;

  async onDeleteClicked(subjectId: string) {
    console.log('onDeleteClicked', subjectId)
    await lastValueFrom(this.deleteSubjectGQL.mutate({subjectId: subjectId}))
  }
}
