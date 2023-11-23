import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('menu') menuRef?: ElementRef;
  menuStatus: boolean = false;
  constructor() {
  }
  toggleMenu() {
    this.menuStatus = !this.menuStatus;
    if (this.menuStatus === true) {
      this.menuRef?.nativeElement.classList.add("navbar-open");
    } else {
      this.menuStatus = false;
      this.menuRef?.nativeElement.classList.remove("navbar-open");

    }
  }
}

