import { Component } from '@angular/core';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';
import { ViewEncapsulationShadowDomComponent } from './view-encapsulation-shadowdom.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none.component';

// ViewEncapsulation.Emulated
@Component({
  standalone: true,
  imports: [
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationShadowDomComponent,
    ViewEncapsulationNoneComponent,
  ],
  template: `
    <div class="flex flex-col divide-y gap-4">
      <test-view-encapsulation-emulated />
      <test-view-encapsulation-shadowdom />
      <test-view-encapsulation-none />
    </div>
  `,
  selector: 'test-guide-styling',
})
export class GuideStylingComponent {}
