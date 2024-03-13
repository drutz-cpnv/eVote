import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

type Theme = 'light' | 'dark';
type Type = 'heading' | 'element';

@Component({
  selector: 'app-hero-row',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './hero-row.component.html',
  styleUrl: './hero-row.component.scss'
})

export class HeroRowComponent {
  @Input('title') title!: string;
  @Input('description') description!: string;
  @Input('theme') theme: Theme = 'light';
  @Input('type') type: Type = 'heading';
}
