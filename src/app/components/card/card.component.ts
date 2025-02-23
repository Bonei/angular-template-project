import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({
    required: true
  }) imageUrl: string | undefined;
  @Input({
    required: true
  }) title: string | undefined;
  @Input() description: string | undefined;
}
