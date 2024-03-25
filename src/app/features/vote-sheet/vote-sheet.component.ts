import {Component, Input} from '@angular/core';
import {ObjectComponent} from "./object/object.component";

@Component({
  selector: 'app-vote-sheet',
  standalone: true,
  imports: [
    ObjectComponent
  ],
  templateUrl: './vote-sheet.component.html',
  styleUrl: './vote-sheet.component.css'
})
export class VoteSheetComponent {
  @Input() objects: any;

}
