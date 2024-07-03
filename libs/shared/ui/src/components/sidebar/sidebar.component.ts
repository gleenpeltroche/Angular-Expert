import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconArrowDownComponent, IconArrowRightComponent, IconInboxStackComponent } from '@shared-ui/icons';

export interface SidebarCategories {
  category:      string;
  subcategories: Subcategory[];
}
export interface Subcategory {
  subcategory: string;
}

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [CommonModule, IconArrowDownComponent, IconArrowRightComponent, IconInboxStackComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  
  readonly sidebarCategories = input.required<SidebarCategories[]>();
  categorySelected = model<string>('');
  subcategorySelected = model<string>('');
  
  onClickCategory(category: string) {
    if(this.categorySelected() === category) return;
    this.categorySelected.set(category);
    this.subcategorySelected.set('');
  }

  onClickSubcategory(subcategory: string) {
    this.subcategorySelected.set(subcategory);
  }

}
