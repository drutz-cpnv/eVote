import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

export type SubjectFormGroup = ReturnType<SubjectFormGroupService["createFormGroup"]>
export type SubjectFormGroupData = ReturnType<SubjectFormGroup["getRawValue"]>;
@Injectable({
  providedIn: 'root'
})
export class SubjectFormGroupService {
  public createFormGroup(){
    return new FormGroup({
      title: new FormControl<string | null>(null, {validators: Validators.required}),
      description: new FormControl<string | null>(null, {validators: Validators.required})
    })
  }
}
