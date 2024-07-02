import { Component } from '@angular/core';

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
    imports: [NotPseudoClass],
    template: `
        <p>This component replace the button whit my custom button</p>
        <p>Component selector</p>
        <button customize></button>
    `,
    selector: 'pseudoclass',
})
export class PseudoClass { }