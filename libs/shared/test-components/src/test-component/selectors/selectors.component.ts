import { Component } from '@angular/core';
import { ShowCodeComponent } from '@shared-ui/atoms';

@Component({
    standalone: true,
    template: `
        <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
    `,
    selector: 'button[customize])',
})
export class NotPseudoClass { }

@Component({
    standalone: true,
    imports: [NotPseudoClass, ShowCodeComponent],
    template: `
        <h2 class="text-2xl font-bold">Selectors</h2>
        <show-code [codeString]="selector"/>
        <show-code [codeString]="button"/>
        <button customize></button>
    `,
    selector: 'pseudoclass',
})
export class PseudoClassComponent {
    selector: string = `@Component({
    standalone: true,
    template: '<button type="submit" class="my_custom_button_classes">Subscribe</button>',
    selector: 'button[customize])',
})
export class NotPseudoClass { }`;
    button: string = `'<button customize></button>'`;
}