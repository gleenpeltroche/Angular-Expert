import { Component } from '@angular/core';
import { PseudoClass } from '../../../shared/guide-component/selectors';
import { GuideStylingComponent } from '../../../shared/guide-component/styling';

@Component({
  standalone: true,
  imports: [PseudoClass, GuideStylingComponent],
  selector: 'guide-component',
  templateUrl: 'template.html',
})
export class GuideComponent {
  title = 'guide-component';
}