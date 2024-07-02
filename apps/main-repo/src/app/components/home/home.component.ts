import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideComponent } from '../guides';
import { SidebarComponent } from '@shared-ui/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GuideComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
