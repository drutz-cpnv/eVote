import {Component, Input} from '@angular/core';
import {ObjectComponent} from "./object/object.component";
import {Subject} from "../../../graphql/generated/graphql";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

type SubjectVotes = {
  [key: string]: string
}

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



    for (let subject of this.subjects[0].federal_subject.subjects) {
      this.value.setValue(subject.id)
    }



    return this.subjects[0].federal_subject.subjects;
  }
}
