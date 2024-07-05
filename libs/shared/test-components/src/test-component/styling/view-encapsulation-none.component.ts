import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <style>
      p {
        color: red;
      }
      .aside {
        background-color: rgb(200, 200, 200);
        color: black;
      }
    </style>
  `,
  selector: 'test-view-encapsulation-none-child',
})
export class ViewEncapsulationNoneChildComponent {}

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ViewEncapsulationNoneChildComponent],
  template: `
    <h2>encapsulation: ViewEncapsulation.None,</h2>
    <p>This mode disables all style encapsulation for the component.</p>
    <p>Any styles associated with the component behave as global styles.</p>
    <p>use to apply TEMPORARY Global Styles dynamically</p>
    <button
      type="submit"
      class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      (click)="global = !global"
    >
      {{ global ? 'Disable global style' : 'Apply global style' }}
    </button>
    @if (global) {
    <test-view-encapsulation-none-child />
    }
  `,
  selector: 'test-view-encapsulation-none',
})
export class ViewEncapsulationNoneComponent {
  global = false;
}
