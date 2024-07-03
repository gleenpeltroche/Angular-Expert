import { Component, input } from '@angular/core';

@Component({
  selector: 'show-code',
  standalone: true,
  template: `
    <div class="bg-gray-800 inline-block p-4 rounded-md text-white mt-4 mb-4 max-w-[600px] overflow-auto">
      <pre>{{codeString()}}</pre>
    </div>
  `,
})
export class ShowCodeComponent {
  codeString = input<string>("");
}