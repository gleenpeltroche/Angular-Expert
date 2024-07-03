import { Component, input } from '@angular/core';

@Component({
  selector: 'my-button',
  standalone: true,
  template: `
    <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-4">{{buttonName()}}</button>
  `,
})
export class ButtonComponent {
  buttonName = input<string>("");
}