import {Component, Input} from '@angular/core';
import {ObjectComponent} from "./object/object.component";
import {Subject} from "../../../graphql/generated/graphql";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-vote-sheet',
  standalone: true,
  imports: [
    ObjectComponent,
    ReactiveFormsModule
  ],
  templateUrl: './vote-sheet.component.html',
  styleUrl: './vote-sheet.component.css'
})
export class VoteSheetComponent {
  @Input() subjects: any;
  user_id: FormControl = new FormControl();
  value: FormControl<any> = new FormControl({})

  public getSubjects(): Array<Subject> {
    return this.subjects[0].federal_subject.subjects;
  }
}
