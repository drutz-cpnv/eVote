import {Component, Inject} from '@angular/core';
import {SubjectFormGroupComponent} from "../subject/subject-form-group/subject-form-group.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {SubjectFormGroup, SubjectFormGroupData, SubjectFormGroupService} from "../subject/subject-form-group.service";
import {subjectInput} from "../subject/service-to-gql.mapper";
import {first, last, lastValueFrom} from "rxjs";
import {AddSubjectsGQL, UpdateFederalSubjectsGQL} from "../../../graphql/generated/graphql";

@Component({
  selector: 'app-new-subject-page',
  standalone: true,
    imports: [
        SubjectFormGroupComponent,
        HeaderComponent,
        FormsModule
    ],
  templateUrl: './new-subject-page.component.html',
  styleUrl: './new-subject-page.component.css'
})
export class NewSubjectPageComponent {
  public formGroup:SubjectFormGroup;

  private addSubjectGQL: AddSubjectsGQL;

  private updateSubjectGQL: UpdateFederalSubjectsGQL;

  constructor(subjectFormGroupService:SubjectFormGroupService, addSubjectGQL:AddSubjectsGQL, updateSubjectGQL:UpdateFederalSubjectsGQL) {
    this.updateSubjectGQL = updateSubjectGQL;
    this.addSubjectGQL = addSubjectGQL;
    this.formGroup = subjectFormGroupService.createFormGroup();
  }
  async onCreateClicked() {
    await this.createSubject();
  }
  private async createSubject() {
    const subjectFormData:SubjectFormGroupData = this.formGroup.getRawValue();
    const subject = subjectInput(subjectFormData);

    const result = await lastValueFrom(this.addSubjectGQL.mutate({ subjects: subject }));
    const subjects = result.data?.addSubject?.subject;

    // C'est dégeulasse et on en est conscient mais c'est la crise... Désolé
    if (subjects && subjects.length > 0) {
      const firstSubject = subjects[0];
      const id = firstSubject?.id ?? '';
      await lastValueFrom(this.updateSubjectGQL.mutate({ subjectId: id }));
      alert('Subject created');
      }
  }

}
