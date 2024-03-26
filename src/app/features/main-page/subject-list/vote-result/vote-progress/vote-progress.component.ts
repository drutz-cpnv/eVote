import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vote-progress',
  standalone: true,
  imports: [],
  templateUrl: './vote-progress.component.html',
  styleUrl: './vote-progress.component.css'
})
export class VoteProgressComponent {

  @Input() subjectResultYes: any;
  @Input() subjectResultNo: any;
  protected readonly Math = Math;

  public getResultYes(): number {
    const result = this.subjectResultYes.filter((result: any) => result.target !== null);
    return result.length ?? 0;
  }

  public getResultNo(): number {
    const result = this.subjectResultNo.filter((result: any) => result.target !== null);
    return result.length ?? 0;
  }
}
