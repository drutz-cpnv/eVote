import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input({required: true}) name: string = "";
  @Input() styleClass: string = "text-2xl";
}
