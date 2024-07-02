import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconArrowDownComponent, IconArrowRightComponent, IconInboxStackComponent } from '@shared-ui/icons';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [CommonModule, IconArrowDownComponent, IconArrowRightComponent, IconInboxStackComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
