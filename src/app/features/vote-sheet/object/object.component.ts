import {Component, Input} from '@angular/core';
import {Subject} from "../../../../graphql/generated/graphql";

@Component({
  selector: 'app-object',
  standalone: true,
  imports: [],
  templateUrl: './object.component.html',
  styleUrl: './object.component.css',
})
export class ObjectComponent {
  @Input() object!: Subject;
  value?: string = "";

}
