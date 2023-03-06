import { Component, Input } from '@angular/core';

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
