import { Component, Input } from '@angular/core';

/**
 * The disc component
 *
 * Display a disc
 */
@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss'],
})
export class DiscComponent {
  @Input() color = 'white';

  @Input() animate = false;

  @Input() hidden = false;
}
