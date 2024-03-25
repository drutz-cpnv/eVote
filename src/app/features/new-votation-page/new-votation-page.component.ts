import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {VotationFormGroupComponent} from "../votation/votation-form-group/votation-form-group.component";
import {
  VotationFormGroup,
  VotationFormGroupData,
  VotationFormGroupService
} from "../votation/votation-form-group.service";
import {lastValueFrom} from "rxjs";
import {votationInput} from "../votation/service-to-gql.mapper";

@Component({
  selector: 'app-new-votation-page',
  standalone: true,
  imports: [
    VotationFormGroupComponent,
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './new-votation-page.component.html',
  styleUrl: './new-votation-page.component.css'
})
export class NewVotationPageComponent {
  public formGroup:VotationFormGroup;

  constructor(votationFormGroupService:VotationFormGroupService) {
    this.formGroup = votationFormGroupService.createFormGroup();
  }
  async onCreateClicked() {
    await this.createVotation();
  }
  private async createVotation() {
    const votationFormData:VotationFormGroupData = this.formGroup.getRawValue();
    const votation = votationInput(votationFormData);
      await lastValueFrom(this.createVotationGQL.mutate({votation}));
  }
}
