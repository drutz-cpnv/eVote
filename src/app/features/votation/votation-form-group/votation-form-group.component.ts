import {Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VotationFormGroup} from "../votation-form-group.service";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-votation-form-group',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './votation-form-group.component.html',
  styleUrl: './votation-form-group.component.css'
})
export class VotationFormGroupComponent {
  @Input({required: true})
  public formGroup!: VotationFormGroup;
}
