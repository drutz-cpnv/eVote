import {Component, Input} from '@angular/core';
import {ObjectComponent} from "./object/object.component";
import {AddVoteGQL, Choice, Subject} from "../../../graphql/generated/graphql";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {instanceOf} from "graphql/jsutils/instanceOf";
import {lastValueFrom} from "rxjs";

type SubjectVotes = {
  [key: string]: string
}

@Component({
  selector: 'app-vote-sheet',
  standalone: true,
  imports: [
    ObjectComponent,
    ReactiveFormsModule,
    ObjectComponent
  ],
  templateUrl: './vote-sheet.component.html',
  styleUrl: './vote-sheet.component.css'
})
export class VoteSheetComponent {
  @Input() subjects: any;
  user_id: FormControl = new FormControl();
  private addVote: AddVoteGQL;

  constructor(addVote: AddVoteGQL) {
    this.addVote = addVote;
  }

  public getSubjects(): Array<Subject> {
    return this.subjects[0].federal_subject.subjects;
  }

  vote($event: SubmitEvent) {
    $event.preventDefault()
    console.log($event)
    const form: HTMLFormElement = $event?.target as HTMLFormElement
    const elements: Array<HTMLInputElement> = form.elements as unknown as Array<HTMLInputElement>
    for (const $eventElement of elements) {
      lastValueFrom(this.addVote.mutate({
        target: $eventElement.id,
        vote: $eventElement.value as Choice,
        voter: this.user_id.value
      })).then(r => console.log(r))
    }
  }
}
