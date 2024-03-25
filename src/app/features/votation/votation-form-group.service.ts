import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export type VotationFormGroup = ReturnType<VotationFormGroupService["createFormGroup"]>
export type VotationFormGroupData = ReturnType<VotationFormGroup["getRawValue"]>;

@Injectable({
  providedIn: 'root'
})
export class VotationFormGroupService {
  public createFormGroup(){
    return new FormGroup({
      startDate: new FormControl<string | null>(null, {validators: Validators.required}),
      endDate: new FormControl<string | null>(null, {validators: Validators.required}),
      subject_1: new FormControl<string | null>(null, {validators: Validators.required}),
      content_1: new FormControl<string | null>(null, {validators: Validators.required}),
      subject_2: new FormControl<string | null>(null, {}),
      content_2: new FormControl<string | null>(null, {}),
      subject_3: new FormControl<string | null>(null, {}),
      content_3: new FormControl<string | null>(null, {}),
      subject_4: new FormControl<string | null>(null, {}),
      content_4: new FormControl<string | null>(null, {})
    })
  }
}
