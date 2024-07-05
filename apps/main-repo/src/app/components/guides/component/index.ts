import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-guide-component',
  template: '',
})
export class GuideComponent {
  title = 'guide-component';
  readonly subcategorySelected = input();
}
