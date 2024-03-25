import {Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../../header/header.component";
import {SubjectFormGroup} from "../subject-form-group.service";

@Component({
  selector: 'app-subject-form-group',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './subject-form-group.component.html',
  styleUrl: './subject-form-group.component.css'
})
export class SubjectFormGroupComponent {
  @Input({required: true})
  public formGroup!: SubjectFormGroup;
}
