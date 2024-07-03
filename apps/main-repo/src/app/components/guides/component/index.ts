import { Component, input } from '@angular/core';
import { GuideStylingComponent, PseudoClassComponent, OutputFunctionComponent, HostElementsComponent } from '@shared-ui/test-components';

@Component({
  standalone: true,
  imports: [
    PseudoClassComponent, 
    GuideStylingComponent, 
    OutputFunctionComponent,
    HostElementsComponent,
  ],
  selector: 'guide-component',
  template: '',
})
export class GuideComponent {
  title = 'guide-component';
  readonly subcategorySelected = input();
}