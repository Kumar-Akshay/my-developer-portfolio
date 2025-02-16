import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection = '';


  ngOnInit() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}