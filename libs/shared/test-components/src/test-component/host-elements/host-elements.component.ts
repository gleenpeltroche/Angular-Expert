import { Component, HostBinding, HostListener} from '@angular/core';

// TODO: SECCION POR TERMINAR...
@Component({
    standalone: true,
    imports: [],
    host: {
        // 'role': 'slider',
        '[attr.aria-valuenow]': 'value',
        '[tabIndex]': 'disabled ? -1 : 0',
        '(keydown)': 'updateValue($event)',
    },
    template: `
    <div>
        <h2 [attr.aria-valuenow] [tabIndex] tabIndex="-1">Host elements!</h2>
    </div>
    `,
})
export class HostElementsComponent {
    // value: number = 0;
    disabled= false;
    // updateValue(event: KeyboardEvent) {
    //     console.log(event.key);
    // }

    // @HostBinding('attr.aria-valuenow')
    //     value: number = 0;
    // @HostBinding('tabIndex')
    // getTabIndex() {
    //     return this.disabled ? -1 : 0;
    // }

    @HostListener('keydown', ['$event'])
        updateValue(event: KeyboardEvent) {
       console.log(event);
    }
}
