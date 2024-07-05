import { Component } from '@angular/core';

// Encapsulation by default
@Component({
  standalone: true,
  template: ` <p>ViewEncapsulationEmulatedGrandchild</p> `,
  selector: 'test-view-encapsulation-emulated-grandchild',
})
export class ViewEncapsulationEmulatedGrandchildComponent {}

@Component({
  standalone: true,
  imports: [ViewEncapsulationEmulatedGrandchildComponent],
  template: `
    <p>ViewEncapsulationEmulatedChild</p>
    <test-view-encapsulation-emulated-grandchild />
  `,
  selector: 'test-view-encapsulation-emulated-child',
})
export class ViewEncapsulationEmulatedChildComponent {}

@Component({
  standalone: true,
  imports: [ViewEncapsulationEmulatedChildComponent],
  template: `
    <style>
      ::ng-deep view-encapsulation-emulated-child p {
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
    </style>
    <p>this is the ViewEncapsulationEmulated component.</p>
    <p>
      The style defined in the component whit ::ng-deep descendantComponent
      affects all its descendants
    </p>
    <test-view-encapsulation-emulated-child />
  `,
  selector: 'test-view-encapsulation-emulated',
})
export class ViewEncapsulationEmulatedComponent {}
