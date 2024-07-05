import { Component } from '@angular/core';
import { ShowCodeComponent } from '@shared-ui/atoms';

@Component({
    standalone: true,
    template: `
        <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
    `,
    selector: 'test-button[customize])',
})
export class NotPseudoClassComponent { }

@Component({
  standalone: true,
  imports: [NotPseudoClassComponent, ShowCodeComponent],
  template: `
    <h2 class="text-2xl font-bold">Selectors</h2>
    <lib-show-code [codeString]="selector" />
    <lib-show-code [codeString]="button" />
    <button customize></button>
  `,
  selector: 'test-pseudoclass',
})
export class PseudoClassComponent {
  selector = `@Component({
    standalone: true,
    template: '<button type="submit" class="my_custom_button_classes">Subscribe</button>',
    selector: 'test-button[customize])',
})
export class NotPseudoClass { }`;
  button = `'<button customize></button>'`;
}
