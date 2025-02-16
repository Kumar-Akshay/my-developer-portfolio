import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { ActiveSectionService } from './../../services/active-section.service';
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ExperienceComponent, SkillsComponent, TestimonialsComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  sectionElements: { [key: string]: HTMLElement } = {}; // Store section elements
  titles: string[] = ['.NET Developer😍', 'Backend Developer😍', 'Full-Stack Developer😍', 'Design Higly Scalable Solutions😍 ']; // Titles to cycle through
  currentTitleIndex: number = 0; // Current title index
  titleElement!: HTMLElement; // Reference to the title element

  constructor(private activeSectionService: ActiveSectionService, private elRef: ElementRef) {}

  ngOnInit() {
    // Add Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  ngAfterViewInit() {
    // Cache section elements for consistent scrolling
    const sections = ['experience', 'skills', 'testimonials', 'contact'];
    sections.forEach(section => {
      const element = this.elRef.nativeElement.querySelector(`#${section}`);
      if (element) {
        this.sectionElements[section] = element;
      }
    });

    // Add a scroll event listener to update the active section
    window.addEventListener('scroll', this.onWindowScroll.bind(this));

    // Start cycling through titles
    this.titleElement = this.elRef.nativeElement.querySelector('.name-title span');
    this.cycleTitles();
  }

  cycleTitles() {
    setInterval(() => {
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      this.titleElement.textContent = this.titles[this.currentTitleIndex];
    }, 4000); // Change title every 4 seconds
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport

    Object.keys(this.sectionElements).forEach(section => {
      const element = this.sectionElements[section];
      const { top, bottom } = element.getBoundingClientRect();
      if (top <= scrollPosition && bottom >= scrollPosition) {
        this.activeSectionService.setActiveSection(section); // Update active section in service
      }
    });
  }
}
