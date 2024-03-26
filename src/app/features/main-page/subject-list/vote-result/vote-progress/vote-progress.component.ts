import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vote-progress',
  standalone: true,
  imports: [],
  templateUrl: './vote-progress.component.html',
  styleUrl: './vote-progress.component.css'
})
export class VoteProgressComponent {

  @Input() subjectResultYes?: number | undefined;
  @Input() subjectResultNo?: number | undefined;
  protected readonly Math = Math;
}
