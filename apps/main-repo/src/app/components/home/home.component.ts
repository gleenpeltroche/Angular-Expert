import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from '../guides';
import { SidebarComponent } from '@shared-ui/components';
import { Router, RouterModule } from '@angular/router';

export interface SidebarCategories {
  category:      string;
  subcategories: Subcategory[];
}
export interface Subcategory {
  subcategory: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, GuideComponent, SidebarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly sidebarCategories = signal<SidebarCategories[]>([
    {
      category: "components",
      subcategories: [
        {
          subcategory: "selectors",
        },
        {
          subcategory: "style-scoping",
        },
        {
          subcategory: "output",
        },
        {
          subcategory: "host-elements",
        },
        {
          subcategory: "lifecycle",
        }
      ]
    },
    {
      category: "components2",
      subcategories: [
        {
          subcategory: "selector2",
        },
        {
          subcategory: "styling2",
        }
      ]
    }
  ]);
  protected categorySelected = signal("components");
  protected subcategorySelected = signal("selectors");

  constructor(
    private router: Router,
  ){
    effect(() => {
      this.router.navigate([`/${this.categorySelected()}/${this.subcategorySelected()}`]);
    });
  }
}
