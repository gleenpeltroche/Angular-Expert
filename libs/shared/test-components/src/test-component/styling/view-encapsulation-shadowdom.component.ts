import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    standalone: true,
    encapsulation: ViewEncapsulation.ShadowDom,
    template: `
        <p>this is the ViewEncapsulationShadowDom component</p>
        <p>This mode strictly guarantees that only that component's styles apply to elements in the component's template.</p>
        <p>Global styles cannot affect elements in a shadow tree and styles inside the shadow tree cannot affect elements outside of that shadow tree.</p>
        <p>ShadowDom disables tailwind global styles on the component</p>
        <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
    `,
    selector: 'test-view-encapsulation-shadowdom',
})
export class ViewEncapsulationShadowDomComponent { }
