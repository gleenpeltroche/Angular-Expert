import { Component } from '@angular/core';
import { ViewEncapsulationEmulated} from './view-encapsulation-emulated.component';
import { ViewEncapsulationShadowDom } from './view-encapsulation-shadowdom.component';
import { ViewEncapsulationNone } from './view-encapsulation-none.component';

// ViewEncapsulation.Emulated
@Component({
    standalone: true,
    imports: [ViewEncapsulationEmulated, ViewEncapsulationShadowDom, ViewEncapsulationNone],
    template: `
        <div class="grid grid-cols-1 divide-y">
            <view-encapsulation-emulated/>
            <view-encapsulation-shadowdom/>
            <view-encapsulation-none/>
        </div>
    `,
    selector: 'guide-styling-component',
})
export class GuideStylingComponent { }