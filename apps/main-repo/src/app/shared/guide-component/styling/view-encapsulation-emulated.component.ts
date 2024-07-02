import { Component } from '@angular/core';

// ViewEncapsulation.Emulated
// Encapsultaion by default 
@Component({
    standalone: true,
    template: `
        <p>ViewEncapsulationEmulatedGrandchild</p>
    `,
    selector: 'view-encapsulation-emulated-grandchild',
})
export class ViewEncapsulationEmulatedGrandchild { }

@Component({
    standalone: true,
    imports: [ViewEncapsulationEmulatedGrandchild],
    template: `
        <p>ViewEncapsulationEmulatedChild</p>
        <view-encapsulation-emulated-grandchild />
    `,
    selector: 'view-encapsulation-emulated-child',
})
export class ViewEncapsulationEmulatedChild { }

@Component({
    standalone: true,
    imports: [ViewEncapsulationEmulatedChild],
    template: `
        <style>
            ::ng-deep view-encapsulation-emulated-child p {
                color: red;
                font-size: 20px;
                font-weight: bold;
            }
        </style>
        <p>this is the ViewEncapsulationEmulated component.</p>
        <p>The style defined in the component whit ::ng-deep descendantComponent affects all its descendants</p>
        <view-encapsulation-emulated-child />
    `,
    selector: 'view-encapsulation-emulated',
})
export class ViewEncapsulationEmulated { }