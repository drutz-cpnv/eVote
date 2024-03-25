import { Component } from '@angular/core';
import {SubjectFormGroupComponent} from "../subject/subject-form-group/subject-form-group.component";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {SubjectFormGroup, SubjectFormGroupData, SubjectFormGroupService} from "../subject/subject-form-group.service";
import {subjectInput} from "../subject/service-to-gql.mapper";
import {AddSubjectsGQL} from "../../../graphql/generated/graphql";
import {lastValueFrom} from "rxjs";

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

  constructor(subjectFormGroupService:SubjectFormGroupService, private addSubjectGQL:AddSubjectsGQL) {
    this.formGroup = subjectFormGroupService.createFormGroup();
  }
  async onCreateClicked() {
    await this.createSubject();
  }
  private async createSubject() {
    const subjectFormData:SubjectFormGroupData = this.formGroup.getRawValue();
    const subject = subjectInput(subjectFormData);

    // Make the GraphQL mutation call
    const result = await lastValueFrom(this.addSubjectGQL.mutate({ subjects: subject }));

    // Extract the id from the result


    // Now you can use the id variable as needed
    console.log(result);
  }

}
