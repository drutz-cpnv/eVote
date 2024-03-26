import {Component, Input} from '@angular/core';
import {Subject} from "../../../../graphql/generated/graphql";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './object.component.html',
  styleUrl: './object.component.css',
})
export class ObjectComponent {
  @Input() subject!: Subject;
  @Input() _id: number = 0;
  value: FormControl = new FormControl()

}
