import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  allTestimonials = [
    { 
      title: 'C#, React, Node, Angular', 
      text: '"Akshay delivered good work on this project. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. Will likely have additional jobs for him in the future."', 
      project: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01f2cb3cba5c262bc8',
      icon: 'fa-brands fa-fiverr' // Corrected Font Awesome icon class
    },
    { 
      title: 'C# Programmer for Application Development!', 
      text: '"Good work over the contract period, will work with him again if similar project pops up"', 
      project: 'Upwork',
      url: 'https://www.upwork.com/review/456',
      icon: 'fa-brands fa-upwork' // Corrected Font Awesome icon class
    },
    {
      title: 'Junior dotnet core dev C#!',
      text: '"Thanks for your work and efforts."',
      project: 'Upwork',
      url: 'https://www.upwork.com/review/456',
      icon: 'fa-brands fa-upwork'
    },
    { 
      title: 'Entity Framework 6 Demo!', 
      text: '"We have some questions regarding EF6. Akshay help us with our queries in a quick turn around time. I would like to hire him again in future."', 
      project: 'Upwork',
      url: 'https://www.upwork.com/review/456',
      icon: 'fa-brands fa-upwork'
    },
    {
      title: 'Developer!', 
      text: '"Very responsible vendor. I have been working with him for 2 projects and the skills he possessed is consistent with my standard.Will work with this vendor again"', 
      project: 'Upwork',
      url: 'https://www.upwork.com/review/456',
      icon: 'fa-brands fa-upwork'
    },
    {
      title: 'ASP.NET MVC!', 
      text: '"Highly recommended. Please approach to Him ASAP for your projects."', 
      project: 'Upwork',
      url: 'https://www.upwork.com/review/456',
      icon: 'fa-brands fa-upwork'
    }
  ];
  testimonials = this.allTestimonials.slice(0, 3).map((testimonial, index) => ({
    ...testimonial,
    animationDelay: `${index * 0.3}s`
  }));

  currentIndex = 0;

  getAnimationDelay(index: number): string {
    return `${0.5 + (index * 0.3)}s`;
  }

  getSwapAnimationDelay(index: number): string {
    return '0s';
  }

  // Method to add a new testimonial
  addTestimonial(author: string, title: string, text: string, project: string, url: string, icon: string) {
    this.testimonials.push({ 
      title, 
      text, 
      project,
      url,
      icon,
      animationDelay: `${this.testimonials.length * 0.3}s`
    });
  }

  ngOnInit() {
    // Update one card at a time
    setInterval(() => {
      // Trigger animation for current card
      const cards = document.querySelectorAll('.card-swap');
      if (cards[this.currentIndex]) {
        cards[this.currentIndex].classList.add('animate');
        
        // After animation completes, update content and reset animation
        setTimeout(() => {
          this.updateCardContent(this.currentIndex);
          cards[this.currentIndex].classList.remove('animate');
          this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        }, 1000); // Match animation duration
      }
    }, 3000); // Time between each card swap
  }

  updateCardContent(index: number) {
    const unusedTestimonials = this.allTestimonials.filter(testimonial => 
      !this.testimonials.some(t => t.text === testimonial.text)
    );
    
    if (unusedTestimonials.length > 0) {
      const randomTestimonial = unusedTestimonials[Math.floor(Math.random() * unusedTestimonials.length)];
      this.testimonials[index] = { 
        ...randomTestimonial,
        animationDelay: `${index * 0.3}s`
      };
    }
  }
}